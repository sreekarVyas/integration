from django.db import models

# Create your models here.


class UserData(models.Model):
    name = models.CharField(max_length=50)
    age = models.PositiveIntegerField()

    def __str__(self):
        return self.name
