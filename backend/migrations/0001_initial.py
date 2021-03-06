# Generated by Django 2.2 on 2019-04-15 16:56

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Market',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=256)),
                ('b', models.FloatField(default=0.0)),
                ('number_of_outcomes', models.IntegerField(default=1)),
                ('start_date', models.DateField(verbose_name='start date')),
                ('end_date', models.DateField(verbose_name='end date')),
                ('resolved', models.BooleanField(default=False)),
            ],
        ),
        migrations.CreateModel(
            name='Outcome',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('outcome_date', models.DateField(verbose_name='outcome date')),
                ('outstanding', models.IntegerField(default=0)),
                ('probability', models.FloatField(default=0.0)),
                ('winning', models.BooleanField(default=False)),
                ('market', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='backend.Market')),
            ],
        ),
        migrations.CreateModel(
            name='Portfolio',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=256)),
                ('cash', models.FloatField(default=0)),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='Position',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('volume', models.IntegerField(default=0)),
                ('closed', models.BooleanField(default=False)),
                ('market', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='backend.Market')),
                ('outcome', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='backend.Outcome')),
                ('portfolio', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='backend.Portfolio')),
            ],
        ),
        migrations.CreateModel(
            name='Order',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('volume', models.IntegerField(default=0)),
                ('timestamp', models.DateTimeField(verbose_name='timestamp')),
                ('outcome', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='backend.Outcome')),
                ('portfolio', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='backend.Portfolio')),
                ('position', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='backend.Position')),
            ],
        ),
    ]
