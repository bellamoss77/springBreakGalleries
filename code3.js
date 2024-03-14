


const galleryImgs = [
    {
        src: 'https://github.com/bellamoss77/springBreakGalleries/blob/main/images/PLAYTIME_MIN/playtime_1.png?raw=true',
        alt: 'pawprint',
        title: '#1',
        liked: false

    }, {
        src: 'https://github.com/bellamoss77/springBreakGalleries/blob/main/images/PLAYTIME_MIN/playtime_2.png?raw=true',
        alt: 'Athena with soccerball',
        title: '#2',
        liked: false
    }, {
        src: 'https://github.com/bellamoss77/springBreakGalleries/blob/main/images/PLAYTIME_MIN/playtime_3.png?raw=true', 
        alt: 'Athena with soccerball',
        title: '#3',
        liked: false
    }, {
        src: 'https://github.com/bellamoss77/springBreakGalleries/blob/main/images/PLAYTIME_MIN/playtime_4.png?raw=true',
        alt: 'Athena with soccerball',
        title: '#4',
        liked: false
    }, {
        src: 'https://github.com/bellamoss77/springBreakGalleries/blob/main/images/PLAYTIME_MIN/playtime_5.png?raw=true',
        alt: 'Athena with soccerball',
        title: '#5',
        liked: false
    }, {
        src: 'https://github.com/bellamoss77/springBreakGalleries/blob/main/images/PLAYTIME_MIN/playtime_6.png?raw=true',
        alt: 'Athena with soccerball',
        title: '#6',
        liked: false
    }, {
        src: 'https://github.com/bellamoss77/springBreakGalleries/blob/main/images/PLAYTIME_MIN/playtime_7.png?raw=true',
        alt: 'Athena',
        title: '#7',
        liked: false
    }, {
        src: 'https://github.com/bellamoss77/springBreakGalleries/blob/main/images/PLAYTIME_MIN/playtime_8.png?raw=true',
        alt: 'Athena',
        title: '#8',
        liked: false
    }, {
        src: 'https://github.com/bellamoss77/springBreakGalleries/blob/main/images/PLAYTIME_MIN/playtime_9.png?raw=true',
        alt: 'Athena',
        title: '#9',
        liked: false
    }, {
        src: 'https://github.com/bellamoss77/springBreakGalleries/blob/main/images/PLAYTIME_MIN/playtime_10.png?raw=true',
        alt: 'Athena in yard',
        title: '#10',
        liked: false
    }, {
        src: 'https://github.com/bellamoss77/springBreakGalleries/blob/main/images/PLAYTIME_MIN/playtime_11.png?raw=true',
        alt: 'Athena looking back',
        title: '#11',
        liked: false
    }, {
        src: 'https://github.com/bellamoss77/springBreakGalleries/blob/main/images/PLAYTIME_MIN/playtime_12.png?raw=true',
        alt: 'Athena',
        title: '#12',
        liked: false
    }, {
        src: 'https://github.com/bellamoss77/springBreakGalleries/blob/main/images/PLAYTIME_MIN/playtime_13.png?raw=true',
        alt: 'Apollo running with tennis ball',
        title: '#13',
        liked: false
    }, {
        src: 'https://github.com/bellamoss77/springBreakGalleries/blob/main/images/PLAYTIME_MIN/playtime_14.png?raw=true',
        alt: 'Apollo running with tennis ball',
        title: '#14',
        liked: false
    }, {
        src: 'https://github.com/bellamoss77/springBreakGalleries/blob/main/images/PLAYTIME_MIN/playtime_15.png?raw=true',
        alt: 'Apollo running with tennis ball',
        title: '#15',
        liked: false
    }, {
        src: 'https://github.com/bellamoss77/springBreakGalleries/blob/main/images/PLAYTIME_MIN/playtime_16.png?raw=true',
        alt: 'Apollo',
        title: '#16',
        liked: false
    }, {
        src: 'https://github.com/bellamoss77/springBreakGalleries/blob/main/images/PLAYTIME_MIN/playtime_17.png?raw=true',
        alt: 'Apollo with tennis ball',
        title: '#17',
        liked: false
    }, {
        src: 'https://github.com/bellamoss77/springBreakGalleries/blob/main/images/PLAYTIME_MIN/playtime_18.png?raw=true',
        alt: 'Apollo running with ball',
        title: '#18',
        liked: false
    }, {
        src: 'https://github.com/bellamoss77/springBreakGalleries/blob/main/images/PLAYTIME_MIN/playtime_19.png?raw=true',
        alt: 'Apollo smiling',
        title: '#19',
        liked: false
    }, {
        src: 'https://github.com/bellamoss77/springBreakGalleries/blob/main/images/PLAYTIME_MIN/playtime_20.png?raw=true',
        alt: 'Apollo ready to chase tennis ball',
        title: '#20',
        liked: false
    }, {
        src: 'https://github.com/bellamoss77/springBreakGalleries/blob/main/images/PLAYTIME_MIN/playtime_21.png?raw=true',
        alt: 'Apollo rolling on tennis ball',
        title: '#21',
        liked: false
    }, {
        src: 'https://github.com/bellamoss77/springBreakGalleries/blob/main/images/PLAYTIME_MIN/playtime_22.png?raw=true',
        alt: 'Apollo with tennis ball',
        title: '#22',
        liked: false
    }, {
        src: 'https://github.com/bellamoss77/springBreakGalleries/blob/main/images/PLAYTIME_MIN/playtime_23.png?raw=true',
        alt: 'Dramatic Apollo',
        title: '#23',
        liked: false
    }, {
        src: 'https://github.com/bellamoss77/springBreakGalleries/blob/main/images/PLAYTIME_MIN/playtime_24.png?raw=true',
        alt: 'Apollo black and white',
        title: '#24',
        liked: false
    }, {
        src: 'https://github.com/bellamoss77/springBreakGalleries/blob/main/images/PLAYTIME_MIN/playtime_25.png?raw=true',
        alt: 'Apollo with tennis ball',
        title: '#25',
        liked: false
    }, {
        src: 'https://github.com/bellamoss77/springBreakGalleries/blob/main/images/PLAYTIME_MIN/playtime_26.png?raw=true',
        alt: 'Apollo with tennis ball',
        title: '#26',
        liked: false
    }
]

