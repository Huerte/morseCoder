from django.shortcuts import render
from .morse import MORSE_CODE
from django.http import JsonResponse

def home_page(request):
    return render(request, 'home.html')

def text_translate(request):
    text = request.GET.get('text')
    if text:
        encoded_code = ' '.join([MORSE_CODE[char] if char != ' ' else '/' for char in text.upper()])

    return JsonResponse({'encoded_code': encoded_code})