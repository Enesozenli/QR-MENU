import { buttonData } from "./constant.js";
const buttonArea = document.getElementById('buttons');

// ekrana menü elemanlarınu basar
export function renderMenuItems(menuItems, menuList) {

    // dizideki her bir eleman için bir menü html i oluşturup
    // bunu ekrana basar

    menuList.innerHTML = menuItems
    .map((item) => `
    <a id= "card" href="/detail.html?id=${item.id}" class="d-flex flex-column flex-md-row text-decoration-none text-dark gap-3">
    <img class="rounded shadow img-fluid" src="${item.img}" />
    <div>
        <div class="d-flex justify-content-between">
            <h5>${item.title}</h5>
            <p class="text-success fw-bold">${(item.price*30).toFixed(2)}₺</p>
        </div>
        <p class="lead">${item.desc.slice(0, 80) + '...'}</p>
    </div>
</a>
    `
    )
    .join(' ')
    
}

// ekrana butonları basar
export function renderButtons(active){
    // eski eklenen butonları HTML'den temizle
    buttonArea.innerHTML = '';
    // yeni butonları oluşturma
    buttonData.forEach((btn) => {
        // button elementi oluşturma
        const buttonEle = document.createElement('button');
        // class belirleme
        buttonEle.className = 'btn btn-outline-dark';

        // data-id belirlerleme
        buttonEle.dataset.category = btn.value;

        //  eğer eleman aktifse bu class ı ver
        if(btn.text === active){
            buttonEle.classList.add('btn-dark', 'text-white');
        }


        // içindeki yazıyı belirleme
        buttonEle.innerText = btn.text;
        // buttonu html'e gönderme
        buttonArea.appendChild(buttonEle);
    });
}
