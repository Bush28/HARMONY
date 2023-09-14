from django.db import models
class IndividualAccount(models.Model):
    username = models.CharField(max_length=50)
    balance = models.FloatField()
    spouse = models.CharField(max_length=50, null=True, blank=True)
    joint_balance = models.FloatField(null=True, blank=True)
