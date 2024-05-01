function mod(left, right){
    if(left >= 0 && right > 0) return left % right;
    else return (left%right) + right;
}

document.getElementById("clients__arrow-left").addEventListener("click", () => {
    let radio = document.querySelectorAll(".clients__slides [type=radio]");
    let index = [...radio].findIndex(r => r.checked);
    radio[mod(index - 1, radio.length)].checked = true;
})

document.getElementById("clients__arrow-right").addEventListener("click", () => {
    let radio = document.querySelectorAll(".clients__slides [type=radio]");
    let index = [...radio].findIndex(r => r.checked);
    radio[mod(index + 1, radio.length)].checked = true;
})