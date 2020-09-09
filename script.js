const c = (el) => document.querySelector(el);
const cs = (el) => document.querySelectorAll(el);
let modalQt = 1;

//Listagem das peças
joiasJson.map((item, index) => {
    let joiaItem = c(".models .joia-item").cloneNode(true);
    joiaItem.setAttribute("data-key", index);
    joiaItem.querySelector(".joia-item--name").innerHTML = item.name;
    joiaItem.querySelector(
        ".joia-item--price"
    ).innerHTML = `R$ ${item.price.toFixed(2)}`;
    joiaItem.querySelector(".joia-item--desc").innerHTML = item.description;
    joiaItem.querySelector(".joia-item--img img").src = item.img;
    joiaItem.querySelector("a").addEventListener("click", (e) => {
        e.preventDefault();
        let key = e.target.closest(".joia-item").getAttribute("data-key");
        modalQt = 1;

        c(".joiaBig img").src = joiasJson[key].img;
        c(".joiaInfo h1").innerHTML = joiasJson[key].name;
        c(".joiaInfo--desc").innerHTML = joiasJson[key].description;
        c(".joiaInfo--actualPrice").innerHTML = joiasJson[key].price.toFixed(2);
        c(".joiaInfo--qt").innerHTML = modalQt;
        c(".joiaWindowArea").style.opacity = 0;
        c(".joiaWindowArea").style.display = "flex";
        setTimeout(() => {
            c(".joiaWindowArea").style.opacity = 1;
        }, 250);
    });

    c(".joia-area").append(joiaItem);
});

// Eventos Do Modal
function closeModal() {
    c(".joiaWindowArea").style.opacity = 0;
    setTimeout(() => {
        c(".joiaWindowArea").style.display = "none";
    }, 500);
}
cs(".joiaInfo--cancelButton, .joiaInfo--cancelMobileButton").forEach((item) => {
    item.addEventListener("click", closeModal);
});
c(".joiaInfo--qtmenos").addEventListener("click", () => {
    if (modalQt > 1) {
        modalQt--;
        c(".joiaInfo--qt").innerHTML = modalQt;
    }
});
c(".joiaInfo--qtmais").addEventListener("click", () => {
    modalQt++;
    c(".joiaInfo--qt").innerHTML = modalQt;
});
