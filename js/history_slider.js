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
    let dates = document.querySelectorAll(".slider__nav li");
    for(let i = 0; i < dates.length; ++i){
        if(i === indexCheck){
            dates[i].style.color = "#FF5A30";
        }
        else{
            dates[i].style.color = "#9A9CA5";
        }
    }
}

let collection = document.querySelectorAll(".slider__nav li");
collection.forEach(element => {
    element.addEventListener("click", () => {
        updateSelect([...collection].indexOf(element));
    })
});

updateSelect();