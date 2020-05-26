
// var test = $("<h1>")
// test.append("Hello")
var room = "map_0"
var inventory = [];
var allMaps = ["map_0",
                "map_1",
                "map_2",
                "map_3",
                "map_5",
                "map_6",
                "map_7",
                "map_8",
                "map_11",
                "map_13",
                "map_14",
                "map_15",
                "map_16",
                "map_17",
                "map_18",
                "map_19",
                "map_21",
                "map_25"                                 
                ]

var allRoomNames = [
                    "Front Door",
                    "Dining Room",
                    "Entry Way",
                    "Kitchen",
                    "Mummy Room",
                    "Hall 1",
                    "Bedroom",
                    "Closet",
                    "Bathroom",
                    "Safe Room",
                    "Hall 2",
                    "Stairs",
                    "Basement",
                    "Side Yard",
                    "Piano Room",
                    "Attic",
                    "Treehouse",
                    "Backyard"
                    ]    
                    
var status1= [
    "Nothing out of the oridinary",
    "Werewolf, dog whistle",
    "Doors to the West, North, and East",
    "Silverware scattered about, a small flame coming from stove",
    "A Mummy covered in gaws, a sun shaped amulet",
    "A scary clown toy",
    "A Coffin, a Pillow",
    "A skeleton, a vacuum cleaner",
    'A mirror, Toilet Paper',
    "A locked Safe with a voice activated password",
    "Nothing out of the oridinary",
    "Nothing out of the ordinary",
    "A Blacksmith Kiln, bullet mold, no fire",
    "Nothing to see here",
    "Vampire, Piano with hammers",
    "Ghost, a hole for amulet",
    "Spot for mirror",
    "Dog with stick"

]

var currentStatus = status1.map(element => element);

var status2= [
    "Nothing out of the oridinary",
    "Dead Werewolf, dog whistle",
    "Doors to the West, North, and East",
    "A small flame coming from stove",
    "A sun shaped amulet",
    "Nothing to see here",
    "A Coffin",
    "A vacuum cleaner",
    'Toilet Paper*',
    "An open safe with a gun",
    "Nothing out of the oridinary",
    "Nothing out of the ordinary",
    "A Blacksmith Kiln, bullet mold, on fire",
    "Nothing to see here",
    "Piano with hammers",
    "A hole for amulet",
    "Mirror, not reflecting anything",
    "Dog with Squeky toy, stick on ground"

]







var status3= [
    "Nothing out of the oridinary",
    "Dead Werewolf",
    "Doors to the West, North, and East",
    "A small flame coming from stove",
    "Dead Mummy",
    "Nothing to see here",
    "A Coffin with a vampire sleeping in it",
    "Dead skeleton",
    'Mirror*',
    "An open, empty safe",
    "Nothing out of the oridinary",
    "Nothing out of the ordinary",
    "A Blacksmith Kiln, bullet mold, on fire",
    "Nothing to see here",
    "Piano with hammer removed",
    "A hole filled with an amulet",
    "The amulet's light shining on the treehouse",
    "Dog with Squeky toy"

]

var status4= [
    "Nothing out of the oridinary",
    "Dead Werewolf",
    "Doors to the West, North, and East",
    "A small flame coming from stove",
    "Dead Mummy",
    "Nothing to see here",
    "A Coffin with a dead vampire",
    "Dead skeleton",
    'Empty Bathroom',
    "An open, empty safe",
    "Nothing out of the oridinary",
    "Nothing out of the ordinary",
    "A Blacksmith Kiln, bullet mold, on fire",
    "Nothing to see here",
    "Piano with hammer removed",
    "A hole filled with an amulet shining a light on the treehouse",
    "Mirror, reflecting the amulet's light",
    "Dog with Squeky toy"

]
$("#screen").append("Hello There")

var placement=-2;

// 

