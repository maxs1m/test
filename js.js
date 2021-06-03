let langBtns = document.querySelectorAll('.lang__btn');
let mapBtn = document.querySelector('.map__btn')
let map = document.querySelector('.map')

for (let langBtn of langBtns) {
	langBtn.onclick = function() {
		for (let btn of langBtns) {
			btn.classList.remove('btn_active')
		}
		langBtn.classList.add('btn_active')
	}
}


ymaps.ready(init); // Ожидание загрузки API с сервера Яндекса
function init () {
  let myMap
  mapBtn.onclick = function() {
  	if (map.classList.contains('hidden')) {
  		map.classList.remove('hidden')
  		myMap = new ymaps.Map("map", {
		    center: [50.393820, 30.489800], // Координаты центра карты
		    zoom: 10,  // Zoom
			});
			var myPlacemark = new ymaps.Placemark([50.393820, 30.489800]);
			myMap.geoObjects.add(myPlacemark);
		} else {
			map.classList.add('hidden');
	    myMap.destroy()
	    myMap = null
		}
  }

  window.addEventListener('click', function (e) {
	  if (!map.contains(e.target) && !map.classList.contains('hidden') && !mapBtn.contains(e.target)) {
	    map.classList.add('hidden');
	    myMap.destroy()
	    myMap = null
	  }
	});
}


let carousel = document.querySelector('.lic__slider')


/* конфигурация */
let width = 5.43; // ширина картинки
let count = 3; // видимое количество изображений

let list = carousel.querySelector('ul');
let listElems = carousel.querySelectorAll('li');

let position = 0; // положение ленты прокрутки

carousel.querySelector('.prev').onclick = function() {
  // сдвиг влево
  position += width * count;
  // последнее передвижение влево может быть не на 3, а на 2 или 1 элемент
  position = Math.min(position, 0)
  list.style.marginLeft = position + 'vw';
};

carousel.querySelector('.next').onclick = function() {
  // сдвиг вправо
  position -= width * count;
  // последнее передвижение вправо может быть не на 3, а на 2 или 1 элемент
  position = Math.max(position, -width * (listElems.length - count));
  list.style.marginLeft = position + 'vw';
};


let licImgs =document.querySelectorAll('.lic__item')

for (let licImg of licImgs) {
	licImg.onclick = function() {
		let body = document.querySelector('.body')
		let div = document.createElement('div');
  	div.className = "overplay";
  	div.innerHTML = '<img src="'+licImg.src+'" class="overplay_img"}>';
  	document.body.append(div)
	}
}

window.addEventListener('click', function (e) {
  if (document.querySelector('.overplay') && !document.querySelector('.overplay').contains(e.target) && !e.target.classList.contains('lic__item')) {
    document.querySelector('.overplay').remove()
  }
})

let nav = document.querySelector('.nav')
let burger = document.querySelector('.close');
let spanFirst = document.querySelector('.close span:nth-child(1)');
let spanMid = document.querySelector('.close span:nth-child(2)');
let spanLast = document.querySelector('.close span:nth-child(3)');

burger.onclick = function() {
  navigation()
};

function navigation() {
	nav.classList.toggle('visible_nav');
  spanFirst.classList.toggle('first');
  spanMid.classList.toggle('mid');
  spanLast.classList.toggle('last');
}