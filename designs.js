// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
var width = document.getElementById('input_width');
var height = document.getElementById('input_height');
var color = document.querySelector('input[name=color]');
//console.log(color);

$("#sizePicker").submit(function(event){
	console.log("submit");
	event.preventDefault();
	
    // call the makeGrid function and pass widht and height as an argument
    var body = document.getElementsByTagName("table");
    function makeGrid(){
    	//get width
		var width = $("#input_width").val();
		console.log(width);
		// get height
		var height = $("#input_height").val();
		console.log(height);
    	clearGrid();
    	console.log("makeGrid");
		var tableSpace = document.getElementById('table');
		tab = document.createElement('table');
		tab.setAttribute('id','newTable');
		for(var r =0; r < height ;r++)
		{
			row = document.createElement('tr');
			for(var c = 0; c < width; c++){
				var column = document.createElement('td'); // create column node
            	row.appendChild(column);
			}
			tab.appendChild(row);
			/*column.onclick = function btnClick() {
				var x = document.getElementById("newtable").getElementsByTagName("td");
				x[0].innerHTML = "i want to change my cell color";
			    x[0].style.backgroundColor = "yellow";            
			};*/
		}
		tableSpace.appendChild(tab);
    }
    makeGrid();
    // add color later 
    // before you make the grid in the makeGrid function
    // try to make a fixed size grid with JavaScirpt 
})

function clearGrid() {
  $("#newTable").remove();
}

//document.getElementsByTagName("td").onclick = function() {btnClick()};

$(document).ready(function(){
    $("td").click(function(){
        $("td").css("background-color", "red");
    });
});

/*
function btnClick(event) {
	console.log('btnClick');
	event.preventDefault();
    $("this").css
}*/
/*
$('td').click(function() {
   $(this).css('backgroundColor', '#000');
});*/

/*
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

    if($(window).width() > 900) {
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
	}
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
 });*/