$("#play").click(function(event){
event.preventDefault();
    var input = $("#command").val().toLowerCase();
    // console.log(input)

    // console.log("IMPORTANT")
    // console.log(status1[14])
    var message = "You can't do that"

    switch (room) {
        case "map_0":
            if (input.includes("open")){
            message = "The door is open"
            break;
            }
            break;
        case "map_1":
            if (input.includes("shoot") && inventory.includes("Loaded_Gun") && currentStatus[1]===status1[1]){
            message = "You shot the werewolf!"
            currentStatus[1] = status2[1]
            break;
            }
            else if (input.includes("whistle") && currentStatus[1]===status2[1]){
                message = "You picked up the dog whistle!"
                inventory.push("Dog_Whistle")
                break;
            }
            break;
        case "map_3":
            if (input.includes("silverware") &&  currentStatus[3]===status1[3]){
            message = "You picked up the silverware"
            console.log("adding silverware")
            inventory.push("Silverware")
            currentStatus[3] = status2[3]
            break;
            }
            else if ((input.includes("fire") || input.includes("light"))
            && input.includes("torch")
            &&  inventory.includes("Unlit_Torch")){
            message = "You lit your torch!"
            inventory.push("Lit_Torch")
            inventory = inventory.filter(item => item!=="Unlit_Torch")            
            break;
            }            

            break;
        case "map_5":
            if ((input.includes("torch")  ||  input.includes("fire") || input.includes("light"))
            && input.includes("mummy")
            && inventory.includes("Lit_Torch")
            && currentStatus[4] === status1[4]){
            message = "You set the mummy on fire!"
            currentStatus[4] = status2[4]
            break;
            }
            else if (input.includes("amulet") 
            && !inventory.includes("Amulet")
            && currentStatus[4] === status2[4]){
            message = "You picked up the amulet!"
            inventory.push("Amulet")
            currentStatus[4] = status3[4]
            break;
            }            
            break;
        case "map_6":
            if (input.includes("clown")
            && currentStatus[5] === status1[5]){
            message = "You picked up the clown toy! (It squeaks!)"
            inventory.push("Clown_Toy")
            currentStatus[5] = status2[5]
            break;
            }
            break;
            
        case "map_7":
            if ((input.includes("kill") || input.includes("stake"))
            && currentStatus[6] === status3[6]
            && inventory.includes("Hammer")){
            message = "You killed the vampire! You win!"
            currentStatus[6] = status4[6]
            break;
            }
            if ((input.includes("pillow") )
            && currentStatus[6] === status1[6]){
            message = "Under the pillow you see a small sheet of paper with the word SWORDFISH"
            currentStatus[6] = status2[6]
            inventory.push("Password")
            break;
            }

            break;
        case "map_8":
            if ((input.includes("whistle") )
            && currentStatus[7] === status1[7]
            && inventory.includes("Dog_Whistle")){
            message = "You blew the dog whistle, and the dog came and chewed up the skeleton"
            currentStatus[7] = status2[7]
            inventory.push("Password")
            break;
            }
            if ((input.includes("vacuum") )
            && currentStatus[7] === status2[7]){
            message = "You picked up the vacuum cleaner"
            currentStatus[7] = status3[7]
            inventory.push("Vacuum")
            break;
            }
            break;
        case "map_11":
            if (currentStatus[8] === status1[8]
            && input.includes("paper")){
                currentStatus[8] = status3[8]
                inventory.push("Toilet_Paper")
                message = "You picked up toilet paper!"
                if (inventory.includes("Stick")){
                    message = "You picked up toilet paper! Your stick fits perfectly inside, creating a torch! You just need something to light it."
                    inventory.push("Unlit_Torch")
                    inventory = inventory.filter(item => item!=="Stick" && item!=="Toilet_Paper" )
                }
                break
            }
            if (currentStatus[8] === status1[8]
                && input.includes("mirror")){
                    currentStatus[8] = status2[8]
                    inventory.push("Mirror")
                    message = "You picked up a mirror!"
                    break
                }
            if ((currentStatus[8] === status2[8] )
            && input.includes("paper")){
                message = "You picked up the toilet paper!"
                currentStatus[8] = status4[8]
                inventory.push("Toilet_Paper")
                if (inventory.includes("Stick")){
                    message = "You picked up toilet paper! Your stick fits perfectly inside, creating a torch! You just need something to light it."
                    inventory.push("Unlit_Torch")
                    inventory = inventory.filter(item => item!=="Stick" && item!=="Toilet_Paper" )
                }
                break;
            }    
            if ((currentStatus[8] === status3[8] )
            && input.includes("mirror")){
                message = "You picked up the Mirror!"
                currentStatus[8] = status4[8]
                inventory.push("Mirror")
                break;
            }
            break;
        case "map_13":
            if ((currentStatus[9] === status1[9] )
            && input.includes("swordfish")
            && inventory.includes("Password")){
                message = "You unloced the safe! It looks like there's a gun inside!"
                currentStatus[9] = status2[9]
                break;
            }
            if ((currentStatus[9] === status2[9] )
            && input.includes("gun")
            && inventory.includes("Password")){
                message = "You picked up the gun! No bullets though."
                currentStatus[9] = status3[9]
                inventory.push("Empty_Gun")

                if (inventory.includes("Silver_Bullet")){
                     message = "You picked up the gun! And your silver bullet fits right in!"
                      inventory.push("Loaded_Gun")
                      inventory = inventory.filter(item => item!=="Empty_Gun" && item!=="Silver_Bullet" )

                 }     

                break;
            }
          

            break;
        case "map_16":
            if ((currentStatus[12] === status1[12] )
            && (input.includes("light") || input.includes("fire")  ||  input.includes('torch'))
            && !input.includes("mummy")
            && inventory.includes("Lit_Torch")){
                message = "You lit the Blacksmith Kiln! Now you can forge something!"
                currentStatus[12] = status2[12]
                break;
            }
            if ((currentStatus[12] === status2[12] )
            && (input.includes("silverware") )
            && inventory.includes("Silverware")){
                message = "You forged a silver bullet out of the Silverware!"
                inventory.push("Silver_Bullet")
                inventory = inventory.filter(item => item!=="Silverware")

                if (inventory.includes("Empty_Gun")){
                    message = "You forged a silver bullet! If fits right into your gun!"
                    inventory.push("Loaded_Gun")
                    inventory = inventory.filter(item => item!=="Empty_Gun" && item!=="Silver_Bullet" )
                }
                
                break;
            }

            break;
        case "map_18":
            if (currentStatus[14] === status1[14] && room === "map_18"){
                message = "Before you could do that, the vampire rushes you, killing one of your friends. Then goes back to playing."
                break;
            }
            if ((currentStatus[14] === status1[14] )
            && (input.includes("fire")  || input.includes("torch") || input.includes("light"))
            && input.includes("amulet")
            && inventory.includes("Amulet")){
                message = "You activated the amulet, shining the bright light, to no effect. Enraged, the vampire kills one of your friends. Perhaps this has a more deceptive use."
                break;
            }
            if ((currentStatus[14] === status2[14] )
            && input.includes("hammer")){
                message = "You took one of the hammers from the piano!"
                currentStatus[14] = status3[14]
                inventory.push("Hammer")
                break;
            }
            break;
        case "map_19":
           if ((input.includes("vacuum") || input.includes("suck") )
           && currentStatus[15] === status1[15]
           && inventory.includes("Vacuum")){
                message = "You sucked up the ghost!"
                currentStatus[15] = status2[15]
            break;
            }
            if ((input.includes("amulet") )
            && currentStatus[15] === status2[15]
            && inventory.includes("Amulet")){
                 message = "You put the amulet in the hole!"
                 currentStatus[15] = status3[15];
             break;
             }
             if ((input.includes("fire") || input.includes("torch") )
             && currentStatus[15] === status3[15]
             && inventory.includes("Amulet")){
                  message = "You light the amulet on fire. Your torch goes out, (it's more pointy than you remember) but it causes the amulet it to shine a light onto the treehouse!"
                  inventory.push("Stake")
                  inventory = inventory.filter(item => item!=="Lit_Torch")
                  currentStatus[15] = status4[15];                
                    if (currentStatus[16]=== status2[16]){
                        message = "You light the amulet on fire. Your torch goes out, (it's more pointy than you remember) but it causes the amulet to shine a light onto the mirror in the treehouse, reflecting into the piano room. You overhear the vampire say, SUNRISE ALREADY? I BETTER GET TO BED!"
                        currentStatus[16] = status3[16];
                        currentStatus[14] = status2[14];
                        currentStatus[6] = status3[6];

                    }
                    if (currentStatus[16]===status1[16]){
                        currentStatus[16]= status3[16]
                    }
              break;
              }


        case "map_21":
            if ((currentStatus[16] === status1[16] || currentStatus[16] === status3[16] )
            && (input.includes("mirror")  )
            && inventory.includes("Mirror")){
                message = "You place the mirror on the treehouse"
                    if (currentStatus[15] === status4[15] && currentStatus[16]===status3[16]  ){
                        message = "You place the mirror on the treehouse, reflecting the light from the amulet into the piano room. You overhear the vampire say, SUNRISE ALREADY? I BETTER GET TO BED!"
                        currentStatus[16] = status4[16];
                        currentStatus[14] = status2[14];
                        currentStatus[6] = status3[6];
                    }
                    if (currentStatus[16]===status1[16]){
                        currentStatus[16] = status2[16]
                    }
                break;
            }
        case "map_25":
            if ((currentStatus[17] === status1[17] )
            && (input.includes("clown") )
            && inventory.includes("Clown_Toy")){
                message = "You gave the dog the squeaky toy, and he dropped his stick!"
                currentStatus[17] = status2[17]
                inventory = inventory.filter(item => item!=="Clown_Toy")                
                break;
            }
            if ((currentStatus[17] === status2[17] )
            && (input.includes("stick") )){
                message = "You picked up the stick!"
                currentStatus[17] = status3[17]
                inventory.push("Stick")

                if (inventory.includes("Toilet_Paper")){
                    message = "You picked up the stick! It fits perfectly in the roll of TP, creating a torch! It just needs something to light it."
                    inventory.push("Unlit_Torch")
                    inventory = inventory.filter(item => item!=="Stick" && item!=="Toilet_Paper")

                }

                break;
            }
        default:
            message = "You can't do that"
            break;
    }





    renderRoom(room)

    console.log(inventory)
    $("#screen").empty();
    $("#screen").append(message);

    renderInventory();
})

$("#up").click(function(){
    event.preventDefault();

    placement+=4
    $("#screen").empty();
    // $("#screen").append(placement);
    renderMap("up");


})

$("#down").click(function(){
    event.preventDefault();

    placement-=4
    $("#screen").empty();
    // $("#screen").append(placement);
    renderMap("down");


})

$("#left").click(function(){
    event.preventDefault();

    placement-=1
    $("#screen").empty();
    // $("#screen").append(placement);
    renderMap("left");


})

$("#right").click(function(){
    event.preventDefault();

    placement+=1
    $("#screen").empty();
    // $("#screen").append(placement);
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




var indexNumber = allMaps.indexOf(roomNumber)
var currentRoomName = allRoomNames[indexNumber]

var renderRoomName = $("<h2>")
                    .text(currentRoomName)
var briefDescription = $("<p>")
                    .text(currentStatus[indexNumber])
$("#displayRoom").empty()
$("#displayRoom").append(renderRoomName)
$("#displayRoom").append(briefDescription)

}

function renderInventory(){

    $("#inventorySpace").empty();
    for (i=0;i<inventory.length; i++){
        var inventoryItem = $("<li>")
        .text(inventory[i])
        $("#inventorySpace").append(inventoryItem)
    }

}
renderInventory();