
jQuery.fn.morpion = function () {

$("#grid").click (function (event) {
	divcliquee = event.target;
	joueur(divcliquee);
	vainqueur();
	});

var player=1

joueur=function(div) {
	if ((player==1) && !($(div).hasClass("player1")) && !($(div).hasClass("player2"))) {
		$(div).addClass("player1");
		player=2;
	} else if ((player==2) && !($(div).hasClass("player1")) && !($(div).hasClass("player2"))) {
		$(div).addClass("player2");
		player=1;
	}
};

var reinitialiser = function () {
	$("div").removeClass("player1 player2");
	player=1;
};

$("#recommencer").click(reinitialiser);



var vainqueur = function () {
	if (  ($("#x1y3").hasClass("player1")) && ($("#x1y2").hasClass("player1")) && ($("#x1y1").hasClass("player1"))) {
		alert ("Le joueur 1 a gagné !");
		reinitialiser();
	} else if (  ($("#x2y3").hasClass("player1")) && ($("#x2y2").hasClass("player1")) && ($("#x2y1").hasClass("player1"))) {
		alert ("Le joueur 1 a gagné !");
		reinitialiser();
	} else if (  ($("#x3y3").hasClass("player1")) && ($("#x3y2").hasClass("player1")) && ($("#x3y1").hasClass("player1"))) {
		alert ("Le joueur 1 a gagné !");
		reinitialiser();
	} else if (  ($("#x1y1").hasClass("player1")) && ($("#x2y1").hasClass("player1")) && ($("#x3y1").hasClass("player1"))) {
		alert ("Le joueur 1 a gagné !");
		reinitialiser();
	} else if (  ($("#x1y2").hasClass("player1")) && ($("#x2y2").hasClass("player1")) && ($("#x3y2").hasClass("player1"))) {
		alert ("Le joueur 1 a gagné !");
		reinitialiser();
	} else if (  ($("#x1y3").hasClass("player1")) && ($("#x2y3").hasClass("player1")) && ($("#x3y3").hasClass("player1"))) {
		alert ("Le joueur 1 a gagné !");
		reinitialiser();
	} else if (  ($("#x1y3").hasClass("player1")) && ($("#x2y2").hasClass("player1")) && ($("#x3y1").hasClass("player1"))) {
		alert ("Le joueur 1 a gagné !");
		reinitialiser();
	} else if (  ($("#x1y1").hasClass("player1")) && ($("#x2y2").hasClass("player1")) && ($("#x3y3").hasClass("player1"))) {
		alert ("Le joueur 1 a gagné !");
		reinitialiser();
	} else if (  ($("#x1y3").hasClass("player2")) && ($("#x1y2").hasClass("player2")) && ($("#x1y1").hasClass("player2"))) {
		alert ("Le joueur 2 a gagné !");
		reinitialiser();
	} else if (  ($("#x2y3").hasClass("player2")) && ($("#x2y2").hasClass("player2")) && ($("#x2y1").hasClass("player2"))) {
		alert ("Le joueur 2 a gagné !");
		reinitialiser();
	} else if (  ($("#x3y3").hasClass("player2")) && ($("#x3y2").hasClass("player2")) && ($("#x3y1").hasClass("player2"))) {
		alert ("Le joueur 2 a gagné !");
		reinitialiser();
	} else if (  ($("#x1y1").hasClass("player2")) && ($("#x2y1").hasClass("player2")) && ($("#x3y1").hasClass("player2"))) {
		alert ("Le joueur 2 a gagné !");
		reinitialiser();
	} else if (  ($("#x1y2").hasClass("player2")) && ($("#x2y2").hasClass("player2")) && ($("#x3y2").hasClass("player2"))) {
		alert ("Le joueur 2 a gagné !");
		reinitialiser();
	} else if (  ($("#x1y3").hasClass("player2")) && ($("#x2y3").hasClass("player2")) && ($("#x3y3").hasClass("player2"))) {
		alert ("Le joueur 2 a gagné !");
		reinitialiser();
	} else if (  ($("#x1y3").hasClass("player2")) && ($("#x2y2").hasClass("player2")) && ($("#x3y1").hasClass("player2"))) {
		alert ("Le joueur 2 a gagné !");
		reinitialiser();
	} else if (  ($("#x1y1").hasClass("player2")) && ($("#x2y2").hasClass("player2")) && ($("#x3y3").hasClass("player2"))) {
		alert ("Le joueur 2 a gagné !");
		reinitialiser();
	}
};
}
$('#grid').morpion();


