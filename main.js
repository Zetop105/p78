Array_name=["Father","Mother","Me"];
Array_images=["father.jpg","mother.png","me.jpg"];

var i=0;

function next(){
    document.getElementById("images").src=Array_images[i];
    document.getElementById("info").innerHTML=Array_name[i];
    i++;
    if(i==3){
        i=0;
    }
}