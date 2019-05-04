from django.urls import path,include
from . import views

urlpatterns =(
   path('', views.home, name = 'home'),
   # url(r'^time/$', current_datetime),
  #  url(r'^gallery/$', gallery),
   path('save/', views.save, name='save'),
   path('gallery/',views.gall, name='gall'),
   path('gallery/<imgname>/',views.load, name='load')
)

'''path('gallery/([^/]+)',views.load, name='load')'''
