from django.http import HttpResponse
from django.shortcuts import render
import os
import openai
import json

def ask_question(request):
    try:
        openai.api_key = "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"
        
        if not openai.api_key:
            raise ValueError("API Key is not set")
        
        if request.method == 'POST':
            user_question = request.POST.get('question')
            
            data = {
                'prompt': user_question,
                'max_tokens': 100
            }
            
            response = openai.Completion.create(
                engine="text-davinci-002",
                prompt=data['prompt'],
                max_tokens=data['max_tokens']
            )
            
            answer = response['choices'][0]['text'].strip()
            return render(request, 'index.html', {'answer': answer})
        
        return render(request, 'index.html')
        
    except Exception as e:
        return HttpResponse(f"An error occurred: {e}")




# from django.http import HttpResponse
# from django.shortcuts import render
# import requests
# import json

# def ask_question(request):
#     if request.method == 'POST':    
#         user_question = request.POST.get('question')
#         api_key = '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'
#         headers = {"Content-Type": "application/json",
#                    'Authorization': f'Bearer {api_key}'}
#         data = {
#             'prompt': user_question,
#             'max_tokens': 100
#         }
#         response = requests.post("https://api.openai.com/v1/chat/completions", headers=headers, data=json.dumps(data))
#         # answer = response.json()['choices'][0]['text'].strip()
#         answer = response.json()['choices'][0]['text'].strip()
#         # answers= response.json()['choices'][0]['message']['content']
        

#         api_response = response.json()
#         print("API Response:", api_response)
#         answer = api_response.get('choices', [{}])[0].get('text', '').strip()


#         return render(request, 'index.html', {'answer': answer})
#     return render(request, 'index.html')











# import os
# import openai
# openai.organization = "org-838SPuORDNaoX5wHRhFHF9uL"
# openai.api_key = os.getenv("OPENAI_API_KEY")
# openai.Model.list()



