import google.generativeai as genai
import sys

api_key = "AIzaSyDVBFDZx9tlXI06qchNWbvboAd-0D0pWRI"
try:
    genai.configure(api_key=api_key)
    model = genai.GenerativeModel('gemini-flash-latest')
    response = model.generate_content("Ping")
    print(f"SUCCESS: {response.text}")
except Exception as e:
    print(f"ERROR: {str(e)}")
