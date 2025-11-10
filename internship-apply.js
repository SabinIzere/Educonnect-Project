// Internship Application Page
document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const internshipId = parseInt(urlParams.get('id'));
    
    const internshipsData = JSON.parse(localStorage.getItem('internshipsData')) || [];
    const internship = internshipsData.find(i => i.id === internshipId);
    
    if (internship) {
        // Populate internship details
        document.getElementById('internshipTitle').textContent = internship.title;
        document.getElementById('companyName').textContent = internship.company;
        document.getElementById('internshipLocation').textContent = internship.location;
        document.getElementById('internshipDuration').textContent = internship.duration;
        document.getElementById('internshipField').textContent = internship.field;
        
        // Update page title
        document.title = `Apply for ${internship.title} - EduConnect`;
    } else {
        // If internship not found, redirect to internships page
        window.location.href = 'internships.html';
    }
    
    // Handle form submission
    const applicationForm = document.getElementById('applicationForm');
    const successModal = document.getElementById('successModal');
    
    if (applicationForm) {
        applicationForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Validate form
            if (!applicationForm.checkValidity()) {
                applicationForm.reportValidity();
                return;
            }
            
            // Get form data
            const formData = {
                internshipId: internshipId,
                internshipTitle: internship ? internship.title : '',
                firstName: document.getElementById('firstName').value,
                lastName: document.getElementById('lastName').value,
                email: document.getElementById('email').value,
                phone: document.getElementById('phone').value,
                address: document.getElementById('address').value,
                school: document.getElementById('school').value,
                degree: document.getElementById('degree').value,
                graduationYear: document.getElementById('graduationYear').value,
                experience: document.getElementById('experience').value,
                skills: document.getElementById('skills').value,
                motivation: document.getElementById('motivation').value,
                timestamp: new Date().toISOString()
            };
            
            // Store application (in real app, this would be sent to server)
            const applications = JSON.parse(localStorage.getItem('applications')) || [];
            applications.push(formData);
            localStorage.setItem('applications', JSON.stringify(applications));
            
            // Show success modal
            successModal.style.display = 'flex';
            
            // Scroll to top
            window.scrollTo(0, 0);
        });
    }
    
    // Validate file uploads
    const resumeInput = document.getElementById('resume');
    const coverLetterInput = document.getElementById('coverLetter');
    
    function validateFile(input) {
        if (input.files.length > 0) {
            const file = input.files[0];
            const maxSize = 5 * 1024 * 1024; // 5MB
            
            if (file.size > maxSize) {
                alert('File size must be less than 5MB');
                input.value = '';
                return false;
            }
            
            const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
            if (!allowedTypes.includes(file.type)) {
                alert('Please upload a PDF, DOC, or DOCX file');
                input.value = '';
                return false;
            }
        }
        return true;
    }
    
    if (resumeInput) {
        resumeInput.addEventListener('change', function() {
            validateFile(this);
        });
    }
    
    if (coverLetterInput) {
        coverLetterInput.addEventListener('change', function() {
            validateFile(this);
        });
    }
});

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('successModal');
    if (event.target === modal) {
        modal.style.display = 'none';
        window.location.href = 'internships.html';
    }
};