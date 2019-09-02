// --------------------------------------------------------
//
// This file is to configure the configurable settings.
// Load this file before script.js file at gmap.html.
//
// --------------------------------------------------------

// -- Output Settings -------------------------------------
// Show metric values
Metric = false; // true or false

// -- Map settings ----------------------------------------
// The Latitude and Longitude in decimal format
CONST_CENTERLAT = 40.0;
CONST_CENTERLON = -76.0;
// The google maps zoom level, 0 - 16, lower is further out
CONST_ZOOMLVL   = 5;

// -- Marker settings -------------------------------------
// The default marker color
MarkerColor   = "rgb(127, 127, 127)";
SelectedColor = "rgb(225, 225, 225)";
StaleColor    = "rgb(255, 100, 0)";
LowColor      = "rgb(186, 218, 85)";

// -- Site Settings ---------------------------------------
SiteShow    = false; // true or false
// The Latitude and Longitude in decimal format
SiteLat     = 40.0;
SiteLon     = -76.2;

SiteCircles = true; // true or false (Only shown if SiteShow is true)
// In nautical miles or km (depending settings value 'Metric')
SiteCirclesDistances = new Array(1,3,5,10,15,20,25,30,35,40,45,50,55,60,100);

// The amount of time after the last message was seen before removing
// the aircraft from the map. Unit in seconds
LingerTime = 30000000000
