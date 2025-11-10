// Internships page functionality
document.addEventListener('DOMContentLoaded', function() {
    // Internships data
    const internshipsData = [
        {
            id: 1,
            title: 'Software Engineering Intern',
            company: 'TechCorp Inc.',
            location: 'Remote',
            duration: '3 months',
            field: 'Technology',
            description: 'Work on exciting projects with our development team'
        },
        {
            id: 2,
            title: 'Marketing Intern',
            company: 'Global Marketing Co.',
            location: 'Chicago, IL',
            duration: '6 months',
            field: 'Marketing',
            description: 'Join our marketing team and learn digital marketing strategies'
        },
        {
            id: 3,
            title: 'Data Analytics Intern',
            company: 'DataViz Solutions',
            location: 'Boston, MA',
            duration: '4 months',
            field: 'Analytics',
            description: 'Analyze data and create visualizations for business insights'
        },
        {
            id: 4,
            title: 'UX Design Intern',
            company: 'Creative Studio',
            location: 'Austin, TX',
            duration: '3 months',
            field: 'Design',
            description: 'Design user interfaces and improve user experience'
        },
        {
            id: 5,
            title: 'Financial Analyst Intern',
            company: 'Investment Partners',
            location: 'New York, NY',
            duration: '6 months',
            field: 'Finance',
            description: 'Learn financial analysis and investment strategies'
        },
        {
            id: 6,
            title: 'Content Writer Intern',
            company: 'Media House',
            location: 'Remote',
            duration: '4 months',
            field: 'Content',
            description: 'Create engaging content for various digital platforms'
        }
    ];
    
    // Store internships data
    localStorage.setItem('internshipsData', JSON.stringify(internshipsData));
    
    // Handle search from URL parameter
    const urlParams = new URLSearchParams(window.location.search);
    const searchQuery = urlParams.get('search');
    
    if (searchQuery) {
        const searchInput = document.querySelector('.search-section input[type="text"]');
        if (searchInput) {
            searchInput.value = searchQuery;
            filterInternships();
        }
    }
    
    // Search and filter functionality
    const searchInput = document.querySelector('.search-section input[type="text"]');
    const filterButton = document.querySelector('.btn-filter');
    const locationSelect = document.querySelectorAll('.filter-select')[0];
    const fieldSelect = document.querySelectorAll('.filter-select')[1];
    
    if (searchInput) {
        searchInput.addEventListener('keyup', filterInternships);
    }
    
    if (filterButton) {
        filterButton.addEventListener('click', filterInternships);
    }
    
    if (locationSelect) {
        locationSelect.addEventListener('change', filterInternships);
    }
    
    if (fieldSelect) {
        fieldSelect.addEventListener('change', filterInternships);
    }
    
    function filterInternships() {
        const searchValue = searchInput ? searchInput.value.toLowerCase() : '';
        const locationValue = locationSelect ? locationSelect.value.toLowerCase() : '';
        const fieldValue = fieldSelect ? fieldSelect.value.toLowerCase() : '';
        
        const internshipCards = document.querySelectorAll('.internship-card');
        let visibleCount = 0;
        
        internshipCards.forEach(card => {
            const title = card.querySelector('h3').textContent.toLowerCase();
            const company = card.querySelector('.company').textContent.toLowerCase();
            const location = card.querySelector('.detail span').textContent.toLowerCase();
            const badge = card.querySelector('.badge').textContent.toLowerCase();
            
            let matchesSearch = searchValue === '' || 
                               title.includes(searchValue) || 
                               company.includes(searchValue) ||
                               badge.includes(searchValue);
            
            let matchesLocation = locationValue === '' || 
                                 locationValue === 'all locations' ||
                                 (locationValue === 'remote' && location.includes('remote')) ||
                                 (locationValue === 'on-site' && !location.includes('remote'));
            
            let matchesField = fieldValue === '' || 
                              fieldValue === 'all fields' || 
                              badge.includes(fieldValue);
            
            if (matchesSearch && matchesLocation && matchesField) {
                card.style.display = 'block';
                visibleCount++;
            } else {
                card.style.display = 'none';
            }
        });
        
        // Update results count
        const resultsCount = document.querySelector('.results-count');
        if (resultsCount) {
            resultsCount.textContent = `Showing ${visibleCount} internship opportunities`;
        }
    }
    
    // Handle Apply Now buttons
    const applyButtons = document.querySelectorAll('.btn-apply');
    
    applyButtons.forEach((button, index) => {
        button.addEventListener('click', function() {
            const internshipId = index + 1;
            window.location.href = `internship-apply.html?id=${internshipId}`;
        });
    });
});