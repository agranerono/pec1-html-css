document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    const categories = document.querySelectorAll('.category-item');

    searchInput.addEventListener('keyup', function() {
        const searchText = searchInput.value.toLowerCase();
        categories.forEach(category => {
            const title = category.querySelector('h3').textContent.toLowerCase();
            category.style.display = title.includes(searchText) ? '' : 'none';
        });
    });
});
