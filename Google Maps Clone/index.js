mapboxgl.accessToken = 'pk.eyJ1Ijoic2hhZmF5YXRhbGFtIiwiYSI6ImNrcWFtMjM3bjBycWwydnQ1dmZ6a2YyaHEifQ.PxWRCVuLfAPqxVQy5vNHsw';
    
navigator.geolocation.getCurrentPosition(successLocation, errorLocation, { enableHighAccuracy: true} )

function successLocation(position){
    console.log(position);
    setupMap([position.coords.longitude, position.coords.latitude])
}

function errorLocation(){
    setupMap([-2.24, 53.48])
}

function setupMap(center){
    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: center,
        zoom: 15
    })

    const nav = new mapboxgl.Map({attributionControl: false})
    .addControl(new mapboxgl.AttributionControl({
    compact: true
    }));
}
