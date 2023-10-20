window.onload = function() {
    var today = new Date().getDay();
    if (today >= 1 && today <= 3) { // day
        document.getElementById('banner').style.display = 'block';
    }

    document.getElementById('closeBanner').onclick = function() {
        document.getElementById('banner').style.display = 'none';
    };
};
