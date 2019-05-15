// initialize the map on the "map" div with a given center and zoom
var map;
map = new L.Map('map', {
  zoom: 13,
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

//set map bounds
map.fitBounds([
  [40.875, -74.04166666],
  [40.66666666, -73.875]
]);


var latlon = [];
var passenger = [];
var state = [];


var marker;


// for (let index = 0; index < 50; index++) {
for (let i = 1; i < 16; i++) {
  readfile('data/taxi-' + i + '.txt', marker)
}

// }


var markerarray = [];
function readfile(filepath, markerXX) {
  jQuery.get(filepath, function (txt) {
    var data = txt.split('\n');
    for (let line_num = 0; line_num < data.length; line_num++) {
      var arr = data[line_num].split(',')
      latlon[line_num] = [parseFloat(arr[0]), parseFloat(arr[1])];
      passenger.push(parseInt(arr[2]));
      state.push(parseInt(arr[3]));

    }
    markerXX = L.Marker.movingMarker(latlon, 300000, passenger, { autostart: false }).setIcon(blueIcon).setOpacity(0.5).addTo(map);
    markerarray.push(markerXX)
    // L.polyline(latlon).addTo(map);

  })
}



//-----------------------------------------------
// var dataset0 = [[[40.648525, -73.783005], [40.763577, -73.965332]], [[40.742035, -74.007011], [40.766338, -73.894638]], [[40.766338, -73.894638], [40.766338, -73.894638]], [[40.725876, -73.983566], [40.755875, -73.96711]], [[40.764076, -73.966751], [40.778496, -73.953247]], [[40.778496, -73.953247], [40.770447, -73.94796]], [[40.770447, -73.94796], [40.770447, -73.94796]], [[40.770447, -73.94796], [40.757023, -73.970367]], [[40.757023, -73.970367], [40.757023, -73.970367]], [[40.731144, -73.981941], [40.731144, -73.981941]], [[40.729683, -73.990028], [40.729683, -73.990028]], [[40.756184, -73.974831], [40.758472, -73.963417]], [[40.768272, -73.955711], [40.773327, -73.95948]], [[40.782421, -73.953438], [40.77235, -73.949738]], [[40.768818, -73.958382], [40.767845, -73.961731]], [[40.772606, -73.960655], [40.76886, -73.958466]], [[40.76886, -73.958466], [40.773506, -73.958069]], [[40.774231, -73.954819], [40.762177, -73.963188]], [[40.750343, -73.97702], [40.750343, -73.97702]], [[40.765263, -73.978798], [40.770611, -73.98024]], [[40.770611, -73.98024], [40.774841, -73.984177]], [[40.777618, -73.982414], [40.759224, -73.977173]]];
// var dataset1=[[[40.748386, -73.988708], [40.768368, -73.984909]], [[40.748386, -73.988708], [40.768368, -73.984909]], [[40.768242, -73.984756], [40.736897, -73.993134]], [[40.768242, -73.984756], [40.736897, -73.993134]], [[40.738976, -73.995605], [40.741028, -74.007462]], [[40.738976, -73.995605], [40.741028, -74.007462]], [[40.74081, -74.00766], [40.750282, -73.994797]], [[40.74081, -74.00766], [40.750282, -73.994797]], [[40.750839, -73.975578], [40.749241, -73.992386]], [[40.750839, -73.975578], [40.749241, -73.992386]], [[40.760082, -73.987846], [40.865486, -73.927635]], [[40.760082, -73.987846], [40.865486, -73.927635]], [[40.768074, -73.985573], [40.835369, -73.946053]], [[40.768074, -73.985573], [40.835369, -73.946053]], [[40.734669, -74.002174], [40.775799, -73.986214]], [[40.734669, -74.002174], [40.775799, -73.986214]], [[40.767918, -73.982491], [40.761501, -73.973526]], [[40.767918, -73.982491], [40.761501, -73.973526]], [[40.729664, -73.989853], [40.768181, -73.990433]], [[40.729664, -73.989853], [40.768181, -73.990433]], [[40.762482, -73.993607], [40.761833, -73.910477]], [[40.762482, -73.993607], [40.761833, -73.910477]], [[40.729401, -73.990013], [40.733807, -73.981071]], [[40.729401, -73.990013], [40.733807, -73.981071]], [[40.758598, -73.988823], [40.66066, -73.962944]]];
// //var lon = [dataset0,dataset1]
// //map.fitBounds([40.737, -73.923]);

// var time = [2000,3000,10000,2500,4000,2000,10000,3000,2500,4000,9000,3000,3000,2500,4000,2000,3000,3000,2500,4000];
// var empty = [1,0,0,1,0,1,0,0,1,0,1,0,0,1,0,1,0,0,1,0]
//----------------------------------------------




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

// // code for visualize trips one by one
// var markerarray1 = new Array();
// var markerarray2 = new Array();
// function drawmarker(index) {
//     return new Promise(resolve => {
//       setTimeout(() => {
//         if (empty[index] == 0) {
//           markers1 = L.Marker.movingMarker(dataset0[index],
//             [time[index]], {autostart: true}).setIcon(yellowIcon).addTo(map)
//           markers2 = L.Marker.movingMarker(dataset1[index],
//             [time[index]], {autostart: true}).setIcon(yellowIcon).addTo(map)
//         }
//          else{
//           markers1 = L.Marker.movingMarker(dataset0[index],
//             [time[index]], {autostart: true}).setIcon(redIcon).addTo(map)
//           markers2 = L.Marker.movingMarker(dataset1[index],
//             [time[index]], {autostart: true}).setIcon(redIcon).addTo(map)
//          }
//         //L.polyline(dataset1[index], {color: '#3366FF'}).addTo(map)
//             markerarray1.push(markers1);
//             markerarray2.push(markers2);
//         resolve('resolved');
//       },time[index] );
//     });
// }
// //console.log(markerarray1)

// function removemarker(index) {
//     return new Promise(resolve => {
//       setTimeout(() => {
//         map.removeLayer(markerarray1[index]);
//         map.removeLayer(markerarray2[index]);            
//         resolve('resolved');
//       } ,time[index]*1.1);
//     });
//   }

//   asyncCall(0);
//   async function asyncCall(index) {
//         var result = await drawmarker(index);
//         if(result == 'resolved'){
//            var result1 = await removemarker(index);
//            if(result1 == 'resolved'){
//               asyncCall(index+1)
//            }
//         }
//   }

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

// if(marker4.getLatLng().equals([45.816667, 15.983333])) {
//   marker4.bindPopup('Click on the map to move me !');
//   marker4.openPopup();
// }

// map.on("click", function(e) {
//   console.log(e.latlng)
//     marker4.moveTo(e.latln, 2000);
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
function changeBasemap(basemaps) {
  var basemap = basemaps.value;
  setBasemap(basemap);
}



// legend controller 

// var customControl = L.Control.extend({

//   options: {
//     position: 'topleft'
//   },

//   onAdd: function (map) {
//     var container = L.DomUtil.create('div', 'leaflet-bar leaflet-control leaflet-control-custom domcontainer');

//     container.style.backgroundColor = 'white';
//     container.style.backgroundImage = "url(img/icons8-map-marker-64.png)";
//     container.style.backgroundSize = "35px 31px";
//     container.style.width = '35px';
//     container.style.height = '30px';
//     container.title = 'Legend';
//     container.style.cursor = 'pointer';
//     container.id = 'legened_container';
//     container.tileUrl = "url(img/icons8-map-marker-64.png)";


//     return container;
//   }
// });

// map.addControl(new customControl());


//change icon size when the zoom triggers
map.on('zoomend', changeIconSize);

function changeIconSize(e) {

  // this is the default size (of the default icon); it should be known beforehand;
  var defaultIconSize = new L.Point(5, 5);
  var defaultShadowSize = new L.Point(20, 20);

  // use leaflet's internal methods to scale the size (a bit overkill for this case...)
  var transformation = new L.Transformation(1, 0, 1, 0);

  var currentZoom = map.getZoom();
  var newIconSize = transformation.transform(defaultIconSize, sizeFactor(currentZoom));
  var newShadowSize = transformation.transform(defaultShadowSize, sizeFactor(currentZoom));

  // adjust the icon anchor to the new size
  var newIconAnchor = new L.Point(newIconSize.x, newIconSize.y);
  console.log(markerarray.length)
  for (let index = 0; index < markerarray.length; index++) {

    var newIcon = markerarray[index].options.icon;//select the icon
    // change icon options
    newIcon.options.iconSize = newIconSize;
    newIcon.options.iconAnchor = newIconAnchor;
    newIcon.options.shadowSize = newShadowSize;
    markerarray[index].setIcon(newIcon); //set marker with new icon

  }

}

function sizeFactor(zoom) {
  if (zoom <= 8) return 0.3;
  else if (zoom == 9) return 0.4;
  else if (zoom == 10) return 0.5;
  else if (zoom == 11) return 0.7;
  else if (zoom == 12) return 0.85;
  else if (zoom == 13) return 1.0;
  else if (zoom == 14) return 1.3;
  else if (zoom == 15) return 1.6;
  else if (zoom == 16) return 2.5;
  else // zoom >= 17
    return 3.5;
}

$(function () {

  L.control.custom({
    position: 'topleft',
    content:
      '<button type="button"  class="btn btn-default btn_camera"><i class="fa fa-map"></i>' +
      '</button>'
    ,
    classes: 'btn-group-vertical btn-group-sm ',
    title: 'show legend',
    name: 'click',
    style:
    {

      margin: '10px 100',
      padding: '0px 0 0 0',
      cursor: 'pointer',
      width: '35px',
    },
    events:
    {
      click: function () {

        console.log(this.name)
        if (this.name == 'click') {
          this.title = 'close legend'
          this.name = 'clicked'
        } else {
          this.title = 'show legend'
        }
        $('#testlegend').slideToggle();

      }
    }
  }).addTo(map)

  L.control.custom({
    position: 'topleft',
    content: '<button type="button" class="btn btn-default btn_camera">' +
      '    <a id ="take_screenshot" ><i class="fa fa-camera"></i></a>' +
      '</button>'
    ,
    classes: 'btn-group-vertical btn-group-sm ',
    title: 'screendhot',
    style:
    {

      margin: '10px 100',
      padding: '0px 0 0 0',
      cursor: 'pointer',
      width: '35px',
    },
    events:
    {
      click: function () {
        // Get the modal
        var node = document.body;

        domtoimage.toPng(node)
          .then(function (dataUrl) {
            var img = new Image();
            img.style.width = '100%';
            img.style.height = '80%';
            img.id = 'scnimg';

            img.className = 'screenshot';
            img.src = dataUrl;
            // var link = document.getElementById('downloadLink');
            // link.download = 'my-image-name.png';
            // link.href = dataUrl;
            $('#screenshot_div>span:eq(0)').after(img);
            var modal = document.getElementById("myModal");
            var span = document.getElementsByClassName("close")[0];
            var dwnbtn = document.getElementById('download');

            modal.style.display = "block";


            // When the user clicks on <span> (x), close the modal
            span.onclick = function () {
              modal.style.display = "none";
              img.remove();
            }
            dwnbtn.onclick = function(){
              var download = document.createElement('a');
              download.href = img.src;
              download.download = 'taxi_visualizer.png';
              download.click();
            }

            // When the user clicks anywhere outside of the modal, close it
            window.onclick = function (event) {
              if (event.target == modal) {
                modal.style.display = "none";
                img.remove();
              }
            }
           
          })
          .catch(function (error) {
            console.error('oops, something went wrong!', error);
          });
         



        // domtoimage.toJpeg(document.body)
        // .then(function (dataUrl) {
        //     var link = document.createElement('a');
        //     link.download = 'my-image-name.jpeg';
        //     link.href = dataUrl;
        //     link.click();
        // });
        console.log('wrapper div element clicked');
        // console.log(data);
        // var link = document.getElementById('take_screenshot');

        // html2canvas(document.querySelector('#map')
        // ).then(function (canvas) {

        //   link.href = canvas.toDataURL();
        //   link.download = "example.png";
        //   console.log(link.download)
        // });

      },
      dblclick: function () {
        console.log('wrapper div element dblclicked');
      },
      contextmenu: function () {
        console.log('wrapper div element contextmenu');

      },
    }
  })
    .addTo(map);

  L.control.custom({
    position: 'topleft',
    content:
      '<button type="button" class="btn btn-default btn_camera"> <i class="fa fa-refresh" aria-hidden="true"></i>' +
      '</button>'
    ,
    classes: 'btn-group-vertical btn-group-sm ',
    title: 'restart',
    style:
    {

      margin: '10px 100',
      padding: '0px 0 0 0',
      cursor: 'pointer',
      width: '35px',
    },
    events:
    {
      click: function () {
        location.reload();
      }
    }
  }).addTo(map)

  L.control.custom({
    position: 'topright',
    content:
      '<button type="button"  class="btn btn-default btn_camera"><i class="fa fa-map"></i>' +
      '</button>'
    ,
    classes: 'btn-group-vertical btn-group-sm ',
    title: 'show legend',
    name: 'click',
    style:
    {

      margin: '10px 100',
      padding: '0px 0 0 0',
      cursor: 'pointer',
      width: '35px',
    },
    events:
    {
      click: function () {

        map.remove()

        map = L.eeGeo.map('map', '944dd0f02f7d5691fe41738b92a4fc4c', {
          center: [40.875, -74.04166666],
          zoom: 15
        });

      }
    }
  }).addTo(map)

})

