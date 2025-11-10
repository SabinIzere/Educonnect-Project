// Contact Page JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Handle Contact Form Submission
    const contactForm = document.getElementById('contactForm');
    const successModal = document.getElementById('contactSuccessModal');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Validate form
            if (!contactForm.checkValidity()) {
                contactForm.reportValidity();
                return;
            }
            
            // Get form data
            const formData = {
                firstName: document.getElementById('firstName').value,
                lastName: document.getElementById('lastName').value,
                email: document.getElementById('email').value,
                phone: document.getElementById('phone').value,
                subject: document.getElementById('subject').value,
                message: document.getElementById('message').value,
                timestamp: new Date().toISOString()
            };
            
            // Store message (in real app, this would be sent to server)
            const messages = JSON.parse(localStorage.getItem('contactMessages')) || [];
            messages.push(formData);
            localStorage.setItem('contactMessages', JSON.stringify(messages));
            
            // Show success modal
            successModal.style.display = 'flex';
            
            // Reset form
            contactForm.reset();
            
            // Scroll to top
            window.scrollTo(0, 0);
        });
    }
    
    // FAQ Toggle
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', function() {
            // Close all other FAQs
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });
            
            // Toggle current FAQ
            item.classList.toggle('active');
        });
    });
});

// Close Modal
function closeModal() {
    const modal = document.getElementById('contactSuccessModal');
    modal.style.display = 'none';
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('contactSuccessModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
};