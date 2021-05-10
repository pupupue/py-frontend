from django.contrib import admin
from .models import Article, Cell

# Register your models here.

#admin.site.register(Article)


@admin.register(Article)
class ArticleModel(admin.ModelAdmin):
    list_filter = ('title', 'description')
    list_display = ('title', 'description')


@admin.register(Cell)
class CellModel(admin.ModelAdmin):
    list_filter = ('Processed', )
    list_display = ('Processed', )
