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
        balance = data.get("balance")
        spouse = data.get("spouse")
        joint_balance = data.get("jointBalance")
        new_account = IndividualAccount.objects.create(
            username=username,
            balance=balance,
            spouse=spouse,
            joint_balance=joint_balance,
        )
        return JsonResponse(
            {
                "id": new_account.id,
                "username": new_account.username,
                "balance": new_account.balance,
                "spouse": new_account.spouse,
                "joint_balance": new_account.joint_balance,
            }
        )


def get_accounts(request):
    accounts = list(IndividualAccount.objects.values())
    return JsonResponse({"accounts": accounts})
