let btn = document.getElementById("btn-circle");
let diameter;
let container = document.createElement("div");
let arrCircle = ["red", "blue", "green", "yellow", "grey", "violet", "black", "brown"];
btn.onclick = function () {
    diameter = parseInt(prompt("Введіть діаметр кола в px: "));
    container.innerHTML = "";
    container.style.width = (diameter * 10) + "px";
    container.style.display = "flex";
    container.style.flexWrap = "wrap";
    for (let i = 0; i < 100; i++) {
        let circle = document.createElement("div");
        circle.onclick = function(){
            circle.remove();
        }
        circle.style.width = diameter + "px";
        circle.style.height = diameter + "px";
        circle.style.borderRadius = diameter + "px";
        circle.style.backgroundColor = arrCircle[Math.floor(Math.random() * arrCircle.length)];
        container.appendChild(circle);
    }
    let body = document.getElementsByTagName("body")[0];
    body.appendChild(container);   
}





