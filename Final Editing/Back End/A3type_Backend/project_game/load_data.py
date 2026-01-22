import json
import django
import os

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "project_game.settings")
django.setup()

from accounts.models import database

with open("meaningful_words.json", encoding="utf-8") as file:
    data = json.load(file)
with open("arabic_words.json", encoding="utf-8") as file:
    data_ar = json.load(file)
with open("1000_numbers.json", encoding="utf-8") as file:
    data_num = json.load(file)

database.objects.create( # insert a new record directly into the database
    word_en=data.get("word_en", []), #If  word_en does not exists in the JSON file, it returns an empty set [] as a default.
    word_ar=data_ar.get("word_ar", []),
    number=data_num.get("number", []),
)