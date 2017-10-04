// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

$("#sizePicker").submit(function(event){
	console.log("submit");
	event.preventDefault();
	
    // call the makeGrid function and pass widht and height as an argument
    var body = document.getElementsByTagName("table");
    const colorPicker = document.getElementById("colorPicker");
    function makeGrid(){
    	//get width
		var width = $("#input_width").val();
		console.log(width);
		// get height
		var height = $("#input_height").val();
		console.log(height);
    	clearGrid();
    	//console.log("makeGrid");
		var tableSpace = document.getElementById('table');
		tab = document.createElement('table');
		tab.setAttribute('id','newTable');
		for(var r =0; r < height ;r++)
		{
			row = document.createElement('tr');
			for(var c = 0; c < width; c++){
				const cell = row.insertCell(c);
				    cell.onclick = () => {
				      cell.style.backgroundColor = colorPicker.value;
				}
			}
			tab.appendChild(row);
		}
		tableSpace.appendChild(tab);
    }
    makeGrid();
});   
    
function clearGrid() {
  $("#newTable").remove();
}