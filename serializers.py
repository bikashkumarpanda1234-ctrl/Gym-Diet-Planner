from rest_framework import serializers
from django.contrib.auth.models import User
from .models import UserProfile

class UserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserProfile
        fields = ['age', 'gender', 'goal', 'activity_level']

class UserSerializer(serializers.ModelSerializer):
    profile = UserProfileSerializer()
    name = serializers.CharField(write_only=True)

    class Meta:
        model = User
        fields = ['id', 'email', 'name', 'password', 'profile']
        extra_kwargs = {'password': {'write_only': True}}

    def validate_email(self, value):
        if User.objects.filter(username=value).exists():
            raise serializers.ValidationError("This email is already registered.")
        return value

    def create(self, validated_data):
        profile_data = validated_data.pop('profile')
        name = validated_data.pop('name', '')
        
        # User username will be the email since we only ask for email in frontend
        user = User.objects.create_user(
            username=validated_data['email'],
            email=validated_data['email'],
            first_name=name,
            password=validated_data['password']
        )
        UserProfile.objects.create(user=user, **profile_data)
        return user
