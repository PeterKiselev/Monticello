'use strict';

// dropdown
function toggleMenu(e) {
    e.preventDefault();
    document.body.classList.toggle('menu-opened');
}


//to top window
arrowTop.onclick = function() {
    window.scrollTo(pageXOffset, 0);
    // после scrollTo возникнет событие "scroll", так что стрелка автоматически скроется
};

window.addEventListener('scroll', function() {
    arrowTop.hidden = (pageYOffset < document.documentElement.clientHeight);
});

// slider 
var swiper = new Swiper('.swiper-container', {
    direction: 'vertical',
    loop: true,
    autoHeight: true,
    effect: 'fade',
    // lazy: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});

var swiper2 = new Swiper('.swiper-container-horiz', {
    spaceBetween: 30,
    slidesPerGroup: 1,
    loop: true,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        576: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        992: {
            slidesPerView: 3,
            spaceBetween: 30
        }
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.button-next',
        prevEl: '.button-prev',
    },
});

// map
var map, marker, infowindow, geocoder;

function initMap() {

    geocoder = new google.maps.Geocoder();
    
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 40.673826, lng: -73.934105 },
        zoom: 15,
        styles : styles
    });

    marker = new google.maps.Marker({
        position: { lat: 40.681745, lng: -73.933756 }, 
        icon    : new google.maps.MarkerImage(
                    'img/marker.png',
                    new google.maps.Size(100, 100),
                    new google.maps.Point(0, 0),
                    new google.maps.Point(50, 50),
                    new google.maps.Size(100, 100)),

        map     : map,
        animation: google.maps.Animation.DROP
    });
}

function getGeocode (value) {
    geocoder.geocode( { 'address': value }, function(results, status) {
        if (status == 'OK') {
            map.setCenter(results[0].geometry.location);
            marker.setPosition(results[0].geometry.location);
        }
    })

}







