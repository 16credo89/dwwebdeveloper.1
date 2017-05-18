$(document).ready(function(){
var menuopen = false;
var menuopen2 = false;

var former1,former2;
var shown,shown2 = false;

former1 = $("#row1").height();
former2 = $("#row2").height();

/************************************ ABOUT ME - menu button *************************************/

$('#m1').click(function(){ 
	$('#email-temp-row').hide();
			$("#row1").show();
			$("#row2").show();
			$('#email-temp-row').hide();
			$('#websites-p').hide();
			hideItRight();
			
			showItLeft();
		
});


function showItLeft(){
	$("#stuff1").show();
	$("#side2").hide();
	$('#wordCol1').hide();
	var side1button = document.getElementById("blockCol1");
	side1button.className = 'col-md-12';

	$(side1button).children("img").css({
		"margin":"0 auto",
		"float":"none",
	});

	$(side1button).children("img").attr({
		"src":"img/aboutme-short.png",
		"width":"150",
		"height":"50",
	});

	side1button.className += ' text-center';
	
	menuopen = true;
}
			
function hideItLeft(){
	$("#stuff1").hide();
	$("#side2").show();
	$('#wordCol1').show();
	var side1button = document.getElementById("blockCol1");

	$(side1button).children("img").attr({
		"src":"img/aboutme.png",
		"width":"150",
		"height":"150",
	});
	$(side1button).children("img").css({
		"float":"left",
	});

	side1button.className = 'col-md-2';
	
	menuopen = false;
			
}

/************************************ CONTACT ME - menu button *************************************/

$('#m2').click(function(){
	$('#email-temp-row').hide();
	
			$("#row1").show();
			$("#row2").show();
			$('#email-temp-row').hide();
		$('#websites-p').hide();
			hideItLeft();
			
			showItRight();
});

function showItRight(){
	$("#stuff2").show();
	$("#side1").hide();
	$('#wordCol2').hide();
	var side2button = document.getElementById("blockCol2");
	side2button.className = 'col-md-12';

	$(side2button).children("img").css({
		"margin":"0 auto",
		"float":"none",
	});

	$(side2button).children("img").attr({
		"src":"img/contactme-short.png",
		"width":"150",
		"height":"50",
	});
	menuopen2 = true;
	}

function hideItRight(){
	$("#stuff2").hide();
	$("#side1").show();
	$('#wordCol2').show();
	var side2button = document.getElementById("blockCol2");

 	$(side2button).children("img").attr({
		"src":"img/contactme.png",
		"width":"150",
		"height":"150",
	});
	$(side2button).children("img").css({
		"float":"left",
	});
	side2button.className = 'col-md-2';

	menuopen2 = false;
	}
	
/************************************ PORTFOLIO - menu button *************************************/

$('#m3').click(function(){
	if(shown == false){
		showPortfolio();
	}else{
		shown = false;
	}
});

function showPortfolio(){
			$("#row1").hide();
			$("#row2").show();
			$("#row2").height(former1+former2+50);
			shown = true;
		}
function hidePortfolio(){
			$("#row1").show();
			shown = false;
		}
		
/************************************ SERVICES - menu button *************************************/

$('#m4').click(function(){
	if(shown2 == false){
		showServices();
	}else{
		shown2 = false;
	}
});
function showServices(){
	$('#email-temp-row').hide();
	$('#websites-p').hide();
			$("#row1").hide();
			$("#row2").hide();
			$("#row3").show();
			$("#row3").height("100%");
			shown2 = true;
		}
function hideServices(){
			$("#row2").show();
			$("#row1").show();
			shown2 = false;
		}

});