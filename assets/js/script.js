window.onload = function() {
    let popup = window.document.querySelector('.popup');
    let popup_open = window.document.querySelector('.cards__block-action');
    let popup_close = window.document.querySelector('.popup__close');
    classList = 'popup popup__overlay '
    
    popup_open.onclick = function() {
        popup.classList = classList + 'enabled';
    }

    popup_close.onclick = function() {
        popup.classList = classList + 'disabled';
    }
}
