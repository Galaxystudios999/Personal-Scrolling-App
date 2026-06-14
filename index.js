
const videos = document.querySelectorAll('video');


const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.play().catch(error => {
        console.log("Auto-play prevented. User needs to tap the screen first.");
      });
    } else {
      
      entry.target.pause();
      entry.target.currentTime = 0;
    }
  });
}, {
  threshold: 0.6 
});

videos.forEach(video => observer.observe(video));