document.addEventListener('DOMContentLoaded', () => {
    const navDropdownBtn = document.getElementById('navBtn');
const navDropdownMenu = document.getElementById('navDropdown');
const toggleNavArrow = document.getElementById('arrowNav');

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
    gsap.registerPlugin(ScrollTrigger);
    
    renderGalleryWithLikeBtns(galleryImgs);

    function renderGalleryWithLikeBtns(galleryImgs) {
        const gallery = document.getElementById('imageGalleryContainer');

        galleryImgs.forEach(galleryImg => {
            const imgTile = document.createElement('div');
            imgTile.classList.add('gallery-item');

            const imgElement = document.createElement('img');
            imgElement.src = galleryImg.src;
            imgElement.alt = galleryImg.alt;
            imgElement.title = galleryImg.title;

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

        setSvgStyle(svgElement, galleryImg.liked ? 'active' : 'inactive');

        likeBtn.addEventListener('click', () => {
            galleryImg.liked = !galleryImg.liked;
            setSvgStyle(svgElement, galleryImg.liked ? 'active' : 'inactive');
            updateLikedImagesDisplay();
            });      

        likeBtn.addEventListener('mouseenter', () => setSvgStyle(svgElement, 'hover'));
        likeBtn.addEventListener('mouseleave', () => setSvgStyle(svgElement, galleryImg.liked ? 'active' : 'inactive'));

        imgTile.appendChild(imgElement);
        imgTile.appendChild(likeBtn);
        gallery.appendChild(imgTile);

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
    renderGalleryWithLikeBtns(galleryImgs);
    
    function handleLikeBtnClick(galleryImg, svgElement) {        
        if (galleryImg) {
            console.log(`Toggling like state for: ${galleryImg.title}`);
            galleryImg.liked = !galleryImg.liked;
            setSvgStyle(svgElement, galleryImg.liked ? 'active' : 'inactive')
            updateLikedImagesDisplay();
    
            const likeBtn = document.getElementById('savedImgs');
            if (likeBtn) {
                likeBtn.innerHTML = galleryImg.liked ? '<i class="fa-solid fa-heart"></i>' : '<i class="fa-regular fa-heart"></i>';
            } 
        }
    }
    
    function updateLikedImagesDisplay() {
        console.log('Updating display...');
        const likedImages = galleryImgs.filter(galleryImg => galleryImg.liked);
        console.log(`Found ${likedImages.length} liked images.`)
        const likedImgContainer = document.getElementById('savedContainer');
        const likedDropdownList = document.getElementById('likedDropdownList');
        const itemsList = likedDropdownList.querySelector('ol');
        const savedImgsBtn = document.getElementById('savedImgs');
        const arrowSaved = document.getElementById('arrowSaved');
    
        itemsList.innerHTML = '';
    
        likedImages.forEach(galleryImg => {
            
            console.log(`Adding to display: ${galleryImg.title}`);
            const listItem = document.createElement('li');
            listItem.textContent = galleryImg.title;
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
    
        

})
