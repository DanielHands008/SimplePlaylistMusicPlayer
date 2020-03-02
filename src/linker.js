/*if (!hasClass(containerId, 'spmp-custom'))*/ buttonColour = 'black';
var linkElement = document.createElement('link');
linkElement.setAttribute('rel', 'stylesheet');
linkElement.setAttribute('type', 'text/css');
linkElement.setAttribute('href', 'data:text/css;charset=UTF-8,' + encodeURIComponent(colours + css.split('%fill').join(buttonColour)));
var cpmpContainer = document.getElementById(containerId);
cpmpContainer.parentNode.insertBefore(linkElement, cpmpContainer); // TODO: Change to only run once.
setTimeout(function() { addClass(containerId, 'spmp-loaded'); }, 50);
})();
}