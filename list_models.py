import google.generativeai as genai
import sys

api_key = "AIzaSyDVBFDZx9tlXI06qchNWbvboAd-0D0pWRI"
try:
    genai.configure(api_key=api_key)
    for m in genai.list_models():
        if 'generateContent' in m.supported_generation_methods:
            print(m.name)
except Exception as e:
    print(f"ERROR: {str(e)}")
