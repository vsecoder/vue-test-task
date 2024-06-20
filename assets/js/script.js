window.onload = function() {
    let popup = window.document.querySelector('.popup');
    let popup_open = window.document.querySelector('.popup-toggle');
    let popup_close = window.document.querySelector('.popup-close');
    popup.style.display = 'none';
    
    popup_open.onclick = function() {
        popup.style.display = 'block';
    }

    popup_close.onclick = function() {
        popup.style.display = 'none';
    }
}
