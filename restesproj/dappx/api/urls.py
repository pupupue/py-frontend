from django.urls import path
from.views import CellListView, CellDetailView


urlpatterns = [
    path('',CellListView.as_view()),
    path('<pk>', CellDetailView.as_view())
]