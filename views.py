from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes, authentication_classes
from rest_framework.permissions import AllowAny, IsAuthenticated
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.models import User
from .serializers import UserSerializer
from .models import UserProfile
from django.conf import settings
import google.generativeai as genai

@api_view(['POST'])
@permission_classes([AllowAny])
@authentication_classes([])
def register_user(request):
    serializer = UserSerializer(data=request.data)
    if serializer.is_valid():
        user = serializer.save()
        login(request, user)  # Log them in upon registration
        return Response({
            "message": "User registered successfully",
            "user": {
                "id": user.id,
                "email": user.email,
                "name": user.first_name
            }
        }, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
@permission_classes([AllowAny])
@authentication_classes([])
def login_user(request):
    email = request.data.get('email')
    password = request.data.get('password')

    user = authenticate(request, username=email, password=password)
    if user is not None:
        login(request, user)
        # Ensure profile exists
        UserProfile.objects.get_or_create(user=user)
        return Response({
            "message": "Login successful",
            "user": {
                "id": user.id,
                "email": user.email,
                "name": user.first_name,
                "gemini_api_key": user.profile.gemini_api_key
            }
        }, status=status.HTTP_200_OK)
    
    return Response({"error": "Invalid email or password"}, status=status.HTTP_401_UNAUTHORIZED)

@api_view(['POST'])
@authentication_classes([])
def logout_user(request):
    logout(request)
    return Response({"message": "Logout successful"}, status=status.HTTP_200_OK)


@api_view(['POST'])
@permission_classes([AllowAny])
@authentication_classes([])
def chat_with_ai(request):
    message = request.data.get('message', '').lower()
    context = request.data.get('context', '')
    user_email = request.data.get('email', '')
    
    api_key = getattr(settings, 'GEMINI_API_KEY', '')
    
    # Try to find user's personal key
    if request.user.is_authenticated:
        profile, _ = UserProfile.objects.get_or_create(user=request.user)
        if profile.gemini_api_key:
            api_key = profile.gemini_api_key
    elif user_email:
        try:
            user = User.objects.get(email=user_email)
            if user.profile.gemini_api_key:
                api_key = user.profile.gemini_api_key
        except (User.DoesNotExist, UserProfile.DoesNotExist):
            pass

    # If API key is present, try to use real AI
    if api_key and api_key != "YOUR_GEMINI_API_KEY":
        try:
            genai.configure(api_key=api_key)
            model = genai.GenerativeModel('gemini-1.5-flash')
            prompt = f"User Context: {context}\nUser Question: {message}\nAct as an expert fitness advisor. Response in markdown."
            response = model.generate_content(prompt)
            return Response({"reply": response.text}, status=status.HTTP_200_OK)
        except Exception as e:
            # Return the specific error from the SDK
            return Response({"error": f"AI Connection Error: {str(e)}"}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

    # Simple local fallback
    reply = "### Nutrition Advisor (Local Mode)\n\n"
    if "protein" in message:
        reply += "High protein is key for muscle repair! Aim for **1.6g-2.2g of protein per kg** of body weight. Good sources: Eggs, Chicken Breast, Paneer, and Soya Chunks."
    elif "weight loss" in message or "fat loss" in message:
        reply += "For fat loss, maintain a **slight calorie deficit** (300-500 kcal). Focus on high-fiber vegetables and lean protein to stay full while eating fewer calories."
    elif "breakfast" in message:
        reply += "A balanced breakfast sets the tone for the day. Try **Oats with fruits** or a **Besan Chilla** for a mix of complex carbs and protein."
    else:
        reply += f"Based on your context ({context}), I recommend focusing on whole foods and staying consistent with your workout plan. \n\n*Note: To get more detailed AI advice, please add your Gemini API key in the Settings page.*"
    
    return Response({"reply": reply}, status=status.HTTP_200_OK)

@api_view(['POST'])
@permission_classes([AllowAny])
@authentication_classes([])
def test_ai_connection(request):
    api_key = request.data.get('gemini_api_key')
    if not api_key:
        return Response({"error": "No API key provided"}, status=status.HTTP_400_BAD_REQUEST)
        
    try:
        genai.configure(api_key=api_key)
        model = genai.GenerativeModel('gemini-1.5-flash')
        response = model.generate_content("Ping") # Simple ping
        return Response({"message": "Connection Successful! AI is live."}, status=status.HTTP_200_OK)
    except Exception as e:
        return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

@api_view(['POST'])
@permission_classes([AllowAny])
@authentication_classes([])
def update_settings(request):
    email = request.data.get('email')
    gemini_key = request.data.get('gemini_api_key')
    
    if not email:
        return Response({"error": "Email is required"}, status=status.HTTP_400_BAD_REQUEST)
        
    try:
        user = User.objects.get(email=email)
        profile, _ = UserProfile.objects.get_or_create(user=user)
        profile.gemini_api_key = gemini_key
        profile.save()
        return Response({"message": "Settings updated successfully"}, status=status.HTTP_200_OK)
    except User.DoesNotExist:
        return Response({"error": "User not found"}, status=status.HTTP_404_NOT_FOUND)
