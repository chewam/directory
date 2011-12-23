var googlemap = (function() {

    var map;

    function initialize() {
        var el = document.getElementById("googlemap-canvas");
        if (el && coords && coords.length) {
            var latlng = new google.maps.LatLng(coords[0].lat, coords[0].lng);
            var myOptions = {
                zoom: 8,
                center: latlng,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };
            map = new google.maps.Map(el, myOptions);
        }
        addMarkers();
    }

    function addMarkers() {
        var latlng, marker, icon, shadow, letter,
            bounds = new google.maps.LatLngBounds();

        for (var i = 0, l = coords.length; i < l; i++) {
            latlng = new google.maps.LatLng(coords[i].lat, coords[i].lng);
            bounds.extend(latlng);
            letter = String.fromCharCode("A".charCodeAt(0) + i);
            icon = 'http://maps.google.com/mapfiles/marker'+ letter +'.png';
            // shadow = 'http://maps.google.com/intl/en_us/mapfiles/ms/micons/msmarker.shadow.png',
            marker = new google.maps.Marker({
                map: map,
                // shadow: new google.maps.MarkerImage(shadow),
                icon: new google.maps.MarkerImage(icon),
                position: latlng
            });
        }
        map.fitBounds(bounds);
    }

    return {
        initialize: initialize
    };

})();