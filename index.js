document.getElementById("btn-el1").addEventListener("click", function() {
    document.getElementById("metal1").play();
});

document.getElementById("btn-el2").addEventListener("click", function() {
    document.getElementById("metal2").play();
});

document.getElementById("btn-el3").addEventListener("click", function() {
    document.getElementById("ambient").play();
});


function stop() {
    document.getElementById("metal1").pause();
    document.getElementById("metal2").pause();
    document.getElementById("ambient").pause();
    alert("Metal can never truly be stopped!")
}

setTimeout(image, 10000)

  

function image() {
    document.getElementById("fire").style.visibility = "visible";
}

