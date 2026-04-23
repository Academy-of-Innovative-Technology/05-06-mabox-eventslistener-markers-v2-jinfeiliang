mapboxgl.accessToken = KEYS.MAPBOX;

var mapProps = {
	container: 'map',
	center: [-73.97, 40.75],
	zoom: 9
};

var map = new mapboxgl.Map(mapProps);

map.on("click", (event) => {
	let Coords = event.lngLat;
	console.log(Coords);
	const marker = new mapboxgl.Marker({
    color: "#FF0000", // set marker color
    scale: 1.5, // scale the marker size
  })
    .setLngLat([Coords.lng, Coords.lat])
    .addTo(map);
})