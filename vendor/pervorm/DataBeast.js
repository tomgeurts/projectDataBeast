/**
 * @author alteredq / http://alteredqualia.com/
 */

var DataBeast = function () {

	var data, telefoonlijstElements;
	var nCheck = 0;
	var public_spreadsheet_url = 'https://docs.google.com/spreadsheets/d/1ptzrxQDOWERSj2cmKhclW1veJ11rszmcaSHE80o32zo/pubhtml';
	var debug = false;
	var globalIdCount = 0;
	var beasts = [];		

	function loadTableTop() {

		Tabletop.init({
			key: public_spreadsheet_url,
			callback: tabletopLoaded,
			debug: debug
		})
	}

	function tabletopLoaded(d) {

		console.log("tabletopLoaded : ", d)

		
		// var elements = d.Telefoonlijst.elements;

		storeLocal( d );

		data = d;

		init();

	}

	function storeLocal(d) {
		$.ajax({
			type: "POST",
			url: "storeLocal.php",
			data: { myJson : JSON.stringify(data) },
			dataType: "json",
			success: function(d) {
				alert(data.reply);
			}
		});
	};

	function loadLocal() {
		$.getJSON('local.json', function( json ) {
			data = json;

			init();
		});	
	}
};

THREE.BeastSystem = function( options ) {

	THREE.Object3D.apply( this, arguments );

	options = options || {};

	// parse options and use defaults

	this.time = 0;
	this.beasts = [];

	var function1 = {

	};
};

THREE.BeastSystem.prototype = Object.create( THREE.Object3D.prototype );
THREE.BeastSystem.prototype.constructor = THREE.BeastSystem;

THREE.Beast = function( options ) {

	THREE.Object3D.apply( this, arguments );

	options = options || {};

	// parse options and use defaults

	this.PARTICLE_CURSOR = 0;
	this.time = 0;
	this.particleContainers = [];

	var function1 = {

	};
};

THREE.Beast.prototype = Object.create( THREE.Object3D.prototype );
THREE.Beast.prototype.constructor = THREE.Beast;