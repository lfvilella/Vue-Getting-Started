from django.urls import path

from . import views

app_name = 'frontend'

urlpatterns = [
    path('', views.HomeVuejsView.as_view()),
    path('api/books.json', views.BooksListAPI.as_view()),
    path('api/books/<int:book_id>.json', views.BookDetailAPI.as_view()),
]
