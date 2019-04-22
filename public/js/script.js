var latlon = [];
var passenger = [];
var state = [];


var marker6,marker7;
for (let i = 1; i <3;i++){
  readfile('data/taxi-'+i+'.txt',marker6)
}
// readfile('data/taxi-1.txt',marker6)
// readfile('data/taxi-2.txt',marker7)
//read file 
function readfile(filepath , markerXX){
jQuery.get(filepath,function(txt){
     var  data = txt.split('\n');
    for (let index = 0; index < data.length; index++) {
        var arr = data[index].split(',')
        //console.log(arr)
       latlon[index] = [parseFloat(arr[0]),parseFloat(arr[1])] ;
       passenger.push(parseInt(arr[2])) ;
       state.push(parseInt(arr[3])) ;
        
    }
    //console.log(latlon)
    markerXX = L.Marker.movingMarker(
      latlon,
      1440000, {autostart: true}).setIcon(redIcon).addTo(map);

      changeIcon(passenger ,markerXX);

  })
}

console.log(latlon)

function changeIcon(passenger,markerXX){
  for (let index = 0; index < passenger.length; index++) {
    setTimeout(() => {
    if(passenger[index] == 0){
      markerXX.setIcon(yellowIcon1).setOpacity(0.3)
    }else if(passenger[index] == 1){
      markerXX.setIcon(pinkIcon).setOpacity(0.3)
    }else if(passenger[index] == 2){
      markerXX.setIcon(orangeIcon).setOpacity(0.3)
    }else{
      markerXX.setIcon(redIcon1).setOpacity(0.3)
    }
  },(1440000/(state.length)));
  }
}


// initialize the map on the "map" div with a given center and zoom
var map = new L.Map('map', {
  zoom: 12,
  minZoom: 12,
});


// create a new tile layer
var tileUrl = 'http://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png',
layer = new L.TileLayer(tileUrl,
{
    attribution: 'Maps © <a href=\"www.openstreetmap.org/copyright\">OpenStreetMap</a> ',
    maxZoom: 18
});

// add the layer to the map
map.addLayer(layer);

var currentzoom = map.getZoom()
// map.on('zoomend', function() {
//   var newzoom = map.getZoom()
//   if (newzoom<currentzoom){
//       console.log('zoomout')
//       // marker6.option.Icon.iconSize
//       console.log(yellowIcon1.option)
      
//       //yellowIcon1.option.iconSize = [5,5]
//       }
  
//   if (newzoom >= currentzoom){
//      console.log('zoomin')
//      console.log(yellowIcon1.option)
//      var icon = marker6.options.icon;
// icon.options.iconSize = [10, 10];
// marker6.setIcon(icon);
//     // yellowIcon1.option.iconSize = [10,10]
//   }
//   currentzoom = newzoom;
// });

