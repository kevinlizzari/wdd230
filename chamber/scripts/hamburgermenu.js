function toggleMenu() {
    const menu = document.getElementById('hidden-menu');
    const icon = document.getElementById('hamburger-icon');

    if (menu.style.display === 'none' || menu.style.display === '') {
        menu.style.display = 'block';
        icon.innerHTML = '&#10006;'; 
    } else {
        menu.style.display = 'none';
        icon.innerHTML = '&#8801;';  
    }
}
