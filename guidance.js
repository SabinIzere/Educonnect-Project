// Guidance Page JavaScript

// Start Career Assessment
function startAssessment() {
    alert('Career Assessment Quiz\n\nThis feature will help you discover careers that match your interests and skills.\n\nYou will be redirected to the assessment page.');
    // In a real application, this would redirect to an assessment page
    // window.location.href = 'assessment.html';
}

// Filter Guidance Resources by Category
function filterGuidance(category) {
    const resourceCards = document.querySelectorAll('.resource-card');
    
    resourceCards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');
        
        if (category === 'all' || cardCategory === category) {
            card.style.display = 'block';
            // Add fade-in animation
            card.style.animation = 'fadeIn 0.5s ease';
        } else {
            card.style.display = 'none';
        }
    });
    
    // Scroll to resources section
    document.querySelector('.resources-section').scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
    });
}

// Add CSS animation for fade-in effect
document.addEventListener('DOMContentLoaded', function() {
    // Add fadeIn animation to style
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeIn {
            from {
                opacity: 0;
                transform: translateY(20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
    `;
    document.head.appendChild(style);
    
    // Add click handlers for resource links
    const resourceLinks = document.querySelectorAll('.resource-link');
    resourceLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            alert('This article will be available soon!\n\nStay tuned for more career guidance resources.');
        });
    });
});