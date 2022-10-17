//var btn = document.getElementById("theme")
//var body = document.querySelector("body")
//var colors = ["red", "green", "blue", "yellow", "purple"]
//btn.addEventListener('click',(e)=>{
   // var randomNumber = generateRandomNumber();
    //body.style.background = colors[randomNumber]
//})
//function generateRandomNumber(){
  //  var random = Math.floor(Math.random()*colors.length);
    //console.log(random)
    //return random;
//}

//infinite colors
var btn = document.getElementById("theme")
var body = document.querySelector("body")
var hex = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f']
var hexColor ='#'
btn.addEventListener('click', (e)=>{
    var hexcolor = createHexColor();
    body.style.background = hexcolor;
})
function generateRandomNumber(){
    var random = Math.floor(Math.random()* hex.length)
    return random;
}
function createHexColor(){
    hexColor = '#'
    for(var i=0; i<6; i++){
        var randomNum = generateRandomNumber()
        hexColor = hexColor + hex[randomNum]
    }
    console.log(hexColor)
    return hexColor
}