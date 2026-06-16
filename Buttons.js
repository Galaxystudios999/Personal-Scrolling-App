const forYouBtn = document.getElementById('forYouBtn');
const homeBtn = document.getElementById('homeBtn');
const videoFeed = document.querySelector('.tiktok-container');
const homePage = document.getElementById('homePage');


homeBtn.addEventListener('click', () => {
    
    homeBtn.classList.add('active');
    forYouBtn.classList.remove('active');
    
    
    homePage.classList.remove('hidden');
    videoFeed.classList.add('hidden');
    

    document.querySelectorAll('video').forEach(video => {
        video.pause();
    });
});

forYouBtn.addEventListener('click', () => {
    
    forYouBtn.classList.add('active');
    homeBtn.classList.remove('active');
    
    
    videoFeed.classList.remove('hidden');
    homePage.classList.add('hidden');
    
   
    window.dispatchEvent(new Event('resize'));
});