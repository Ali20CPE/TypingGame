# from django.db.models.signals import post_save
# from django.dispatch import receiver
# from django.contrib.auth.models import User
# from .models import Profile
# from django.contrib.auth.signals import user_logged_in

# @receiver(post_save, sender=User)#When a user signup it wii send a signal of type post_save,then the user will be stored in sender variable
# def handle_user_profile(sender, instance, created, **kwargs):
#     if created:
#         Profile.objects.create(user=instance)
#     instance.profile.save() 
# @receiver(user_logged_in)#When a user log in it will send a signal
# def user_logged_in_handler(sender, request, user, **kwargs): #ensure that a Profile object exists for the user when they log in
#     Profile.objects.get_or_create(user=user)  #This method checks if a Profile with the given user already exists in the database.If it exists, it simply retrieves it.If it doesn't exist, it creates a new Profile for the user.

from django.db.models.signals import post_save
from django.dispatch import receiver
from django.contrib.auth.models import User
from .models import Profile

@receiver(post_save, sender=User)
def create_or_update_profile(sender, instance, created, **kwargs):
    """
    Automatically create or update a Profile when a User is created/updated.
    """
    if created:
        # Create a Profile for new users
        Profile.objects.create(user=instance)
    else:
        # Save the profile whenever the User is saved (optional but safe)
        if hasattr(instance, 'profile'):
            instance.profile.save()