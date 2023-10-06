from django.db import models
class IndividualAccount(models.Model):
    username = models.CharField(max_length=50)
    balance = models.FloatField()
    spouse = models.CharField(max_length=50, null=True, blank=True)
    joint_balance = models.FloatField(null=True, blank=True)
# from django.db import models
# from django.contrib.auth.models import User

# class IndividualAccount(models.Model):
#     user = models.OneToOneField(User, on_delete=models.CASCADE)
#     username = models.CharField(max_length=50)
#     user_income = models.FloatField()
#     partner = models.CharField(max_length=50)
#     partner_income = models.FloatField()
#     joint_balance = models.FloatField()

#     def __str__(self):
#         return self.username
