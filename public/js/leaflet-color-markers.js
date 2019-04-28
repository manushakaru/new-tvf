var LeafIcon = L.Icon.extend({
	options: {
		shadowUrl: 'img/shadow.png',
		iconSize: [5, 5],
		iconAnchor: [5,5],
		popupAnchor: [5, 5],
		shadowSize: [20,20]
	}
});

var yellowIcon1 = new LeafIcon({iconUrl: 'img/yellow1.png'});
var redIcon1 = new LeafIcon({iconUrl: 'img/red2.png'});
var pinkIcon = new LeafIcon({iconUrl: 'img/pink.png'});
var orangeIcon = new LeafIcon({iconUrl: 'img/orange.png'});

