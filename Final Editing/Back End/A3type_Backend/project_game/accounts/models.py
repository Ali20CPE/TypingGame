from django.db import models
from django.contrib.auth.models import User

class database(models.Model):
    word_en = models.JSONField(default=list)
    word_ar = models.JSONField(default=list)
    number = models.JSONField(default=list)

    def __str__(self):
        # return "Words and Numbers"
        return f"{len(self.word_en)} English words"

class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    # user = models.OneToOneField(User, on_delete=models.SET_NULL, null = True)
    level = models.IntegerField(default=1)
    exp = models.IntegerField(default=0)

    def __str__(self):
        return f"{self.user.username}'s Profile - Level: {self.level}, EXP: {self.exp}"