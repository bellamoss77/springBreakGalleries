const navDropdownBtn = document.getElementById('navBtn');
const navDropdownMenu = document.getElementById('navDropdown');
const toggleNavArrow = document.getElementById('arrowNav');

const images = [
    {
        src: 'https://github.com/bellamoss77/springBreakGalleries/blob/main/images/LIGHT_PAINTING_MIN/lightPainting_1.png?raw=true',
        title: 'LightPainting_1',
        alt: 'light painting',
        liked: false
    }, {
        src: 'https://github.com/bellamoss77/springBreakGalleries/blob/main/images/LIGHT_PAINTING_MIN/lightPainting_2.png?raw=true',
        title: 'LightPainting_2',
        alt: 'light painting',
        liked: false
    }, {
        src: 'https://github.com/bellamoss77/springBreakGalleries/blob/main/images/LIGHT_PAINTING_MIN/lightPainting_3.png?raw=true',
        title: 'LightPainting_3',
        alt: 'light painting',
        liked: false
    }, {
        src: 'https://github.com/bellamoss77/springBreakGalleries/blob/main/images/LIGHT_PAINTING_MIN/lightPainting_4.png?raw=true',
        title: 'LightPainting_4',
        alt: 'light painting',
        liked: false
    }, {
        src: 'https://github.com/bellamoss77/springBreakGalleries/blob/main/images/LIGHT_PAINTING_MIN/lightPainting_6.png?raw=true',
        title: 'LightPainting_5',
        alt: 'light painting',
        liked: false
    }
]

navDropdownBtn.addEventListener('click', function() {
    const isVisible = gsap.getProperty(navDropdownMenu, 'opacity') > 0;

    if (isVisible) {
        gsap.to(navDropdownMenu, { duration: 0.3, autoAlpha: 0, y: -20 });
        gsap.to(toggleNavArrow, { duration: 0.3, rotation: 0 });
    } else {
        gsap.to(navDropdownMenu, {duration: 0.3, autoAlpha: 1, y: 0 });
        gsap.to(toggleNavArrow, { duration: 0.3, rotation: 180 });
    }

    function createGalleryWithLikeBtns(images) {
        const gallery = document.getElementById('imageGalleryContainer');
        
        images.forEach(image => {
            const imageSlide = document.createElement('div');
            imageSlide.classList.add('slide-img')

            const imgElement = document.createElement('img');
            imgElement.src = image.src;
            imgElement.alt = image.alt;
            imgElement.title = image.title;

            const likeBtn = document.createElement('button');
            likeBtn.innerHTML = '<i class="fa-regular fa-heart"></i>';
            likeBtn.classList.add('like-btn');
            likeBtn.id = `like-btn-${image.id}`;
            likeBtn.addEventListener('click', () => handleLikeBtnClick(image.id));

            imageSlide.appendChild(imgElement);
            imageSlide.appendChild(likeBtn);
            gallery.appendChild(imageSlide);
            
        });
    }

    createGalleryWithLikeBtns(images);

    function handleLikeBtnClick(imageId) {
        const image = images.find(img => img.id === imageId);
        if (image) {
            image.liked = !image.liked;
            updateLikedImagesDisplay();

            const likeBtn = document.getElementById(`like-btn-${image.id}`);
            if (likeBtn) {
                likeBtn.innerHTML = image.liked ? '<i class="fa-solid fa-heart"></i>' : '<i class="fa-regular fa-heart"></i>';
            }
        }
    }

    function updateLikedImagesDisplay() {
        const likedImages = images.filter(image => image.liked);
        const likedDropdownList = document.getElementById('likedDropdownList');
        const itemsList = likedDropdownList.querySelector('ol');

        itemsList.innerHTML = '';

        likedImages.forEach(image => {
            const listItem = document.createElement('li');
            likedDropdownList.textContent = image.title;
            itemsList.appendChild(listItem);
        });

        likedDropdownList.style.display = likedImages.length > 0 ? 'block' : 'none';
    }
});