//
// Необходимо получить данные с сервера по урлу https://trevadim.github.io/vue/data/data.json , и отобразить информацию о планетах.
//
// Необходимо отобразить кнопку и по нажатию на нее делать запрос на сервер для получения данных.
// После того как данные получены, кнопку скрыть и отобразить контент который содержится в свойстве planets
// Сделайте по возможности красиво

const myBtn = document.createElement('button');
const container = document.createElement("div");
myBtn.innerHTML = "Get Planets";
myBtn.style.width = "200px";
myBtn.style.height = "100px";
myBtn.style.borderRadius = "7px";
myBtn.style.backgroundColor = "#ccfff5";
myBtn.style.textAlign = 'center';
myBtn.style.color = '#004d4d';
myBtn.style.fontSize = '20px';
myBtn.style.fontFamily = ' sans-serif';
myBtn.style.fontWeight = 'bold';
container.style.textAlign = 'center';
document.body.appendChild(container);
container.appendChild(myBtn);

myBtn.addEventListener("click", e => {
    myBtn.hidden=true;
    const body = document.querySelector('body');
    const myFetch = fetch('https://trevadim.github.io/vue/data/data.json');

    myFetch.then(response => response.json())
        .then(({planets}) => {
            let count = 0;
            for (planet in planets) {
                body.innerHTML += `<div 
                class="section-${count}" 
                style="width: 100%; text-align: center; vertical-align: center; margin: 0 10px 20px;"
                ></div>`;
                body.style.background = '#ccfff5'
                createHeader(planets[planet], `.section-${count}`);
                createImg(planets[planet], `.section-${count}`);
                createInfo(planets[planet], `.section-${count}`);
            }
        })
        .catch(error => console.log(error));

    function createHeader({title}, elem) {
        body.querySelector(elem).innerHTML +=
            `<header 
            style="text-align: center; margin:40px 0 40px 0; font-size: 40px; font-weight: 800; color: #414a4c;"
        >${title}</header>`;
    }

    function createInfo({info}, elem) {
        let infoHTML = info.map(paragraph =>
            `<p 
            style="font-size: 20px;font-weight: 500; width: 75%; text-align: center; margin: 0 auto;line-height: 1.5"
            >${paragraph}</p>`);
        body.querySelector(elem).innerHTML += infoHTML.join('');
    }

    function createImg({url, title}, elem) {
        body.querySelector(elem).innerHTML +=
            `<img 
            src="${url}" 
            alt="${title}" 
            style="text-align: center; width: 75%; height: auto; border-radius: 20px;margin-bottom: 40px;"
        >`;
    }
})


