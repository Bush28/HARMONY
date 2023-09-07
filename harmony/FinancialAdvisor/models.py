from django.db import models

class IndividualAccount(models.Model):
    username = models.CharField(max_length=50)
    balance = models.FloatField()


class JointAccount(models.Model):
    balance = models.FloatField()

class Expense(models.Model):
    amount = models.FloatField()

class JointExpense(models.Model):
    amount = models.FloatField()

class Saving(models.Model):
    amount = models.FloatField()

class JointSaving(models.Model):
    amount = models.FloatField()
