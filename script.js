// FAQ Toggle Functionality
document.addEventListener('DOMContentLoaded', function() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            
            // Close all FAQ items
            faqItems.forEach(faqItem => {
                faqItem.classList.remove('active');
            });
            
            // Open clicked item if it wasn't active
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });
});

// Countdown Timer
function startCountdown() {
    // Set target date (5 days from now)
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 5);
    targetDate.setHours(23, 59, 59, 999);
    
    function updateCountdown() {
        const now = new Date().getTime();
        const distance = targetDate.getTime() - now;
        
        if (distance < 0) {
            // Reset countdown to 5 days when it expires
            targetDate.setTime(now + (5 * 24 * 60 * 60 * 1000));
            return;
        }
        
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        // Update countdown display
        const daysElement = document.getElementById('days');
        const hoursElement = document.getElementById('hours');
        const minutesElement = document.getElementById('minutes');
        
        if (daysElement) daysElement.textContent = days.toString().padStart(2, '0');
        if (hoursElement) hoursElement.textContent = hours.toString().padStart(2, '0');
        if (minutesElement) minutesElement.textContent = minutes.toString().padStart(2, '0');
    }
    
    // Update countdown immediately
    updateCountdown();
    
    // Update countdown every second
    setInterval(updateCountdown, 1000);
}

// Smooth scrolling for anchor links
document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// Intersection Observer for animations
document.addEventListener('DOMContentLoaded', function() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Animate sections on scroll
    const sections = document.querySelectorAll('.benefits, .gallery, .testimonials, .special-offer, .faq');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
    
    // Animate cards
    const cards = document.querySelectorAll('.benefit-card, .color-variant, .testimonial');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        observer.observe(card);
    });
});

// WhatsApp button click tracking
document.addEventListener('DOMContentLoaded', function() {
    const whatsappButtons = document.querySelectorAll('a[href*="wa.me"]');
    
    whatsappButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Add a subtle animation when clicked
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
            
            // Optional: Track the click (for analytics)
            console.log('WhatsApp button clicked');
        });
    });
});

// Image lazy loading fallback
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img');
    
    images.forEach(img => {
        img.addEventListener('error', function() {
            // If image fails to load, show a placeholder
            this.style.backgroundColor = '#f8f9fa';
            this.style.display = 'flex';
            this.style.alignItems = 'center';
            this.style.justifyContent = 'center';
            this.style.color = '#6c757d';
            this.innerHTML = '<i class="fas fa-image" style="font-size: 2rem;"></i>';
        });
    });
});

// Simple Slider Functionality
let currentSlideIndex = 0;
const totalSlides = 9;

function changeSlide(direction) {
    // Hide current slide
    document.querySelector('.slide.active').classList.remove('active');
    document.querySelector('.dot.active').classList.remove('active');
    
    // Calculate new slide index
    currentSlideIndex += direction;
    
    if (currentSlideIndex >= totalSlides) {
        currentSlideIndex = 0;
    } else if (currentSlideIndex < 0) {
        currentSlideIndex = totalSlides - 1;
    }
    
    // Show new slide
    document.querySelector(`[data-slide="${currentSlideIndex}"]`).classList.add('active');
    document.querySelectorAll('.dot')[currentSlideIndex].classList.add('active');
}

function goToSlide(slideIndex) {
    // Hide current slide
    document.querySelector('.slide.active').classList.remove('active');
    document.querySelector('.dot.active').classList.remove('active');
    
    // Set new slide index
    currentSlideIndex = slideIndex;
    
    // Show new slide
    document.querySelector(`[data-slide="${currentSlideIndex}"]`).classList.add('active');
    document.querySelectorAll('.dot')[currentSlideIndex].classList.add('active');
}

// Auto-play functionality
function startAutoSlider() {
    setInterval(() => {
        changeSlide(1);
    }, 4000);
}

// Order Form Functions
function openOrderForm() {
    document.getElementById('orderModal').style.display = 'block';
}

function closeOrderForm() {
    document.getElementById('orderModal').style.display = 'none';
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('orderModal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

// Direct form submission handler
function handleFormSubmit(event) {
    const form = document.getElementById('orderForm');
    const submitBtn = form.querySelector('.form-submit');
    const originalText = submitBtn.innerHTML;
    
    // Set timestamp before submission
    document.getElementById('timestamp').value = new Date().toLocaleString('ar-EG');
    
    // Show loading state
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> جاري الإرسال...';
    submitBtn.disabled = true;
    
    console.log('Form submitting directly to Google Apps Script...');
    
    // Handle iframe load event for success feedback
    const iframe = document.getElementById('hidden_iframe');
    iframe.onload = function() {
        console.log('Form submitted successfully');
        
        // Success
        submitBtn.innerHTML = '<i class="fas fa-check"></i> تم الإرسال بنجاح!';
        submitBtn.style.background = '#28a745';
        
        // Reset form and close modal after 2 seconds
        setTimeout(() => {
            form.reset();
            closeOrderForm();
            submitBtn.innerHTML = originalText;
            submitBtn.style.background = '';
            submitBtn.disabled = false;
            
            // Show success message
            alert('تم إرسال طلبك بنجاح! سنتواصل معك قريباً لتأكيد الطلب.');
        }, 2000);
    };
    
    // Allow the form to submit normally
    return true;
}

// Start auto-play when page loads
document.addEventListener('DOMContentLoaded', function() {
    startAutoSlider();
});

// Start countdown timer
startCountdown();
