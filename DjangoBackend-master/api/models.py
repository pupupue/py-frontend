from django.db import models

# Create your models here.


class Article(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()

    def __str__(self):
        return self.title


class Cell(models.Model):

    Processed = models.CharField("Processed", max_length=240)
    ODD = models.TextField("ODD", max_length=20)
    GMDHMS = models.CharField("GMDHMS", max_length=20)  #BloB
    US = models.CharField("US", max_length=20)
    FMIN = models.CharField("FMIN", max_length=20)
    FMAX = models.CharField("FMAX", max_length=20)
    DF = models.CharField("DF", max_length=20)  #BloB
    N = models.CharField("N", max_length=20)
    SPECTER = models.CharField("SPECTER", max_length=20)  #BloB
    CRC = models.CharField("CRC", max_length=20)

    def __str__(self):
        return self.Processed


class CellAlarms1(models.Model):
    Name = models.CharField("Name", max_length=20)
    Date = models.CharField("Date", max_length=20)
    Floor = models.CharField("Floor", max_length=20)
    cellID = models.CharField("cellID", max_length=20)
    Status = models.CharField("Status", max_length=20)

    def __str__(self):
        return self.Name


class CellAlarms2(models.Model):
    Name = models.CharField("Name", max_length=20)
    Date = models.CharField("Date", max_length=20)
    Floor = models.CharField("Floor", max_length=20)
    cellID = models.CharField("cellID", max_length=20)
    Status = models.CharField("Status", max_length=20)

    def __str__(self):
        return self.Name


class CellAlarms3(models.Model):
    Name = models.CharField("Name", max_length=20)
    Date = models.CharField("Date", max_length=20)
    Floor = models.CharField("Floor", max_length=20)
    cellID = models.CharField("cellID", max_length=20)
    Status = models.CharField("Status", max_length=20)

    def __str__(self):
        return self.Name


class CellAlarms4(models.Model):
    Name = models.CharField("Name", max_length=20)
    Date = models.CharField("Date", max_length=20)
    Floor = models.CharField("Floor", max_length=20)
    cellID = models.CharField("cellID", max_length=20)
    Status = models.CharField("Status", max_length=20)

    def __str__(self):
        return self.Name


class CellAlarms5(models.Model):
    Name = models.CharField("Name", max_length=20)
    Date = models.CharField("Date", max_length=20)
    Floor = models.CharField("Floor", max_length=20)
    cellID = models.CharField("cellID", max_length=20)
    Status = models.CharField("Status", max_length=20)

    def __str__(self):
        return self.Name


class CellAlarms6(models.Model):
    Name = models.CharField("Name", max_length=20)
    Date = models.CharField("Date", max_length=20)
    Floor = models.CharField("Floor", max_length=20)
    cellID = models.CharField("cellID", max_length=20)
    Status = models.CharField("Status", max_length=20)

    def __str__(self):
        return self.Name