from django.shortcuts import render
from django.views import View
from django.http import JsonResponse

from . import models

class HomeVuejsView(View):
    def get(self, request):
        return render(request, 'home_vuejs.html')

class BooksListAPI(View):
    def get(self, request):
        data = []
        for book in models.Book.objects.all():
            data.append({'id': book.id})

        return JsonResponse(data, safe=False)

class BookDetailAPI(View):
    def get(self, request, book_id):
        book = models.Book.objects.get(pk=book_id)
        return JsonResponse({'id': book.id, 'name': book.name})
