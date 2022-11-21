let btn = document.getElementById("btn-circle");
let container = document.createElement("div");
let arrCircle = ["red", "blue", "green", "yellow", "grey", "violet", "black", "brown"];

btn.onclick = function () {
    let diameter = document.createElement("input");
    diameter.type = "text";
    diameter.value = "";
    diameter.placeholder = "Введіть діаметр кола в px:";
    diameter.classList = "diameter";


    let draw = document.createElement("button");
    draw.type = "button";
    draw.innerHTML = "Натисність"
    draw.classList = "draw";

    btn.replaceWith(diameter, draw);

    draw.onclick = function () {
        container.innerHTML = "";
        container.style.width = (diameter.value * 10) + "px";
        container.style.display = "flex";
        container.style.flexWrap = "wrap";
        for (let i = 0; i < 100; i++) {
            let circle = document.createElement("div");
            circle.onclick = function () {
                this.remove();
            }
            circle.style.width = diameter.value + "px";
            circle.style.height = diameter.value + "px";
            circle.style.borderRadius = diameter.value + "px";
            circle.style.backgroundColor = arrCircle[Math.floor(Math.random() * arrCircle.length)];
            container.appendChild(circle);
        }
        let body = document.getElementsByTagName("body")[0];
        body.appendChild(container);
    }
}