map.on('zoomend', function() {
  var newzoom = map.getZoom();
  if (currentzoom > newzoom) {
    console.log('zoomout')
    
  } else {
    console.log('zoomin')
    console.log(L.marker6)
  }
  currentzoom = newzoom;
})
L.control.scale()
//var parisKievLL = [[48.8567, 2.3508], [50.45, 30.523333]];
var dataset0 = [[[40.648525, -73.783005], [40.763577, -73.965332]], [[40.742035, -74.007011], [40.766338, -73.894638]], [[40.766338, -73.894638], [40.766338, -73.894638]], [[40.725876, -73.983566], [40.755875, -73.96711]], [[40.764076, -73.966751], [40.778496, -73.953247]], [[40.778496, -73.953247], [40.770447, -73.94796]], [[40.770447, -73.94796], [40.770447, -73.94796]], [[40.770447, -73.94796], [40.757023, -73.970367]], [[40.757023, -73.970367], [40.757023, -73.970367]], [[40.731144, -73.981941], [40.731144, -73.981941]], [[40.729683, -73.990028], [40.729683, -73.990028]], [[40.756184, -73.974831], [40.758472, -73.963417]], [[40.768272, -73.955711], [40.773327, -73.95948]], [[40.782421, -73.953438], [40.77235, -73.949738]], [[40.768818, -73.958382], [40.767845, -73.961731]], [[40.772606, -73.960655], [40.76886, -73.958466]], [[40.76886, -73.958466], [40.773506, -73.958069]], [[40.774231, -73.954819], [40.762177, -73.963188]], [[40.750343, -73.97702], [40.750343, -73.97702]], [[40.765263, -73.978798], [40.770611, -73.98024]], [[40.770611, -73.98024], [40.774841, -73.984177]], [[40.777618, -73.982414], [40.759224, -73.977173]]];
//var londonBrusselFrankfurtAmsterdamLondon = [[51.507222, -0.1275], [50.85, 4.35],
// [50.116667, 8.683333], [52.366667, 4.9], [51.507222, -0.1275]];
// var barcelonePerpignanPauBordeauxMarseilleMonaco = [
//   [40.7406, -73.9893]
// , [40.7406, -73.9893]
// , [40.7406, -73.9893]
// , [40.7406, -73.9893]
// , [40.7406, -73.9893]
// ];
var dataset1=[[[40.748386, -73.988708], [40.768368, -73.984909]], [[40.748386, -73.988708], [40.768368, -73.984909]], [[40.768242, -73.984756], [40.736897, -73.993134]], [[40.768242, -73.984756], [40.736897, -73.993134]], [[40.738976, -73.995605], [40.741028, -74.007462]], [[40.738976, -73.995605], [40.741028, -74.007462]], [[40.74081, -74.00766], [40.750282, -73.994797]], [[40.74081, -74.00766], [40.750282, -73.994797]], [[40.750839, -73.975578], [40.749241, -73.992386]], [[40.750839, -73.975578], [40.749241, -73.992386]], [[40.760082, -73.987846], [40.865486, -73.927635]], [[40.760082, -73.987846], [40.865486, -73.927635]], [[40.768074, -73.985573], [40.835369, -73.946053]], [[40.768074, -73.985573], [40.835369, -73.946053]], [[40.734669, -74.002174], [40.775799, -73.986214]], [[40.734669, -74.002174], [40.775799, -73.986214]], [[40.767918, -73.982491], [40.761501, -73.973526]], [[40.767918, -73.982491], [40.761501, -73.973526]], [[40.729664, -73.989853], [40.768181, -73.990433]], [[40.729664, -73.989853], [40.768181, -73.990433]], [[40.762482, -73.993607], [40.761833, -73.910477]], [[40.762482, -73.993607], [40.761833, -73.910477]], [[40.729401, -73.990013], [40.733807, -73.981071]], [[40.729401, -73.990013], [40.733807, -73.981071]], [[40.758598, -73.988823], [40.66066, -73.962944]]];
//var lon = [dataset0,dataset1]
//map.fitBounds([40.737, -73.923]);

var time = [2000,3000,10000,2500,4000,2000,10000,3000,2500,4000,9000,3000,3000,2500,4000,2000,3000,3000,2500,4000];
var empty = [1,0,0,1,0,1,0,0,1,0,1,0,0,1,0,1,0,0,1,0]
map.fitBounds([
    // [40.737, -73.923],
    // [40.774, -74.125]
    [40.875, -74.04166666],
    [40.66666666, -73.875]
]);


 //map.panTo(new L.LatLng(40.737, -73.923));
//========================================================================
// var marker1 = L.Marker.movingMarker(parisKievLL, [10000]).addTo(map);
// L.polyline(parisKievLL).addTo(map);
// marker1.once('click', function () {
//     marker1.start();
//     marker1.closePopup();
//     marker1.unbindPopup();
//     marker1.on('click', function() {
//         if (marker1.isRunning()) {
//             marker1.pause();
//         } else {
//             marker1.start();
//         }
//     });
//     setTimeout(function() {
//         marker1.bindPopup('<b>Click me to pause !</b>').openPopup();
//     }, 2000);
// });

// marker1.bindPopup('<b>Click me to start !</b>', {closeOnClick: false});
// marker1.openPopup();

//========================================================================

