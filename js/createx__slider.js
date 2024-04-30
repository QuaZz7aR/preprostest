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
    let spans = document.querySelectorAll(".slider__nav span");
    let bars = document.querySelectorAll(".slider__nav .bar");
    for(let i = 0; i < bars.length; ++i){
        if(i === indexCheck){
            spans[i].style.opacity = 1;
            bars[i].style.opacity = 1;
        }
        else{
            spans[i].style.opacity = 0.6;
            bars[i].style.opacity = 0.3;
        }
    }
}

let collection = document.querySelectorAll(".bar");
collection.forEach(element => {
    element.addEventListener("click", () => {
        updateSelect([...collection].indexOf(element));
    })
});

updateSelect();