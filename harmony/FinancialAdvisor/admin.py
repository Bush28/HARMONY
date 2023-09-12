from django.contrib import admin
from .models import IndividualAccount, JointAccount, Expense, JointExpense, Saving, JointSaving

admin.site.register(IndividualAccount)
admin.site.register(JointAccount)
admin.site.register(Expense)
admin.site.register(JointExpense)
admin.site.register(Saving)
admin.site.register(JointSaving)
