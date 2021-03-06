# Generated by Django 2.2 on 2020-11-11 17:10

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('matrix', '0002_traditionalmaterial'),
    ]

    operations = [
        migrations.CreateModel(
            name='NewMaterial',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50)),
                ('desc', models.TextField()),
                ('density', models.FloatField()),
                ('uts', models.CharField(max_length=12)),
                ('compress', models.CharField(max_length=12)),
                ('youngs', models.CharField(max_length=12)),
                ('fracture', models.CharField(max_length=12)),
                ('hardness', models.CharField(max_length=12)),
                ('date_posted', models.DateTimeField(default=django.utils.timezone.now)),
                ('author', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='NewAltMaterial',
            fields=[
                ('newmaterial_ptr', models.OneToOneField(auto_created=True, on_delete=django.db.models.deletion.CASCADE, parent_link=True, primary_key=True, serialize=False, to='matrix.NewMaterial')),
            ],
            bases=('matrix.newmaterial',),
        ),
        migrations.CreateModel(
            name='NewTraditionalMaterial',
            fields=[
                ('newmaterial_ptr', models.OneToOneField(auto_created=True, on_delete=django.db.models.deletion.CASCADE, parent_link=True, primary_key=True, serialize=False, to='matrix.NewMaterial')),
            ],
            bases=('matrix.newmaterial',),
        ),
    ]
