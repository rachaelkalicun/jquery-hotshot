$(function () {
	var api = google.maps,
		mapCenter = new api.LatLng(39.941705, -104.941700),
		mapOptions = {
			zoom: 13,
			center: mapCenter,
			mapTypeId: api.MapTypeId.ROADMAP,
			disableDefaultUI: true
		},
		map = new api.Map(document.getElementById("map"), mapOptions),
		ui = $("#ui"),
		clicks = 0,
		positions = [];






});