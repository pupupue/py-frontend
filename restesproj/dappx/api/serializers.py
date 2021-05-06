from rest_framework import serializers
from dappx.models import Cell

class CellSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cell
        fields = ('Processed', 'ODD', 'GMDHMS', 'US', 'FMIN', 'FMAX','DF', 'N', 'SPECTER', 'CRC')