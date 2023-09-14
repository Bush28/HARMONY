from django.http import HttpResponse,JsonResponse
from .models import IndividualAccount, JointAccount
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

def create_individual_account(request):
    if request.method == 'POST':
        username = request.POST.get('username')
        balance = float(request.POST.get('balance'))
        account = IndividualAccount.objects.create(username=username, balance=balance)
        return JsonResponse({'status': 'success', 'account_id': account.id})
    return JsonResponse({'status': 'failed'})

def create_joint_account(request):
    if request.method == 'POST':
        username1 = request.POST.get('username1')
        username2 = request.POST.get('username2')
        total_balance = float(request.POST.get('balance'))

        # Fetch individual accounts based on usernames
        user1 = IndividualAccount.objects.get(username=username1)
        user2 = IndividualAccount.objects.get(username=username2)

        # Calculate individual incomes
        income1 = user1.balance
        income2 = user2.balance

        # Calculate proportionate balance
        total_income = income1 + income2
        proportionate_balance1 = (income1 / total_income) * total_balance
        proportionate_balance2 = (income2 / total_income) * total_balance

        # Create joint account
        joint_account = JointAccount.objects.create(
            balance=total_balance,
            proportionate_balance1=proportionate_balance1,
            proportionate_balance2=proportionate_balance2
        )

        return JsonResponse({'status': 'success', 'account_id': joint_account.id})

    return JsonResponse({'status': 'failed'})



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



