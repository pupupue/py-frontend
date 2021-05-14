from django.urls import path, include
from .views import AlarmChangesViewSet, NotesViewSet, ArticleViewSet, UserViewSet, CellAlarms1ViewSet, CellAlarms2ViewSet, CellAlarms3ViewSet, CellAlarms4ViewSet, CellAlarms5ViewSet, CellAlarms6ViewSet, CellViewSet
from rest_framework.routers import DefaultRouter

#article_list, article_details, ArticleList, ArticleDetails

router = DefaultRouter()
router.register('articles', ArticleViewSet, basename='articles')
router.register('notes', NotesViewSet, basename='notes')
router.register('cell', CellViewSet, basename='cell')
router.register('AlarmChanges', AlarmChangesViewSet, basename='AlarmsChanges')
router.register('cellAlarms1', CellAlarms1ViewSet, basename='cellAlarms1')
router.register('cellAlarms2', CellAlarms2ViewSet, basename='cellAlarms2')
router.register('cellAlarms3', CellAlarms3ViewSet, basename='cellAlarms3')
router.register('cellAlarms4', CellAlarms4ViewSet, basename='cellAlarms4')
router.register('cellAlarms5', CellAlarms5ViewSet, basename='cellAlarms5')
router.register('cellAlarms6', CellAlarms6ViewSet, basename='cellAlarms6')
router.register('users', UserViewSet)

urlpatterns = [
    path('api/', include(router.urls)),
    #path('articles/', ArticleList.as_view()),
    #path('articles/<int:id>/', ArticleDetails.as_view())
    #path('articles/', article_list),
    #path('articles/<int:pk>/', article_details),
]
