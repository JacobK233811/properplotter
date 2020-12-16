"use strict";
exports.__esModule = true;
var react_carousel_1 = require("@brainhubeu/react-carousel");
require("@brainhubeu/react-carousel/lib/style.css");
var MaterialTable_1 = require("./MaterialTable");
var TopMaterials_1 = require("./TopMaterials");
var ALT_MATERIALS = [
    'Silk (silkworm)',
    'Hydroxy Apatite',
    'Polycaprolactone (PCL)',
    'Silk (Nephalia spider)',
];
var TRADITIONAL = ['Traditional Materials', 'Polyethylene', , 'Silica Glass'];
var MaterialCarousel = function () { return (<react_carousel_1["default"] arrows dots>
    <MaterialTable_1["default"] />
    <TopMaterials_1["default"] data={ALT_MATERIALS} name='Top Alternative Materials'/>
    <TopMaterials_1["default"] data={TRADITIONAL} name='Traditional Materials'/>
  </react_carousel_1["default"]>); };
exports["default"] = MaterialCarousel;
