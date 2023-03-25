from django.shortcuts import render, redirect

from .models import Room, Topic
from .models import Campaign
from .models import Influencer


from .forms import RoomForm
from .forms import CampaignForm
from .forms import InfluencerForm




# Create your views here.

def home(request):
    rooms = Room.objects.all()
    room_count = rooms.count()
    context = {'rooms':rooms, 'room_count': room_count}
    return render(request, 'base/home.html', context)

def room(request,pk):
    room = Room.objects.get(id=pk)
    context = {'room':room}
    return render(request, 'base/room.html',context)


def campaign(request,pk):
    campaign = Campaign.objects.get(id=pk)
    context = {'campaign':campaign}
    return render(request, 'base/campaign.html',context)


def campaigns(request):
    campaigns = Campaign.objects.all()
    campaign_count = campaigns.count()
    context = {'campaigns':campaigns, 'campaigns':campaigns}
    return render(request, 'base/campaigns.html', context)

def createRoom(request):
    form = RoomForm()
    if request.method == 'POST':
        form = RoomForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('home')
    context = {'form':form}
    return render(request, 'base/room_form.html', context)

def updateRoom(request,pk):
    room = Room.objects.get(id=pk)
    form = RoomForm(instance=room)
    if request.method == "POST":
        form = RoomForm(request.POST, instance=room)
        if form.is_valid():
            form.save()
            return redirect('home')
        
    context = {'form':form}
    return render(request, 'base/room_form.html', context)

def deleteRoom(request,pk):
    room = Room.objects.get(id=pk)
    if request.method == "POST":
        room.delete()
        return redirect('home')
    return render(request, 'base/room_form.html', {'obj':room})


def createCampaign(request):
    form = CampaignForm()
    if request.method == 'POST':
        form = CampaignForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('campaigns')
    context = {'form':form}
    return render(request, 'base/campaign_form.html', context)

def updateCampaign(request,pk):
    room = Campaign.objects.get(id=pk)
    form = CampaignForm(instance=room)
    if request.method == "POST":
        form = RoomForm(request.POST, instance=room)
        if form.is_valid():
            form.save()
            return redirect('campaigns')
    context = {'form':form}
    return render(request, 'base/campaign_form.html', context)

def deleteCampaign(request,pk):
    campaign = Campaign.objects.get(id=pk)
    if request.method == "POST":
        campaign.delete()
        return redirect('campaigns')
    return render(request, 'base/campaign_form.html', {'obj':campaign})


def influencer(request,pk):
    influencer = Influencer.objects.get(id=pk)
    context = {'influencer':influencer}
    return render(request, 'base/influencer.html',context)


def influencers(request):
    influencers = Influencer.objects.all()
    influencer_count = influencers.count()
    context = {'influencers':influencers, 'influencers':influencers}
    return render(request, 'base/influencers.html', context)

def createInfluencer(request):
    form = InfluencerForm()
    if request.method == 'POST':
        form = InfluencerForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('influencers')
    context = {'form':form}
    return render(request, 'base/influencer_form.html', context)

def updateInfluencer(request,pk):
    influencer = Influencer.objects.get(id=pk)
    form = InfluencerForm(instance=influencer)
    if request.method == "POST":
        form = InfluencerForm(request.POST, instance=influencer)
        if form.is_valid():
            form.save()
            return redirect('influencers')
    context = {'form':form}
    return render(request, 'base/influencer_form.html', context)

def deleteInfluencer(request,pk):
    influencer = Influencer.objects.get(id=pk)
    if request.method == "POST":
        influencer.delete()
        return redirect('influencers')
    return render(request, 'base/influencer_form.html', {'obj':influencer})


def brand(request,pk):
    brand = Brand.objects.get(id=pk)
    context = {'brand':brand}
    return render(request, 'base/brand.html',context)


def brands(request):
    brands = Brand.objects.all()
    brand_count = brands.count()
    context = {'brands':brands, 'brands':brands}
    return render(request, 'base/brands.html', context)

def createBrand(request):
    form = BrandForm()
    if request.method == 'POST':
        form = BrandForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('brands')
    context = {'form':form}
    return render(request, 'base/brand_form.html', context)

def updateBrand(request,pk):
    brand = Brand.objects.get(id=pk)
    form = BrandForm(instance=brand)
    if request.method == "POST":
        form = BrandForm(request.POST, instance=brand)
        if form.is_valid():
            form.save()
            return redirect('brands')
    context = {'form':form}
    return render(request, 'base/brand_form.html', context)

def deleteBrand(request,pk):
    brand = Brand.objects.get(id=pk)
    if request.method == "POST":
        brand.delete()
        return redirect('brands')
    return render(request, 'base/brand_form.html', {'obj':brand})
# def campaigns(request):
#     context = {'campaigns':campaigns}
#     return render(request, 'base/campaigns.html', context)

# def campaign(request,pk):
#     campaign = None
#     for i in campaigns:
#         if i['id'] == int(pk):
#             campaign = i
#     context = {'campaign':campaign}
#     return render(request, 'base/campaign.html', context)
