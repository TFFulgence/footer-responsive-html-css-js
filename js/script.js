document.querySelectorAll('.footer-column h3').forEach((header) => {
    header.addEventListener('click', () => {
        const content = header.nextElementSibling;
        if (content.style.display === 'block' || content.style.display === '') {
            content.style.display = 'none';
        } else {
            content.style.display = 'block';
        }
    });
});
