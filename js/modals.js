function toggleModal(id, event){
    event.stopPropagation();
    let sub = document.getElementById(id);

    if(sub.style.display === "flex"){
        sub.style.display = "none";
        let hid = document.querySelector("body");
        hid.style.overflow = "auto";
    }else{
        sub.style.display = "flex";
        let hid = document.querySelector("body");
        hid.style.overflow = "hidden";
    }
}

let collection = document.querySelectorAll(".apply__btn").forEach(element => {
    element.addEventListener("click", (event) => toggleModal("modal__cv", event))
})

document.getElementById("subscribe").addEventListener("click", (event) => toggleModal("modal__subscribe", event))

document.getElementById("send__cv").addEventListener("click", (event) => toggleModal("modal__cv", event))

document.getElementById("send__button-sub").addEventListener("click", (event) => toggleModal("modal__subscribe", event))

document.getElementById("send__button-cv").addEventListener("click", (event) => toggleModal("modal__cv", event))

document.getElementById("modal__cross-1").addEventListener("click", (event) => toggleModal("modal__subscribe", event))

document.getElementById("modal__cross-2").addEventListener("click", (event) => toggleModal("modal__cv", event))

document.getElementById("modal__subscribe").addEventListener("click", (event) => toggleModal("modal__subscribe", event))

document.getElementById("modal__cv").addEventListener("click", (event) => toggleModal("modal__cv", event))

