from django.shortcuts import render
from django.http import JsonResponse
from .models import IndividualAccount
from django.views.decorators.csrf import csrf_exempt
import json
from .models import IndividualAccount


@csrf_exempt
def create_individual_account(request):
    print("\n\nhi\n\n")
    if request.method == "POST":
        data = json.loads(request.body)
        username = data.get("username")
        income = data.get("income")
        partner = data.get("partner")
        partner_income=data.get('partner_income')
        joint_balance = data.get("jointBalance")
        new_account = IndividualAccount.objects.create(
            username=username,
            income=income,
            partner=partner,
            partner_income=partner_income,
            joint_balance=joint_balance,
        )
        return JsonResponse(
            {
                "id": new_account.id,
                "username": new_account.username,
                "income": new_account.income,
                "partner": new_account.partner,
                "partner_income": new_account.partner_income,
                "joint_balance": new_account.joint_balance,
            }
        )


def get_accounts(request):
    accounts = list(IndividualAccount.objects.values())
    return JsonResponse({"accounts": accounts})
