// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
var width = document.getElementById('input_width');
var height = document.getElementById('input_height');
var color = document.querySelector('input[name=color]');
console.log(color);

function clearGrid() {
  $(".grid").remove();
}


var table = document.getElementById('#pixel_canvas');
//var newRow = table.insertRow();

function makeGrid(e){
	for (var rows = 0; rows < width.value; rows++) {
        console.log("r");
        var newRow = table.insertRow();
        table.insertRow();
        for (var columns = 0; columns < height.value; columns++) {
        	newRow.insertCell();
        }
    }
    
    /*const sm = window.matchMedia("all and (max-width: 450px)");
    const md = window.matchMedia("all and (min-width: 450px)");
    const lg = window.matchMedia("all and (min-width: 750px)");
    const xl = window.matchMedia("all and (min-width: 960px)");

    if($(window).width() > 900) {*/
    	$(".grid").width(900/rows);
		$(".grid").height(900/columns);
	/*} else if($(window).width() > 750) {
		$(".grid").width(700/rows);
		$(".grid").height(700/columns);
	} else if($(window).width() > 450) {
		$(".grid").width(400/rows);
		$(".grid").height(400/columns);
	} else if($(window).width() <= 450){
		$(".grid").width(300/rows);
		$(".grid").height(300/columns);
	}*/
	e.preventDefault();
}

$(document).ready(function(){	
	$("#sizePicker").submit(function(event) {

	// Your code goes here!
		clearGrid();
		makeGrid();
	    event.preventDefault();
	    
	});
});

$(".grid").click(function() {
   $(this).parent().find('.grid').css("background-color", color);
 });