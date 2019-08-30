from rest_framework import serializers
from rest_framework.response import Response
from rest_framework.decorators import api_view
from LC_api.models import Join


class JoinXuliehua(serializers.ModelSerializer):
    class Meta:
        depth = 1
        model = Join
        fields = '__all__'


@api_view(['POST'])
def apiJoin(request):

    if request.method == 'POST':
        # name = request.POST["name"]
        print('请求开始')
        # print(name)
        jj = Join()

        jj.name = request.POST.get('name')
        jj.adress = request.POST.get('adress')
        jj.email = request.POST.get('email')
        jj.phone = request.POST.get('phone')
        jj.save()

    return Response({'data':'ok'})


