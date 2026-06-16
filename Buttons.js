const forYouBtn = document.getElementById('forYouBtn');
const homeBtn = document.getElementById('homeBtn');
const videoFeed = document.getElementById('videoFeed');
const homePage = document.getElementById('homePage');

// Switch to Homepage view
homeBtn.addEventListener('click', () => {
    homeBtn.classList.add('active');
    forYouBtn.classList.remove('active');
    
    homePage.classList.remove('hidden');
    videoFeed.classList.add('hidden');
    
    // Pause everything running
    document.querySelectorAll('video').forEach(video => video.pause());
});

// Switch to For You video feed view
forYouBtn.addEventListener('click', () => {
    forYouBtn.classList.add('active');
    homeBtn.classList.remove('active');
    
    videoFeed.classList.remove('hidden');
    homePage.classList.add('hidden');
    
    // CRITICAL: Disconnect and reconnect the observer so it recalculates what's on screen
    document.querySelectorAll('.video-slide').forEach(slide => {
        videoObserver.unobserve(slide);
        videoObserver.observe(slide);
    });
});

// Handle Like Button Toggles
container.addEventListener('click', function(event) {
    // Check if the user clicked the like button or the SVG inside it
    const likeBtn = event.target.closest('.like-btn');
    
    if (likeBtn) {
        // Prevent the click from fighting with any background pause/play features
        event.stopPropagation(); 
        
        // Toggle the 'liked' class on/off
        likeBtn.classList.toggle('liked');
        
        console.log("Like toggled!");
    }
});