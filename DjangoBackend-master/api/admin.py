from django.contrib import admin
from .models import AlarmChanges, Articles, Notes, Cell, CellAlarms1, CellAlarms2, CellAlarms3, CellAlarms4, CellAlarms5, CellAlarms6

# Register your models here.

#admin.site.register(Article)


@admin.register(Articles)
class ArticleModel(admin.ModelAdmin):
    list_filter = ('title', 'description')
    list_display = ('title', 'description')


@admin.register(Notes)
class ArticleModel(admin.ModelAdmin):
    list_filter = ('title', 'description', 'user')
    list_display = ('title', 'description', 'user')


@admin.register(Cell)
class CellModel(admin.ModelAdmin):
    list_filter = ('Processed', )
    list_display = ('Processed', )


@admin.register(CellAlarms1)
class CellAlarms1Model(admin.ModelAdmin):
    list_filter = ('Name', 'cellID', 'Status')
    list_display = ('Name', 'cellID', 'Status')


@admin.register(CellAlarms2)
class CellAlarms2Model(admin.ModelAdmin):
    list_filter = ('Name', 'cellID', 'Status')
    list_display = ('Name', 'cellID', 'Status')


@admin.register(CellAlarms3)
class CellAlarms3Model(admin.ModelAdmin):
    list_filter = ('Name', 'cellID', 'Status')
    list_display = ('Name', 'cellID', 'Status')


@admin.register(CellAlarms4)
class CellAlarms4Model(admin.ModelAdmin):
    list_filter = ('Name', 'cellID', 'Status')
    list_display = ('Name', 'cellID', 'Status')


@admin.register(CellAlarms5)
class CellAlarms5Model(admin.ModelAdmin):
    list_filter = ('Name', 'cellID', 'Status')
    list_display = ('Name', 'cellID', 'Status')


@admin.register(CellAlarms6)
class CellAlarms6Model(admin.ModelAdmin):
    list_filter = ('Name', 'cellID', 'Status')
    list_display = ('Name', 'cellID', 'Status')


@admin.register(AlarmChanges)
class AlarmChangesModel(admin.ModelAdmin):
    list_filter = ('Date', 'User')
    list_display = ('Date', 'User')
