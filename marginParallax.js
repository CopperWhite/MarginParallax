//Add "data-parallax" attr on object with usual parallax
//Add "data-parallaxRev" attr object with reverse parallax
//Add "paraCoeff" attr with value to add speed coef for certain parallaxed object (if speed is ok, fill it with value 1)

var currentMousePos = { x: -1, y: -1 };
var windowParams = {width: 0, height: 0};
var offsetPercent = {x: -1, y: -1};
var parallaxed = {forward: {}, reversed: {}};
parallaxed.forward = document.querySelectorAll('[data-parallax]');
parallaxed.reversed = document.querySelectorAll('[data-parallaxRev]');
var parallaxSpeed = 1;

//show parallaxed objects in console
//console.log(parallaxed);

$(document).mousemove(function(event) {
  currentMousePos.x = event.pageX;
  currentMousePos.y = event.pageY;

  windowParams.width = window.innerWidth;
  windowParams.height = window.innerHeight;
  
  // for percent-rounded positioning
  // offsetPercent.x = Math.round(currentMousePos.x / (windowParams.width / 100)) - (parallaxSpeed * 50);
  // offsetPercent.y = Math.round(currentMousePos.y / (windowParams.height / 100)) - (parallaxSpeed * 50);

  // for accurate positioning
  offsetPercent.x = currentMousePos.x / (windowParams.width / 100) - (parallaxSpeed * 50);
  offsetPercent.y = currentMousePos.y / (windowParams.height / 100) - (parallaxSpeed * 50);

  parallaxed.forward.forEach(function(element) {

    element.style.marginLeft = (offsetPercent.x * parallaxSpeed * element.attributes.paraCoeff.value) + 'px';
    element.style.marginTop = (offsetPercent.y * parallaxSpeed * element.attributes.paraCoeff.value) + 'px';

  })

  parallaxed.reversed.forEach(function(element) {

    element.style.marginLeft = (-1 * offsetPercent.x * parallaxSpeed * element.attributes.paraCoeff.value) + 'px';
    element.style.marginTop = (-1 * offsetPercent.y * parallaxSpeed * element.attributes.paraCoeff.value) + 'px';

  })
});
