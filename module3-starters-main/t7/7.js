document.addEventListener('DOMContentLoaded', function () {
    var triggerElement = document.getElementById('trigger');
    var targetImage = document.getElementById('target');

    var originalImageSrc = 'img/picA.jpg';

    var alternativeImageSrc = 'img/picB.jpg';

    triggerElement.addEventListener('mouseover', function () {
        targetImage.src = alternativeImageSrc;
    });

    triggerElement.addEventListener('mouseout', function () {
        // Change the image source back to original when mouseout
        targetImage.src = originalImageSrc;
    });
});
