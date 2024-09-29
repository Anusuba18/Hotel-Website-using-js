document.getElementById('search-button').addEventListener('click', function() {
    const searchTerm = document.getElementById('search').value.toLowerCase();
    const boxes = document.querySelectorAll('.box');
    
    boxes.forEach(box => {
        const text = box.querySelector('.text h3').textContent.toLowerCase();
        if (text.includes(searchTerm)) {
            box.style.display = 'flex';
        } else {
            box.style.display = 'none';
        }
    });
});