from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json
from .models import Profile
from django.http import JsonResponse
from .models import database
from django.core.validators import validate_email
from django.core.exceptions import ValidationError


@csrf_exempt
def signup_view(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
        except json.JSONDecodeError:
            return JsonResponse({'error': 'Invalid JSON'}, status=400)
        
        username = data.get('username')
        password = data.get('password')
        email = data.get('email')
        conPassword = data.get("conpassword")
        if not username or not password or not email or not conPassword:
            return JsonResponse({'error': 'All fields are required'}, status=400)
        if password != conPassword:
            return JsonResponse({'error': 'Passwords do not match'}, status=400)
        # if len(password) < 8:
        #     return JsonResponse({'error': 'Password must be at least 8 characters'}, status=400)
        try:
            validate_email(email)
        except ValidationError:
            return JsonResponse({'error': 'Invalid email address'}, status=400)
        # if User.objects.filter(email=email).exists():
        #     return JsonResponse({'error': 'Email already registered'}, status=400)
       
        if User.objects.filter(username=username).exists():
            return JsonResponse({'error': 'Username already exists'}, status=400)
        user = User.objects.create_user(username=username, password=password, email=email)
        return JsonResponse({'message': 'User created successfully'}, status=201)
            
    elif request.method == 'GET':
        return JsonResponse({'message': 'GET request received. Use POST to sign up.'}, status=200)
    
    return JsonResponse({'error': 'Invalid request method'}, status=405)

from django.contrib.auth import authenticate, login
from django.http import JsonResponse
from .models import Profile

@csrf_exempt
def login_view(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        username = data.get('username')
        password = data.get('password')
        if not username or not password:
            return JsonResponse({'error': 'All fields are required'}, status=400)
        user = authenticate(username=username, password=password)
        if user is not None:
            login(request, user)

            try:
                profile = user.profile
                level = profile.level  
                exp = profile.exp     
                return JsonResponse({
                    'message': 'Login successful',
                    'level': level,
                    'exp': exp
                }, status=200)
            except Profile.DoesNotExist:
                return JsonResponse({'error': 'Profile does not exist'}, status=400)
        else:
            return JsonResponse({'error': 'Invalid credentials'}, status=401)

    elif request.method == 'GET':
        return JsonResponse({'message': 'GET request received. Use POST to log in.'}, status=200)
    
    return JsonResponse({'error': 'Invalid request method'}, status=405)


@csrf_exempt
def get_english_words(request):
    if request.method == 'GET':
        try:
            Data_base = database.objects.first()
            return JsonResponse({
                'word_en': Data_base.word_en
            }, safe=False)
        except AttributeError:
            return JsonResponse({'error': 'No words found'}, status=404)
    return JsonResponse({'error': 'Method not allowed'}, status=405)
@csrf_exempt
def get_arabic_words(request):
    if request.method == 'GET':
        try:
            Data_base = database.objects.first()
            return JsonResponse({
                'word_ar': Data_base.word_ar
            }, safe=False)
        except AttributeError:
            return JsonResponse({'error': 'No words found'}, status=404)
    return JsonResponse({'error': 'Method not allowed'}, status=405)
@csrf_exempt
def get_numbers(request):
    if request.method == 'GET':
        try:
            Data_base = database.objects.first()
            return JsonResponse({
                'number': Data_base.number
            }, safe=False)
        except AttributeError:
            return JsonResponse({'error': 'No numbers found'}, status=404)
    return JsonResponse({'error': 'Method not allowed'}, status=405)

@csrf_exempt
def gain_exp(request):
    if request.method == 'POST' :#and request.user.is_authenticated:
        try:
            data = json.loads(request.body)
            userselect = data.get('user')
            user = User.objects.get(username=userselect)
            profile = user.profile  
            

            # Update EXP
            profile.level = data.get('level',profile.level)
            profile.exp = data.get('exp',profile.exp)



            # Explicitly save the profile
            profile.save()

            return JsonResponse({
                'message': 'EXP updated',
            })
        except Exception as e:
            return JsonResponse({'error': str(e)}, status=400)
    return JsonResponse({'error': 'Unauthorized'}, status=401)