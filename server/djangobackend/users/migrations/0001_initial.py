# Generated by Django 3.2.19 on 2023-07-01 07:38

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion
import django.utils.timezone
import uuid


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('auth', '0014_auto_20230516_1128'),
    ]

    operations = [
        migrations.CreateModel(
            name='UserAccount',
            fields=[
                ('password', models.CharField(max_length=128, verbose_name='password')),
                ('last_login', models.DateTimeField(blank=True, null=True, verbose_name='last login')),
                ('is_superuser', models.BooleanField(default=False, help_text='Designates that this user has all permissions without explicitly assigning them.', verbose_name='superuser status')),
                ('id', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False, verbose_name='Public Identifier')),
                ('username', models.CharField(blank=True, max_length=30, null=True)),
                ('email', models.EmailField(max_length=254, unique=True)),
                ('image', models.ImageField(blank=True, null=True, upload_to='images/')),
                ('name', models.CharField(blank=True, max_length=30, null=True)),
                ('role', models.CharField(blank=True, choices=[('Admin', 'Admin'), ('PRAgency', 'PRAgency'), ('BrandManager', 'BrandManager')], max_length=30, null=True)),
                ('status', models.CharField(choices=[('active', 'active'), ('suspended', 'suspended')], default='active', max_length=30)),
                ('date_joined', models.DateField(blank=True, default=django.utils.timezone.now, null=True)),
                ('is_deleted', models.BooleanField(blank=True, default=False, null=True)),
                ('created_date', models.DateField(blank=True, default=django.utils.timezone.now, null=True)),
                ('modified_date', models.DateField(blank=True, default=django.utils.timezone.now, null=True)),
                ('brands_managing', models.CharField(blank=True, default='', max_length=30, null=True)),
                ('groups', models.ManyToManyField(blank=True, help_text='The groups this user belongs to. A user will get all permissions granted to each of their groups.', related_name='user_set', related_query_name='user', to='auth.Group', verbose_name='groups')),
                ('user_permissions', models.ManyToManyField(blank=True, help_text='Specific permissions for this user.', related_name='user_set', related_query_name='user', to='auth.Permission', verbose_name='user permissions')),
            ],
            options={
                'verbose_name': 'user',
                'verbose_name_plural': 'users',
            },
        ),
        migrations.CreateModel(
            name='ChildAge',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(choices=[('under 5', 'under 5'), ('6-12', '6-12'), ('13-18', '13-18'), ('adult', 'adult'), ('None', 'None')], max_length=200)),
                ('min_age', models.IntegerField(blank=True, default=0, null=True)),
                ('max_age', models.IntegerField(blank=True, default=0, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='Interest',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(choices=[('Fashion', 'Fashion'), ('Music', 'Music'), ('Food', 'Food'), ('Health', 'Health'), ('Gaming', 'Gaming'), ('Dance', 'Dance'), ('Entertainment', 'Entertainment'), ('Family', 'Family'), ('Kids', 'Kids'), ('Other', 'Other')], max_length=200)),
            ],
        ),
        migrations.CreateModel(
            name='TempTokken',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('token', models.TextField()),
                ('user', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, related_name='login_user', to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='PRInvites',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('brand_manager', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='pr_agency', to=settings.AUTH_USER_MODEL)),
                ('pr_agency', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='brand_manager', to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='Influencer',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('gender', models.CharField(blank=True, choices=[('Male', 'Male'), ('Female', 'Female'), ('Other', 'Other')], default='', max_length=20, null=True)),
                ('age', models.IntegerField(blank=True, default=0, null=True)),
                ('followers', models.IntegerField(blank=True, default=0, null=True)),
                ('post_cost', models.IntegerField(blank=True, default=0, null=True)),
                ('engagement_rate', models.IntegerField(blank=True, default=0, null=True)),
                ('isparent', models.CharField(blank=True, choices=[('Yes', 'Yes'), ('No', 'No')], default='No', max_length=20, null=True)),
                ('children_count', models.IntegerField(blank=True, default=0, null=True)),
                ('children_age', models.ManyToManyField(blank=True, default='None', to='users.ChildAge')),
                ('interests', models.ManyToManyField(blank=True, default='Other', to='users.Interest')),
                ('user', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, related_name='Influencer', to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]