
const observerOptions = {
    root: null, 
    threshold: 0.6 
};

const videoObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        const video = entry.target.querySelector('video');
        
        if (!video) return;

        if (entry.isIntersecting) {
            
            video.play().catch(error => {
                console.log("Autoplay blocked until user taps screen.");
            });
        } else {
           
            video.pause();
            video.currentTime = 0; 
        }
    });
}, observerOptions);


document.querySelectorAll('.video-slide').forEach(slide => {
    videoObserver.observe(slide);
});

document.addEventListener('click', function() {
    let videos = document.querySelectorAll('video');
    videos.forEach(video => {
        video.muted = false; 
    });
    
    
    document.querySelectorAll('.video-slide').forEach(slide => {
        const video = slide.querySelector('video');
        
        if (slide.getBoundingClientRect().top >= 0 && slide.getBoundingClientRect().top < window.innerHeight) {
            video.play();
        }
    });
    
    console.log("Audio fully synced and unlocked!");
}, { once: true });