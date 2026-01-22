from django.apps import AppConfig
class AccountsConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'accounts'
    def ready(self): #ready: calledd when the app is fully loadded and ready to be used.
        import accounts.signals  # import the signals module
