// School Details Page
document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const schoolId = parseInt(urlParams.get('id'));
    
    const schoolsData = JSON.parse(localStorage.getItem('schoolsData')) || [];
    const school = schoolsData.find(s => s.id === schoolId);
    
    if (school) {
        // Populate school details
        document.getElementById('schoolName').textContent = school.name;
        document.getElementById('schoolLocation').textContent = school.location;
        document.getElementById('schoolImage').src = school.image;
        document.getElementById('schoolImage').alt = school.name;
        document.getElementById('schoolFounded').textContent = school.founded;
        document.getElementById('schoolStudents').textContent = school.students;
        document.getElementById('schoolAccreditation').textContent = school.accreditation;
        document.getElementById('schoolDescription').textContent = school.description;
        document.getElementById('schoolTuition').textContent = school.tuition;
        
        // Populate programs list
        const programsList = document.getElementById('programsList');
        programsList.innerHTML = '';
        school.programs.forEach(program => {
            const programTag = document.createElement('span');
            programTag.className = 'program-tag';
            programTag.textContent = program;
            programsList.appendChild(programTag);
        });
        
        // Update page title
        document.title = `${school.name} - EduConnect`;
    } else {
        // If school not found, redirect to schools page
        window.location.href = 'schools.html';
    }
});