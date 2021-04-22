# Generated by Django 2.2.20 on 2021-04-22 10:32

from django.db import migrations

from olympia import amo


def update_endpoint(apps, schema_editor):
    Shelf = apps.get_model('shelves', 'Shelf')
    for shelf in Shelf.objects.filter(endpoint='search-themes'):
        shelf.update(endpoint='search', addon_type=amo.ADDON_STATICTHEME)


class Migration(migrations.Migration):

    dependencies = [
        ('shelves', '0014_auto_20210416_2225'),
    ]

    operations = [migrations.RunPython(update_endpoint)]
