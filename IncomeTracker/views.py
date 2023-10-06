from django.shortcuts import render
from django.http import JsonResponse
from .models import IndividualAccount
from django.views.decorators.csrf import csrf_exempt
import json
from .models import IndividualAccount
from django.contrib.auth.decorators import login_required

@login_required
def get_account(request):
    account = IndividualAccount.objects.get(user=request.user)
    return JsonResponse({
        "username": account.username,
        "balance": account.balance,
        "spouse": account.spouse,
        "joint_balance": account.joint_balance,
    })


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


# @login_required
# def get_accounts(request):
#     account = IndividualAccount.objects.get(user=request.user)
#     return JsonResponse(
#         {
#             "username": account.username,
#             "user_income": account.user_income,  # Changed from "balance"
#             "partner": account.partner,  # Changed from "spouse"
#             "partner_income": account.partner_income,  # New field
#             "joint_balance": account.joint_balance,
#         }
#     )


# def logout_view(request):
#     logout(request)
#     return JsonResponse({"success": True})


# def login_view(request):
#     if request.method == "POST":
#         data = json.loads(request.body)
#         username = data.get("username")
#         password = data.get("password")

#         user = authenticate(request, username=username, password=password)

#         if user is not None:
#             login(request, user)
#             return JsonResponse({"success": True, "message": "Logged in successfully"})
#         else:
#             return JsonResponse(
#                 {"success": False, "message": "Invalid username or password"}
#             )

#     return JsonResponse({"success": False, "message": "Invalid request method"})


# def signup_view(request):
#     if request.method == "POST":
#         username = request.POST["username"]
#         password = request.POST["password"]
#         user_income = request.POST["user_income"]
#         partner = request.POST["partner"]
#         partner_income = request.POST["partner_income"]
#         joint_balance = request.POST["joint_balance"]

#         # Creating a new user for django user handling
#         user = User.objects.create_user(username=username, password=password)
#         user.save()

#         # Create an IndividualAccount linked to this user
#         individual_account = IndividualAccount(
#             user=user,
#             username=username,
#             user_income=user_income,  # Changed from "balance"
#             partner=partner,
#             partner_income=partner_income,
#             joint_balance=joint_balance,
#         )
#         individual_account.save()

#         return JsonResponse(
#             {"success": True, "message": "Account created successfully"}
#         )

#     return JsonResponse({"success": False, "message": "Invalid request method"})

