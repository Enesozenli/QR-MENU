

// url'deki arama parametlerini 
// yönetebilmek için yerleşik bir 
// js class'ı bulunuyor 
// URLSearchParams

const params = new URLSearchParams(location.search);

// js class'ının sağladığı get methodu ile parametreye erişme
const paramId = params.get('id');

document.addEventListener("DOMContentLoaded", async () => {
    // Api'den ürünleri alma
    const res = await fetch('../db.json');
    const data = await res.json();

    // url'deki id'ye denk gelen ürünü bulma
    const product = data.menu.find((i) => i.id === Number(paramId));

    renderPage(product)
});
// arayüzü göndereceğimiz div
const outlet = document.querySelector('#outlet');

// bütün arayüzü ekrana basar
function renderPage(product) {
    outlet.innerHTML = `
    <div class="d-flex justify-content-between fs-5">
    <a href="/">
        <img style="width: 40px" src="./images/home.png" >
    </a>
    <div>anasayfa / ${product.category} / ${product.title.toLowerCase()}</div>
</div>
<h1 class="text-center my-3 shadow rounded p-2">${product.title}</h1>

    <img src="${product.img}" class="rounded object-fit-cover shadow-lg" 
    style="max-height: 400px" />
   
        <h3 class="mt-4">
            Ürünün Kategorisi:
             <span class="text-success">${product.category}</span>
            </h3>
        <h3 class="my-2">
            Ürünün Fiyatı: 
            <span class="text-success">${(product.price * 30).toFixed(2)}₺</span>
        </h3>
    
    <p class="lead fs-3">
    ${product.desc}
    </p>
`
}

