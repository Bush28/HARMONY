from django.db import models
class IndividualAccount(models.Model):
    username = models.CharField(max_length=50)
    income = models.FloatField()
    partner = models.CharField(max_length=50)
    partner_income= models.FloatField()
    joint_balance = models.FloatField()
