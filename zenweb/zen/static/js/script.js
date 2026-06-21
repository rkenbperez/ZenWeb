// Carousel functionality
let currentSlide = 0;
const totalSlides = 5;
const track = document.getElementById('carouselTrack');
const dots = document.querySelectorAll('.dot');

function updateCarousel() {
  track.style.transform = `translateX(-${currentSlide * 100}%)`;
  
  dots.forEach((dot, index) => {
    if (index === currentSlide) {
      dot.classList.add('active');
    } else {
      dot.classList.remove('active');
    }
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % totalSlides;
  updateCarousel();
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
  updateCarousel();
}

function goToSlide(index) {
  currentSlide = index;
  updateCarousel();
}

// Keyboard navigation
document.addEventListener('keydown', function(e) {
  if (e.key === 'ArrowRight') {
    nextSlide();
  } else if (e.key === 'ArrowLeft') {
    prevSlide();
  }
});

// Touch/swipe support
let touchStartX = 0;
let touchEndX = 0;

const carouselContainer = document.querySelector('.carousel-container');

if (carouselContainer) {
  carouselContainer.addEventListener('touchstart', function(e) {
    touchStartX = e.changedTouches[0].screenX;
  });

  carouselContainer.addEventListener('touchend', function(e) {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
  });
}

function handleSwipe() {
  const swipeThreshold = 50;
  const diff = touchStartX - touchEndX;
  
  if (Math.abs(diff) > swipeThreshold) {
    if (diff > 0) {
      nextSlide();
    } else {
      prevSlide();
    }
  }
}

function copyIP() {
  const ip = 'play.zensmp.space';
  navigator.clipboard.writeText(ip).then(() => {
    const btn = event.target.closest('button');
    const originalText = btn.innerHTML;
    btn.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" class="h-2.5 w-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
      </svg>
      Copied!
    `;
    btn.classList.remove('btn-primary');
    btn.classList.add('btn-success');
    setTimeout(() => {
      btn.innerHTML = originalText;
      btn.classList.remove('btn-success');
      btn.classList.add('btn-primary');
    }, 2000);
  });
}

// ===== SERVER STATUS USING mcstatus.io =====
fetch('https://api.mcstatus.io/v2/status/java/december-warehouse.gl.joinmc.link')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        const container = document.getElementById('server-status-container');
        if (data.online) {
            container.innerHTML = `
                <span class="badge badge-success gap-1.5 px-3 py-2 bg-base-100/80 backdrop-blur-sm text-success inline-flex items-center">
                    <span class="inline-block w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                    ${data.players.online}/${data.players.max} Online
                </span>
            `;
        } else {
            container.innerHTML = `
                <span class="badge badge-error gap-1.5 px-3 py-2 bg-base-100/80 backdrop-blur-sm text-error inline-flex items-center">
                    <span class="inline-block w-1.5 h-1.5 bg-red-500 rounded-full"></span>
                    Server Offline
                </span>
            `;
        }
    })
    .catch((error) => {
        console.error('Error fetching server status:', error);
        const container = document.getElementById('server-status-container');
        container.innerHTML = `
            <span class="badge badge-warning gap-1.5 px-3 py-2 bg-base-100/80 backdrop-blur-sm text-warning inline-flex items-center">
                <span class="inline-block w-1.5 h-1.5 bg-yellow-500 rounded-full"></span>
                Status Unavailable
            </span>
        `;
    });