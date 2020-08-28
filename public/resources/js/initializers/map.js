import { mapboxKey } from '../data/keys.js';

export default function initMap(id) {
    let map = L.map(id).setView([40.745350, -74.012438], 10.5);

    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: mapboxKey
    }).addTo(map);

    return map;
}