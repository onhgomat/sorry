document.addEventListener('DOMContentLoaded', function() {
    // Get DOM elements
    const forgiveBtn = document.getElementById('forgiveBtn');
    const hugBtn = document.getElementById('hugBtn');
    const messageBtn = document.getElementById('messageBtn');
    const responseSection = document.getElementById('responseSection');
    const responseTitle = document.getElementById('responseTitle');
    const responseText = document.getElementById('responseText');
    const responseAnimation = document.getElementById('responseAnimation');
    
    // Create floating hearts dynamically
    function createFloatingHeart() {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.textContent = ['❤️', '💕', '💖', '💗', '💝'][Math.floor(Math.random() * 5)];
        heart.style.left = Math.random() * 100 + '%';
        heart.style.animationDuration = (Math.random() * 3 + 5) + 's';
        heart.style.animationDelay = Math.random() * 2 + 's';
        
        const container = document.querySelector('.floating-hearts');
        container.appendChild(heart);
        
        // Remove heart after animation
        setTimeout(() => {
            heart.remove();
        }, 8000);
    }
    
    // Create hearts periodically
    setInterval(createFloatingHeart, 3000);
    
    // Forgive button functionality
    forgiveBtn.addEventListener('click', function() {
        responseSection.style.display = 'block';
        responseTitle.textContent = 'সুন্দর! 🎉';
        responseText.textContent = 'এত দারুণ বন্ধু হওয়ার জন্য ধন্যবাদ! তোমার বন্ধুত্ব আমার কাছে অনেক কিছু!';
        responseAnimation.textContent = '🤗💕';
        
        // Create celebration effect
        createCelebration();
        
        // Scroll to response
        responseSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
    
    // Virtual hug button functionality
    hugBtn.addEventListener('click', function() {
        responseSection.style.display = 'block';
        responseTitle.textContent = 'ভার্চুয়াল জড়িয়ে ধরা পাঠানো হলো! 🤗';
        responseText.textContent = 'তোমাকে সবচেয়ে বড় ভার্চুয়াল জড়িয়ে ধরা পাঠাচ্ছি! আশা করি এটা তোমাকে হাসাবে!';
        responseAnimation.textContent = '🫂💖';
        
        // Add hug animation
        document.body.style.animation = 'hugPulse 0.5s ease';
        setTimeout(() => {
            document.body.style.animation = '';
        }, 500);
        
        // Scroll to response
        responseSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
    
    // Message button functionality
    messageBtn.addEventListener('click', function() {
        const messages = [
            "তুমি একজন অসাধারণ বন্ধু! 🌟",
            "সবসময় পাশে থাকার জন্য ধন্যবাদ! 🙏",
            "তোমার বন্ধুত্ব অমূল্য! 💎",
            "তুমি দুনিয়াকে আরও ভালো করে তোলো! 🌍",
            "তোমাকে বন্ধু হিসেবে পাওয়ার জন্য কৃতজ্ঞ! 🙌"
        ];
        
        const randomMessage = messages[Math.floor(Math.random() * messages.length)];
        
        responseSection.style.display = 'block';
        responseTitle.textContent = 'বার্তা ডেলিভারি হয়েছে! 📬';
        responseText.textContent = randomMessage;
        responseAnimation.textContent = '💌✨';
        
        // Scroll to response
        responseSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
    
    // Celebration effect
    function createCelebration() {
        const colors = ['#f093fb', '#f5576c', '#667eea', '#764ba2', '#fda085'];
        const container = document.querySelector('.floating-hearts');
        
        for (let i = 0; i < 20; i++) {
            setTimeout(() => {
                const confetti = document.createElement('div');
                confetti.style.position = 'absolute';
                confetti.style.width = '10px';
                confetti.style.height = '10px';
                confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
                confetti.style.left = Math.random() * 100 + '%';
                confetti.style.top = '50%';
                confetti.style.borderRadius = '50%';
                confetti.style.pointerEvents = 'none';
                confetti.style.animation = 'confettiFall 2s ease-out forwards';
                
                container.appendChild(confetti);
                
                setTimeout(() => {
                    confetti.remove();
                }, 2000);
            }, i * 100);
        }
    }
    
    // Add hover effects to reason cards
    const reasonCards = document.querySelectorAll('.reason-card');
    reasonCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.05) rotate(2deg)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1) rotate(0deg)';
        });
    });
    
    // Add typing effect to apology text
    const apologyTexts = document.querySelectorAll('.apology-text');
    apologyTexts.forEach((text, index) => {
        text.style.opacity = '0';
        text.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            text.style.transition = 'all 0.8s ease';
            text.style.opacity = '1';
            text.style.transform = 'translateY(0)';
        }, 500 * (index + 1));
    });
    
    // Add interactive background effect on mouse move
    document.addEventListener('mousemove', function(e) {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;
        
        document.body.style.background = `
            linear-gradient(${135 + x * 45}deg, 
                #667eea 0%, 
                #764ba2 25%, 
                #f093fb 50%, 
                #f5576c 75%, 
                #fda085 100%)
        `;
    });
    
    // Add click ripple effect
    document.addEventListener('click', function(e) {
        if (e.target.tagName === 'BUTTON') return;
        
        const ripple = document.createElement('div');
        ripple.style.position = 'fixed';
        ripple.style.left = e.clientX + 'px';
        ripple.style.top = e.clientY + 'px';
        ripple.style.width = '20px';
        ripple.style.height = '20px';
        ripple.style.background = 'rgba(255, 255, 255, 0.5)';
        ripple.style.borderRadius = '50%';
        ripple.style.transform = 'translate(-50%, -50%)';
        ripple.style.pointerEvents = 'none';
        ripple.style.animation = 'rippleEffect 0.6s ease-out forwards';
        
        document.body.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
    
    // Add CSS for new animations
    const style = document.createElement('style');
    style.textContent = `
        @keyframes confettiFall {
            0% {
                transform: translateY(0) rotate(0deg);
                opacity: 1;
            }
            100% {
                transform: translateY(100vh) rotate(720deg);
                opacity: 0;
            }
        }
        
        @keyframes hugPulse {
            0%, 100% {
                transform: scale(1);
            }
            50% {
                transform: scale(1.02);
            }
        }
        
        @keyframes rippleEffect {
            0% {
                width: 20px;
                height: 20px;
                opacity: 1;
            }
            100% {
                width: 100px;
                height: 100px;
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
    
    // Add smooth reveal animation for sections
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
    
    // Observe all sections
    document.querySelectorAll('section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'all 0.8s ease';
        observer.observe(section);
    });
});
