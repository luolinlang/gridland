requirejs.config({
	baseUrl: "js/lib",
	shim: {
		"base64": {
			exports: "Base64"
		}
	},
	paths: {
		app: "../app",
		"jquery": [
			"/web/games/gridland/www/js/jquery.min",
			"jquery-2.0.3.min"
		],
	},
	waitSeconds: 0
});

// Load the main module to start the game
requirejs(["app/main"]);
