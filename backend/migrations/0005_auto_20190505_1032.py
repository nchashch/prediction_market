# Generated by Django 2.2 on 2019-05-05 10:32

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0004_auto_20190429_0905'),
    ]

    operations = [
        migrations.AlterField(
            model_name='order',
            name='position',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='order', to='backend.Position'),
        ),
        migrations.AlterField(
            model_name='portfolio',
            name='user',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='portfolio', to=settings.AUTH_USER_MODEL),
        ),
        migrations.AlterField(
            model_name='position',
            name='portfolio',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='position', to='backend.Portfolio'),
        ),
    ]
