QUnit.begin(function( details ) {
    console.log( "Test Suit Starting." );
    });

QUnit.test( "file upload test", function(assert) {

  assert.expect( 1 );
 
  var $body = $( "#filetoupload" );
 
  $body.on( "click", function() {
    assert.ok( true, "file input field is clicked!");
  });
 
  $body.trigger( "click" );
 
  });

  //testing for begining btn
// QUnit.test('begin button test',function(assert){
//     assert.expect(1)
//     var $btn = $('#begin')
   
//     $btn.on('click',function(){
//         assert.ok(true,'button clicked')
//     })
//     $btn.trigger('click')
// })

//   QUnit.test("baseLayer layerGroup", function( assert ) {
//     assert.equal(baseLayer.getLayers().length,
//             1,
//             "There is just one layer in 'baseLayer' layerGroup"
//     );
//     assert.equal(baseLayer.getLayers()[0]._url,
//             "http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
//             "The url of the layer leads to the correct openstreet map tiles"
//     );

//     assert.equal(baseLayer.getLayers()[0].options.attribution,
//             '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
//             "The attribution for the layer is correct"
//     );
//     assert.equal(baseLayer.getLayers()[0].options.minZoom,
//             0,
//             "The default minimum zoom is set to 0"
//     );
//     assert.equal(baseLayer.getLayers()[0].options.maxZoom,
//             19,
//             "The default maximum zoom is set to 19"
//     );
// });