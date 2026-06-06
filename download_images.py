import os
import urllib.request

urls = {
    'hero-home.jpg': 'https://picsum.photos/id/1011/1200/800',
    'hero-about.jpg': 'https://picsum.photos/id/1012/1200/800',
    'slide-campus.jpg': 'https://picsum.photos/id/1015/1200/800',
    'slide-training.jpg': 'https://picsum.photos/id/1027/1200/800',
    'slide-community.jpg': 'https://picsum.photos/id/1033/1200/800',
    'program-it.jpg': 'https://picsum.photos/id/1040/1200/800',
    'program-business.jpg': 'https://picsum.photos/id/1041/1200/800',
    'program-theology.jpg': 'https://picsum.photos/id/1042/1200/800',
    'gallery-1.jpg': 'https://picsum.photos/id/1062/1200/800',
    'gallery-2.jpg': 'https://picsum.photos/id/1063/1200/800',
    'gallery-3.jpg': 'https://picsum.photos/id/1065/1200/800',
    'gallery-4.jpg': 'https://picsum.photos/id/1066/1200/800',
}

os.makedirs('src/assets', exist_ok=True)
for name, url in urls.items():
    print('Downloading', name)
    urllib.request.urlretrieve(url, os.path.join('src', 'assets', name))
