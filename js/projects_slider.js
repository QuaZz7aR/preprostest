function mod(left, right){
    if(left >= 0 && right > 0) return left % right;
    else return (left%right) + right;
}

document.getElementById("projects__right-arrow").addEventListener("click", () => {
    let radio = document.querySelectorAll(".projects__slides [type=radio]");
    let index = [...radio].findIndex(r => r.checked);
    radio[mod(index + 1, radio.length)].checked = true;
})

document.getElementById("projects__left-arrow").addEventListener("click", () => {
    let radio = document.querySelectorAll(".projects__slides [type=radio]");
    let index = [...radio].findIndex(r => r.checked);
    radio[mod(index - 1, radio.length)].checked = true;
})
