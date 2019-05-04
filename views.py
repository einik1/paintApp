from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from django.template.loader import get_template
from django.shortcuts import render_to_response
from django.template import Context
from django.template import RequestContext
from painter.models import Pic
from django.template import Context
'''
def paint(request):
    return render(request,'painter/basic.html')


def save(request):
    iname=request.POST.get('name')
    idata=request.POST.get('data')
    p=Pic(name=iname,data=idata)
    p.save()
    return render_to_response('painter/paintapp.html')  
'''

def home(request):
    return render(request,'painter/paintapp.html')
def galle(request):
    return render(request, 'painter/paintapp.html')

@csrf_exempt
def save(request):
	iname=request.POST.get('name')
	idata=request.POST.get('data')
	p=Pic(name=iname,data=idata)
	p.save()
	return render(request,'painter/paintapp.html')

def gall(request):
	posts=[dict(id=i.id,title=i.name) for i in Pic.objects.order_by('id')]
	return render(request, 'gallery.html', {'posts': posts})

def load(request,imgname):
    data = Pic.objects.filter(name=imgname)
    print (data[0].id)
    for i in Pic.objects.filter(name=imgname):
        print (i.id)
    posts=[dict(id=i.id,title=i.name,imagedata=i.data) for i in Pic.objects.filter(name=imgname)]
    return render(request,'painter/picload.html',{'posts':posts})
