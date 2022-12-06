const showBox = document.getElementById("box");
let img;
let image;
var previous= document.getElementById("img1") ;
function show(ele){
  previous.style.zIndex="0";
  console.log(ele);
  img = ele.style.zIndex="1";
  console.log ("image");
  previous = ele;


}