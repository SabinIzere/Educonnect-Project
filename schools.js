// Schools page functionality
document.addEventListener('DOMContentLoaded', function() {
    const schoolsData = JSON.parse(localStorage.getItem('schoolsData')) || [];
    
    // Handle search from URL parameter
    const urlParams = new URLSearchParams(window.location.search);
    const searchQuery = urlParams.get('search');
    
    if (searchQuery) {
        const searchInput = document.querySelector('.search-input');
        if (searchInput) {
            searchInput.value = searchQuery;
            filterSchools();
        }
    }
    
    // Search functionality
    const searchInput = document.querySelector('.search-input');
    const filterButton = document.querySelector('.btn-filter');
    const locationSelect = document.querySelectorAll('.filter-select')[0];
    const programSelect = document.querySelectorAll('.filter-select')[1];
    
    if (searchInput) {
        searchInput.addEventListener('keyup', filterSchools);
    }
    
    if (filterButton) {
        filterButton.addEventListener('click', filterSchools);
    }
    
    if (locationSelect) {
        locationSelect.addEventListener('change', filterSchools);
    }
    
    if (programSelect) {
        programSelect.addEventListener('change', filterSchools);
    }
    
    function filterSchools() {
        const searchValue = searchInput ? searchInput.value.toLowerCase() : '';
        const locationValue = locationSelect ? locationSelect.value.toLowerCase() : '';
        const programValue = programSelect ? programSelect.value.toLowerCase() : '';
        
        const schoolCards = document.querySelectorAll('.school-card');
        let visibleCount = 0;
        
        schoolCards.forEach(card => {
            const schoolName = card.querySelector('h3').textContent.toLowerCase();
            const schoolLocation = card.querySelector('.school-location span').textContent.toLowerCase();
            const schoolPrograms = card.querySelector('.school-programs span').textContent.toLowerCase();
            
            let matchesSearch = searchValue === '' || 
                               schoolName.includes(searchValue) || 
                               schoolLocation.includes(searchValue) ||
                               schoolPrograms.includes(searchValue);
            
            let matchesLocation = locationValue === '' || locationValue === 'all' || 
                                 schoolLocation.includes(locationValue);
            
            let matchesProgram = programValue === '' || programValue === 'all' || 
                                schoolPrograms.includes(programValue);
            
            if (matchesSearch && matchesLocation && matchesProgram) {
                card.style.display = 'block';
                visibleCount++;
            } else {
                card.style.display = 'none';
            }
        });
        
        // Update results count
        const resultsCount = document.querySelector('.results-count');
        if (resultsCount) {
            resultsCount.textContent = `Showing ${visibleCount} schools`;
        }
    }
    
    // Handle View Details buttons
    const viewDetailsButtons = document.querySelectorAll('.btn-outline');
    
    viewDetailsButtons.forEach((button, index) => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const schoolId = index + 1;
            window.location.href = `school-detail.html?id=${schoolId}`;
        });
    });
});