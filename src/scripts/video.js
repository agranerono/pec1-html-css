function loadYoutubeVideo() {
    var container = document.querySelector('.youtube-container');
    var iframe = document.createElement('iframe');

    iframe.src = "https://www.youtube.com/embed/KQetemT1sWc?autoplay=1";
    iframe.width = "100%";
    iframe.height = "100%";
    iframe.frameBorder = "0";
    iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
    iframe.allowFullscreen = true;
    iframe.style.position = "absolute";
    iframe.style.top = "0";
    iframe.style.left = "0";

    iframe.onerror = function() {
        window.location.href = "https://www.youtube.com/watch?v=KQetemT1sWc";
    };

    container.innerHTML = ''; 
    container.appendChild(iframe); 
}
