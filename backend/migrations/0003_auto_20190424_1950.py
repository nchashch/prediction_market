# Generated by Django 2.2 on 2019-04-24 19:50

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0002_auto_20190417_1048'),
    ]

    operations = [
        migrations.RenameField(
            model_name='order',
            old_name='volume',
            new_name='amount',
        ),
        migrations.AddField(
            model_name='order',
            name='type',
            field=models.TextField(choices=[('buy', 'Buy'), ('sell', 'Sell')], default='buy'),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='market',
            name='number_of_outcomes',
            field=models.IntegerField(null=True),
        ),
        migrations.AlterField(
            model_name='outcome',
            name='outstanding',
            field=models.IntegerField(),
        ),
        migrations.AlterField(
            model_name='outcome',
            name='probability',
            field=models.FloatField(),
        ),
    ]
