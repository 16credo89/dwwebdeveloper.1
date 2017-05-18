$(document).ready(function(){
var mmm = false;
$('#m1').click(if(mmm == false){


			function(){
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
				"src":"aboutme-short.png",
				"width":"150",
				"height":"50",
			});

			side1button.className += ' text-center';
			mmm = true;
			}
		} else {


			function(){
			$("#stuff1").hide();
			$("#side2").show();
			$('#wordCol1').show();
			var side1button = document.getElementById("blockCol1");

			$(side1button).children("img").attr({
				"src":"aboutme.png",
				"width":"150",
				"height":"150",
			});
			$(side1button).children("img").css({
				"float":"left",
			});

			side1button.className = 'col-md-2';
			mmm = false;
			}	


		});



});