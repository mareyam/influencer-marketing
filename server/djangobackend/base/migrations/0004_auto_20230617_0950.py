# Generated by Django 3.2.19 on 2023-06-17 04:50

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0003_remove_influencer_storycost'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='campaign',
            name='keyword',
        ),
        migrations.AddField(
            model_name='campaign',
            name='keyword',
            field=models.ManyToManyField(blank=True, default='', max_length=50, null=True, to='base.Keyword'),
        ),
    ]
