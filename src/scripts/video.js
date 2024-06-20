function loadYoutubeVideo() {
    var container = document.querySelector('.youtube-container');
    var iframe = document.createElement('iframe');
    iframe.setAttribute('src', 'https://www.youtube.com/embed/KQetemT1sWc?autoplay=1');
    iframe.setAttribute('frameborder', '0');
    iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture');
    iframe.setAttribute('allowfullscreen', 'true');
    iframe.style.width = '100%';
    iframe.style.height = '100%';
    iframe.style.position = 'absolute';
    iframe.style.top = '0';
    iframe.style.left = '0';

    iframe.onerror = function() {
        window.open('https://www.youtube.com/watch?v=KQetemT1sWc&ab_channel=TheBeatlesVEVO', '_blank');
    };

    container.innerHTML = '';
    container.appendChild(iframe);
}