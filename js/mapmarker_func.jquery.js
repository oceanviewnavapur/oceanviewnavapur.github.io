		//set up markers 
		var myMarkers = {"markers": [
				{"latitude": "19.4409781", "longitude":"72.751992", "icon": "img/map-marker2.png"}
			]
		};
		
		//set up map options
		$("#map").mapmarker({
			zoom	: 14,
			center	: 'oceanview beach house and cafe',
			markers	: myMarkers
		});
	