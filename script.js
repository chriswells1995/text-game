
// var test = $("<h1>")
// test.append("Hello")
var room = "map_0"

$("#screen").append("Hello There")

var placement=-2;

// 

$("#play").click(function(){

    var input = $("#command").val();
    console.log(input)
    $("#screen").empty();
    $("#screen").append(input);

})

$("#up").click(function(){

    placement+=4
    $("#screen").empty();
    $("#screen").append(placement);
    renderMap("up");


})

$("#down").click(function(){

    placement-=4
    $("#screen").empty();
    $("#screen").append(placement);
    renderMap("down");


})

$("#left").click(function(){

    placement-=1
    $("#screen").empty();
    $("#screen").append(placement);
    renderMap("left");


})

$("#right").click(function(){

    placement+=1
    $("#screen").empty();
    $("#screen").append(placement);
    renderMap("right");


})

function renderMap(direction){


    switch (placement) {
        case -2:
            room = "map_0"
            break;
        case 1:
            if (direction === "down"){
                placement= 5
                room = "map_5"
            }
            else{
            room = "map_1"
            }
            break;
        case 2:
            room = "map_2"
            break;
        case 3:
            if (direction === "down"){
                placement =7
            }
            else{
            room = "map_3"
            }
            break;

        case 5:
            console.log("5 ", direction)
            if (direction === "up"){
                placement = 1;
                room = "map_1"
            }
            if (direction === "left"){
            room = "map_5" 
            }
            break;
        case 6:
            room = "map_6"
            break;

        case 7:
            if (direction === "up"){
                placement = 3
            }
            else{
            room = "map_7"                
            }
            break;
        case 8:
            room = "map_8"
            break;

        case 10:
            if (direction==="up"){
            room = "map_14"
            placement=14
            }
            if (direction==="down"){
            room = "map_6"
            placement=6
            }
            if (direction==="left"){
            placement=11
            }
            break;
        case 13:
            room = "map_13"
            break;
        case 11:
            if (direction === "down"){
                placement = 15
            }
            else{
            room = "map_11"
            }
            break;
        case 14:
            room = "map_14"
            break;
        case 15:
            if (direction === "up"){
                placement = 11;
            }
            else{
            room = "map_15"
            }
            break;

        case 16:
            room = "map_16"
            break;
        case 17:
            switch (direction) {
                case "up" :
                    room = "map_17"
                    break;
                case  "down":
                    room = "map_17"
                    break;
                case "left":
                    placement=placement+1;
                    break;
                case "right":
                    placement=placement-1;
                    break;            
                default:
                    break;
            }
            
            break;

            
        case 18:
            if (direction === "left"){
                placement = 19
                room = "map_19"
            }
            if (direction === "right"){
                placement = 17
            }
            if (direction === "up"){
            room = "map_18"
            }
            break;
        case 19:
            if (direction === "right"){
                placement = 18
                room = "map_18"
            }
            else{
            room = "map_19"
            } 
            break;
      
        case 21:
            room = "map_21"
            break;
        case 25:
            room = "map_25"
            break;

        default:
            console.log("wall")
            switch (direction) {
                case "up":
                    placement=placement-4;
                    break;
                case "down":
                    placement=placement+4;
                    break;
                    
                case "left":
                    placement=placement+1;
                    break;

                case "right":
                    placement=placement-1;
                    break;

                default:
                    break;
            }
            break;
    }
            console.log(placement)

    var map = $("<img>")
    .attr("width", "10%")
    .attr("height", "10%")
    .attr("src", "drawings/map_0.png")
    .attr("src", "drawings/"+room +".png")

    $("#mapScreen").empty();
    $("#mapScreen").append(map);

    renderRoom(room)

}

renderMap()


function renderRoom(roomNumber){


}