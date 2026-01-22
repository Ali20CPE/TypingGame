from django.contrib import admin
from .models import database, Profile
from django.contrib.auth.admin import UserAdmin
from django.contrib.auth.models import User

admin.site.register(database)
admin.site.register(Profile)
# Register your models here.
