# Generated by Django 3.2.19 on 2023-07-01 14:35

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='campaign',
            name='influencers',
            field=models.ManyToManyField(blank=True, default='', to='base.Influencer'),
        ),
    ]