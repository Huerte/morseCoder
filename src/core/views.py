from django.shortcuts import render
from django.http import JsonResponse
from .morse import MORSE_CODE


def home_page(request):
    return render(request, 'home.html')


def text_translate(request):
    text = request.GET.get('text', '')
    encoded = []
    for word in text.split(' '):
        symbols = []
        for ch in word:
            code = MORSE_CODE.get(ch.upper())
            if code:
                symbols.append(code)
        if symbols:
            encoded.append(' '.join(symbols))
    encoded_code = ' / '.join(encoded)
    return JsonResponse({'encoded_code': encoded_code})