// code for visualize trips one by one
var markerarray1 = new Array();
var markerarray2 = new Array();
function drawmarker(index) {
    return new Promise(resolve => {
      setTimeout(() => {
        if (empty[index] == 0) {
          markers1 = L.Marker.movingMarker(dataset0[index],
            [time[index]], {autostart: true}).setIcon(yellowIcon).addTo(map)
          markers2 = L.Marker.movingMarker(dataset1[index],
            [time[index]], {autostart: true}).setIcon(yellowIcon).addTo(map)
        }
         else{
          markers1 = L.Marker.movingMarker(dataset0[index],
            [time[index]], {autostart: true}).setIcon(redIcon).addTo(map)
          markers2 = L.Marker.movingMarker(dataset1[index],
            [time[index]], {autostart: true}).setIcon(redIcon).addTo(map)
         }
        //L.polyline(dataset1[index], {color: '#3366FF'}).addTo(map)
            markerarray1.push(markers1);
            markerarray2.push(markers2);
        resolve('resolved');
      },time[index] );
    });
}
//console.log(markerarray1)

function removemarker(index) {
    return new Promise(resolve => {
      setTimeout(() => {
        map.removeLayer(markerarray1[index]);
        map.removeLayer(markerarray2[index]);            
        resolve('resolved');
      } ,time[index]*1.1);
    });
  }

  asyncCall(0);
  async function asyncCall(index) {
        var result = await drawmarker(index);
        if(result == 'resolved'){
           var result1 = await removemarker(index);
           if(result1 == 'resolved'){
              asyncCall(index+1)
           }
        }
  }

//=========================================================================


//========================================================================

// var marker3 = L.Marker.movingMarker(latlon,
//     [10000], {autostart: true}).addTo(map);
// L.polyline(latlon, {color: 'red'}).addTo(map);


// marker3.on('end', function() {
//     marker3.bindPopup('<b>Welcome to Bucarest !</b>', {closeOnClick: false})
//     .openPopup();
// });

//=========================================================================
// var marker3 = L.Marker.movingMarker(londonBrusselFrankfurtAmsterdamLondon,
//     [2000, 2000, 2000, 2000], {autostart: true, loop: true}).addTo(map);

// marker3.loops = 0;
// marker3.bindPopup('', {closeOnClick: false});

//=========================================================================

// var marker4 = L.Marker.movingMarker([[45.816667, 15.983333]], []).addTo(map);

// marker3.on('loop', function(e) {
//     marker3.loops++;
//     if (e.elapsedTime < 50) {
//         marker3.getPopup().setContent("<b>Loop: " + marker3.loops + "</b>")
//         marker3.openPopup();
//         setTimeout(function() {
//             marker3.closePopup();

//             if (! marker1.isEnded()) {
//                 marker1.openPopup();
//             } else {
//                 if (marker4.getLatLng().equals([45.816667, 15.983333])) {
//                     marker4.bindPopup('Click on the map to move me !');
//                     marker4.openPopup();
//                 }

//             }

//         }, 2000);
//     }
// });

// map.on("click", function(e) {
//     marker4.moveTo(e.latlng, 2000);
// });

//=========================================================================

// marker5 = L.Marker.movingMarker(
//   barcelonePerpignanPauBordeauxMarseilleMonaco,
//     [100000], {autostart: true}).addTo(map);

// // marker5.addStation(1, 2000);
// // marker5.addStation(2, 2000);
// // marker5.addStation(3, 2000);
// // marker5.addStation(4, 2000);

// L.polyline(barcelonePerpignanPauBordeauxMarseilleMonaco,
//     {color: 'green'}).addTo(map);


// change the base map
function setBasemap(basemap) {
  if (layer) {
    map.removeLayer(layer);
  }
  layer = new L.TileLayer(basemap,
    {
        attribution: 'Maps © <a href=\"www.openstreetmap.org/copyright\">OpenStreetMap</a> contributors',
        maxZoom: 18
    });
  // add the layer to the map
  map.addLayer(layer);
}

//function for change base map 
function changeBasemap(basemaps){
  var basemap = basemaps.value;
  setBasemap(basemap);
}