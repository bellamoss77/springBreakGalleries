const navDropdownBtn = document.getElementById('navBtn');
const navDropdownMenu = document.getElementById('navDropdown');
const toggleNavArrow = document.getElementById('arrowNav');

const images = [
    {
        id: '1',
        src: 'https://github.com/bellamoss77/springBreakGalleries/blob/main/images/LIGHT_PAINTING_MIN/lightPainting_1.png?raw=true',
        title: 'LightPainting_1',
        alt: 'light painting',
        liked: false
    }, {
        id: '2',
        src: 'https://github.com/bellamoss77/springBreakGalleries/blob/main/images/LIGHT_PAINTING_MIN/lightPainting_2.png?raw=true',
        title: 'LightPainting_2',
        alt: 'light painting',
        liked: false
    }, {
        id: '3',
        src: 'https://github.com/bellamoss77/springBreakGalleries/blob/main/images/LIGHT_PAINTING_MIN/lightPainting_3.png?raw=true',
        title: 'LightPainting_3',
        alt: 'light painting',
        liked: false
    }, {
        id: '4',
        src: 'https://github.com/bellamoss77/springBreakGalleries/blob/main/images/LIGHT_PAINTING_MIN/lightPainting_4.png?raw=true',
        title: 'LightPainting_4',
        alt: 'light painting',
        liked: false
    }, {
        id: '5',
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
});

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
        likeBtn.innerHTML = `<svg id="MERGED_ICON" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 46.26 41" width="2rem" height="2rem">
        <defs>
          <style>
            .cls-1 {
              stroke-width: 0px;
            }
      
            .cls-1, .cls-2 {
              fill: rgba(255, 255, 255, 0.5);
            }
      
            .cls-2, .cls-3, .cls-4 {
              stroke-miterlimit: 10;
            }
      
            .cls-2, .cls-4 {
              stroke: rgba(255, 255, 255, 0.5);
              stroke-width: 2px;
            }
      
            .cls-3 {
              stroke: rgba(255, 255, 255, 0.5);
              stroke-width: 4px;
            }
      
            .cls-3, .cls-4 {
              fill: none;
            }
          </style>
        </defs>
        <path id="IMAGE" class="cls-4" d="M23.43,11.19c10.17,0,9.49-1.75,9.49,9.1s1.13,9.68-9.44,9.68-9.54,1.43-9.54-11.15c0-8.8,1.12-7.63,9.49-7.63Z"/>
        <path id="IMG-MOUNTAINS" class="cls-2" d="M14.91,26.25c3.91-5.28,3.91-6.85,6.07-2.74,3.13-3.52,3.13-7.41,7.04-2.33s4.78,6.51,4.78,6.51c0,0-.72,1.15-9.37,1.3s-8.51-2.74-8.51-2.74Z"/>
        <g id="IMG-SUN">
          <path class="cls-1" d="M19.41,15.1c2.35,0,3.33,3.64,0,3.64s-2.35-3.64,0-3.64Z"/>
        </g>
        <path id="HEART" class="cls-3" d="M22.76,8.25C12.57-3.29,2,3.36,2,14.32c0,9.98,20.76,24.26,20.76,24.26,0,0,21.5-14.67,21.5-25.24S30.96-3.29,22.76,8.25Z"/>
      </svg>`;
        likeBtn.classList.add('like-btn');
        
        const svgElement = likeBtn.querySelector('svg');

        setSvgStyle(svgElement, image.liked ? 'active' : 'inactive');

        likeBtn.addEventListener('click', () => {
            image.liked = !image.liked;
            setSvgStyle(svgElement, image.liked ? 'active' : 'inactive');
            updateLikedImagesDisplay();
            });      

        likeBtn.addEventListener('mouseenter', () => setSvgStyle(svgElement, 'hover'));
        likeBtn.addEventListener('mouseleave', () => setSvgStyle(svgElement, image.liked ? 'active' : 'inactive'));

        imageSlide.appendChild(imgElement);
        imageSlide.appendChild(likeBtn);
        gallery.appendChild(imageSlide);
    })
}

