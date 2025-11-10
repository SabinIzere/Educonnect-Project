// Toggle Mobile Menu
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}

// Search functionality for home page
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.querySelector('.search-bar input[type="text"]');
    const searchButton = document.querySelector('.search-bar .btn-accent');
    
    if (searchButton && searchInput) {
        searchButton.addEventListener('click', function() {
            const searchQuery = searchInput.value.trim().toLowerCase();
            
            if (searchQuery === '') {
                alert('Please enter a search term');
                return;
            }
            
            // Search in schools
            if (searchQuery.includes('school') || searchQuery.includes('university') || 
                searchQuery.includes('college') || searchQuery.includes('education') ||
                searchQuery.includes('computer') || searchQuery.includes('business') || 
                searchQuery.includes('arts') || searchQuery.includes('tech')) {
                window.location.href = 'schools.html?search=' + encodeURIComponent(searchQuery);
            }
            // Search in internships
            else if (searchQuery.includes('internship') || searchQuery.includes('job') || 
                     searchQuery.includes('intern') || searchQuery.includes('software') ||
                     searchQuery.includes('marketing') || searchQuery.includes('design') ||
                     searchQuery.includes('finance') || searchQuery.includes('data')) {
                window.location.href = 'internships.html?search=' + encodeURIComponent(searchQuery);
            }
            // Default to schools page
            else {
                window.location.href = 'schools.html?search=' + encodeURIComponent(searchQuery);
            }
        });
        
        // Allow Enter key to trigger search
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                searchButton.click();
            }
        });
    }
});

// School data
const schoolsData = [
    {
        id: 1,
        name: 'Green Hills Academy',
        location: 'Kigali, Rwanda',
        image: 'image/green hill.PNG',
        programs: ['Computer Science', 'Engineering', 'Mathematics', 'Physics'],
        tuition: '$45,000/year',
        description: 'Green Hills Academy is a leading international school offering world-class education in technology and sciences.',
        founded: '2010',
        students: '500+',
        accreditation: 'International Baccalaureate'
    },
    {
        id: 2,
        name: 'Riviera High School',
        location: 'Kigali, Rwanda',
        image: 'image/Riviera.PNG',
        programs: ['Business Administration', 'Finance', 'Economics', 'Management'],
        tuition: '$38,000/year',
        description: 'Riviera High School specializes in business education with strong industry connections.',
        founded: '2008',
        students: '450+',
        accreditation: 'Cambridge International'
    },
    {
        id: 3,
        name: 'King David Academy',
        location: 'Kigali, Rwanda',
        image: 'image/king David.PNG',
        programs: ['Graphic Design', 'Fine Arts', 'Music', 'Drama'],
        tuition: '$35,000/year',
        description: 'King David Academy nurtures creative talents through comprehensive arts programs.',
        founded: '2012',
        students: '300+',
        accreditation: 'National Curriculum'
    },
    {
        id: 4,
        name: 'Ntare Louisenlund School',
        location: 'Eastern Province, Rwanda',
        image: 'image/ntare.PNG',
        programs: ['Medicine', 'Nursing', 'Biology', 'Chemistry'],
        tuition: '$52,000/year',
        description: 'Premier medical education institution with state-of-the-art facilities.',
        founded: '2005',
        students: '400+',
        accreditation: 'Medical Council'
    },
    {
        id: 5,
        name: 'Dove International Montessori School',
        location: 'Kigali, Rwanda',
        image: 'image/Dove.PNG',
        programs: ['Mechanical Engineering', 'Electrical Engineering', 'Civil Engineering'],
        tuition: '$42,000/year',
        description: 'Top engineering school with hands-on learning approach.',
        founded: '2009',
        students: '550+',
        accreditation: 'Engineering Board'
    },
    {
        id: 6,
        name: 'Education Development Trust',
        location: 'Kigali, Rwanda',
        image: 'image/two wing.PNG',
        programs: ['Psychology', 'Sociology', 'Literature', 'History'],
        tuition: '$36,000/year',
        description: 'Liberal arts education focusing on humanities and social sciences.',
        founded: '2011',
        students: '350+',
        accreditation: 'Liberal Arts Association'
    }
];

// Store school data in localStorage for access across pages
localStorage.setItem('schoolsData', JSON.stringify(schoolsData));
