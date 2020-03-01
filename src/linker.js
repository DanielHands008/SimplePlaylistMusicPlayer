if (hasClass('spmp-container', 'spmp-custom')) colours = '';
else buttonColour = 'black';
var linkElement = document.createElement('link');
linkElement.setAttribute('rel', 'stylesheet');
linkElement.setAttribute('type', 'text/css');
linkElement.setAttribute('href', 'data:text/css;charset=UTF-8,' + encodeURIComponent(colours + css.split('%fill').join(buttonColour)));
var cpmpContainer = byId('spmp-container');
cpmpContainer.parentNode.insertBefore(linkElement, cpmpContainer);
setTimeout(function() { addClass('spmp-container', 'spmp-loaded'); }, 50);