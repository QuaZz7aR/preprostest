function mod(left, right){
    if(left >= 0 && right > 0) return left % right;
    else return (left%right) + right;
}

document.getElementById("right__arrow").addEventListener("click", () => {
    let radio = document.querySelectorAll(".slides [type=radio]");
    let index = [...radio].findIndex(r => r.checked);
    radio[mod(index + 1, radio.length)].checked = true;
    updateSelect();
})

document.getElementById("left__arrow").addEventListener("click", () => {
    let radio = document.querySelectorAll(".slides [type=radio]");
    let index = [...radio].findIndex(r => r.checked);
    radio[mod(index - 1, radio.length)].checked = true;
    updateSelect();
})

function updateSelect(indexCheck){

    if(indexCheck === undefined){
        indexCheck = Array.from(document.querySelectorAll(".slides [type=radio]")).findIndex(r => r.checked);
    }
    let images = document.querySelectorAll(".slider__nav img");
    for(let i = 0; i < images.length; ++i){
        if(i === indexCheck){
            images[i].style.opacity = 1;
        }
        else{
            images[i].style.opacity = 0.6;
        }
    }
}

let collection = document.querySelectorAll(".bar img");
collection.forEach(element => {
    element.addEventListener("click", () => {
        updateSelect([...collection].indexOf(element));
    })
});

updateSelect();