function setSvgStyle(svg, state) {
    const cls1 = svg.querySelector('.cls-1');
    const cls2 = svg.querySelector('.cls-2');
    const cls3 = svg.querySelector('.cls-3');
    const cls4 = svg.querySelector('.cls-4');

    switch (state) {
        case 'active':
            cls2.style.fill = '#1d3050';
            cls4.style.stroke = '#1d3050';
            cls3.style.stroke = '#ed1c24';
            svg.style.opacity = '1';
            break;
        case 'hover':
            cls1.style.fill = 'white';
            cls1.style.stroke = 'white';
            cls2.style.fill = 'white';
            cls2.style.stroke = 'white';
            cls3.style.stroke = 'white';
            cls4.style.stroke = 'white'
            svg.style.opacity = '1';
            break;
        case 'inactive':
            cls1.style.fill = 'rgba(255, 255, 255, 0.5)';
            cls1.style.stroke = 'rgba(255, 255, 255, 0.5)';
            cls2.style.fill = 'rgba(255, 255, 255, 0.5)';
            cls2.style.stroke = 'rgba(255, 255, 255, 0.5)';
            cls3.style.stroke = 'rgba(255, 255, 255, 0.5)';
            cls4.style.stroke = 'rgba(255, 255, 255, 0.5)';
            
            
            break;
    }
}

createGalleryWithLikeBtns(images);

function handleLikeBtnClick(imageId, svgElement) {
    console.log(`Like button clicked for image ID: ${imageId}`);
    
    if (image) {
        console.log(`Toggling like state for: ${image.title}`);
        image.liked = !image.liked;
        setSvgStyle(svgElement, image.liked ? 'active' : 'inactive')
        updateLikedImagesDisplay();

        const likeBtn = document.getElementById('savedImgs');
        if (likeBtn) {
            likeBtn.innerHTML = image.liked ? '<i class="fa-solid fa-heart"></i>' : '<i class="fa-regular fa-heart"></i>';
        } 
    }
}

function updateLikedImagesDisplay() {
    console.log('Updating display...');
    const likedImages = images.filter(image => image.liked);
    console.log(`Found ${likedImages.length} liked images.`)
    const likedImgContainer = document.getElementById('savedContainer');
    const likedDropdownList = document.getElementById('likedDropdownList');
    const itemsList = likedDropdownList.querySelector('ol');
    const savedImgsBtn = document.getElementById('savedImgs');
    const arrowSaved = document.getElementById('arrowSaved');

    itemsList.innerHTML = '';

    likedImages.forEach(image => {
        
        console.log(`Adding to display: ${image.title}`);
        const listItem = document.createElement('li');
        listItem.textContent = image.title;
        itemsList.appendChild(listItem);
    });

    if (likedImages.length > 0) {
        likedImgContainer.style.display = 'block';
        gsap.set(likedDropdownList, { autoAlpha: 0 });
        gsap.set(arrowSaved, { rotation: 0 });
    } else {
        likedImgContainer.style.display = 'none';
    }

    

    
  
    savedImgsBtn.addEventListener('click', () => {
        const isVisible = gsap.getProperty(likedDropdownList, 'autoAlpha') > 0;
    
        if (isVisible) {
            gsap.to(likedDropdownList, { duration: 0.3, autoAlpha: 0 });
            gsap.to(arrowSaved, { duration: 0.3, rotation: 0 });
        } else {
            gsap.to(likedDropdownList, {duration: 0.3, autoAlpha: 1, y: 20 });
            gsap.to(arrowSaved, { duration: 0.3, rotation: 180 });
        }
    });
    const isListVisible = likedDropdownList.style.display === 'block';
    likedDropdownList.style.display = isListVisible ? 'none' : 'block';
    

    likedDropdownList.style.display = likedImages.length > 0 ? 'block' : 'none';
}
updateLikedImagesDisplay();