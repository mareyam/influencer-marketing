# Generated by Django 3.2.18 on 2023-05-17 05:14

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0091_auto_20230517_1012'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='prlogin',
            options={'ordering': ['-updated', '-created']},
        ),
        migrations.AddField(
            model_name='prlogin',
            name='updated',
            field=models.DateField(blank=True, default=django.utils.timezone.now, null=True),
        ),
    ]