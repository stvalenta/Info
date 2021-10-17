
window.onLoad = furt();

function furt (){document.getElementById("demo").innerHTML =
"Browser inner window width: " + window.innerWidth + "px<br>" +
"Browser inner window height: " + window.innerHeight + "px";}



document.getElementById("emo").innerHTML = 
"Screen color depth is " + screen.colorDepth;



document.getElementById("mo").innerHTML = 
"Screen pixel depth is " + screen.pixelDepth;


document.getElementById("o").innerHTML = 
"The full URL of this page is:<br>" + window.location.href;


document.getElementById("dem").innerHTML = 
"Page hostname is: " + window.location.hostname;


document.getElementById("de").innerHTML =
"Page path is: " + window.location.pathname;


document.getElementById("d").innerHTML =
"The page protocol is: " + window.location.protocol;



document.getElementById("do").innerHTML = 
"navigator.appCodeName is: " + navigator.appCodeName;



document.getElementById("dm").innerHTML =
"navigator.product is: " + navigator.product;


document.getElementById("eo").innerHTML = navigator.appVersion;

document.getElementById("moc").innerHTML =
navigator.userAgent;



const x = document.getElementById("co");

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition, showError);
  } else { 
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  x.innerHTML = "Latitude: " + position.coords.latitude + 
  "<br>Longitude: " + position.coords.longitude;
}

function showError(error) {
  switch(error.code) {
    case error.PERMISSION_DENIED:
      x.innerHTML = "User denied the request for Geolocation."
      break;
    case error.POSITION_UNAVAILABLE:
      x.innerHTML = "Location information is unavailable."
      break;
    case error.TIMEOUT:
      x.innerHTML = "The request to get user location timed out."
      break;
    case error.UNKNOWN_ERROR:
      x.innerHTML = "An unknown error occurred."
      break;
  }
}