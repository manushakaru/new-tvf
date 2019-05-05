QUnit.test("map default options", function( assert )   {
     assert.equal(map.getCenter().toString(),
            "LatLng(40.77091, -73.95833)",
            "The map is centered at the ZMT's longitude, and the equator"
    );
    assert.equal(map.getZoom(),
            12,
            "The default zoom is set to 12"
    );
});

QUnit.test("baseLayer layerGroup", function( assert ) {
    // assert.equal(map._layer.getLayers().length,
    //         1,
    //         "There is just one layer in 'baseLayer' layerGroup"
    // );
    assert.equal(map._layer._url,
            "http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
            "The url of the layer leads to the correct openstreet map tiles"
    );

    assert.equal(baseLayer.getLayers()[0].options.attribution,
            '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
            "The attribution for the layer is correct"
    );
    assert.equal(baseLayer.getLayers()[0].options.minZoom,
            0,
            "The default minimum zoom is set to 0"
    );
    assert.equal(baseLayer.getLayers()[0].options.maxZoom,
            19,
            "The default maximum zoom is set to 19"
    );
});