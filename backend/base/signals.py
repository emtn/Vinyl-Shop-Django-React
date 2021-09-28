from django.db.models.signals import pre_save
from django.contrib.auth.models import User

def updateUser(sender, instance, **kwargs):
    """
    user.username is always the email of the user
    """
    user = instance

    if user.email != "":
        user.username = user.email
#before saving a user entitie run the updateUser
pre_save.connect(updateUser, sender=User)
