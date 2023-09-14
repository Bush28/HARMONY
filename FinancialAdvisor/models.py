from django.db import models


'''
Account
    type:
    balance:
    users

User:
    name
    spouse
    accounts

UserAccount:
    userId
    accountId

Expense:
    amount
    date

ExpenseAccount:
    expenseId
    accountId
'''

#for Individual Accounts
class IndividualAccount(models.Model):
    username = models.CharField(max_length=50)
    balance = models.FloatField()


class JointAccount(models.Model):
    balance = models.FloatField()
    proportionate_balance1 = models.FloatField()
    proportionate_balance2 = models.FloatField()


#for Expenses
class Expense(models.Model):
    amount = models.FloatField()
    description = models.CharField(max_length=100)
    account = models.ForeignKey(IndividualAccount, related_name='expenses', on_delete=models.CASCADE) #relationship with individual account 

#for Joint Expenses
class JointExpense(models.Model):
    amount = models.FloatField()
    description = models.CharField(max_length=100) #what type of expense 
    account = models.ForeignKey(JointAccount, related_name='expenses', on_delete=models.CASCADE)

# Model for Savings
class Saving(models.Model):
    amount = models.FloatField()
    description = models.CharField(max_length=100)
    account = models.ForeignKey(IndividualAccount, related_name='savings', on_delete=models.CASCADE)

# Model for Joint Savings
class JointSaving(models.Model):
    amount = models.FloatField()
    description = models.CharField(max_length=100)
    account = models.ForeignKey(JointAccount, related_name='savings', on_delete=models.CASCADE)

class Advice(models.Model):
    question = models.CharField(max_length=100)
    answer = models.TextField()
    
