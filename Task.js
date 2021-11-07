// var element = document.getElementsByTagName("li");

// element[0].onclick = function(){
//     var val = document.getElementById("textarea").value.bold();

//     console.log(val);
// }




var bts = document.querySelectorAll("ul li .btn");

// console.log(bts);
var text = document.getElementById("textarea");

bts.forEach(element => {
    element.addEventListener('click',function(){
        // console.log(element);
        // console.log()
        // console.log(element.getAttribute("id"));
        text.classList.add(element.getAttribute("id"));
    })
});



document.getElementById("color").onchange=function(){

    // console.log(document.getElementById("color").value);
    
    text.style.color = document.getElementById("color").value;
    
}



document.getElementById("number").onchange=function(){
    text.style.fontSize = document.getElementById("number").value + 'px';
}

