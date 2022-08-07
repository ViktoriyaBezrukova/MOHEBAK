function init() {
	let map = new ymaps.Map('map-test', {
		center:[52.19485835337817,53.94843595772506],
		zoom:5
	});

	let placemark = new ymaps.Placemark([48.500644573895386,44.57983050000001], {
		balloonContentHeader: 'Волгоград',
		// balloonContentBody: 'Боди балуна',
		// balloonContentFooter: 'Подвал',
	}, {
		iconLayout: 'default#image',
		iconImageHref: 'img/ymap/mark.svg',
		iconImageSize: [36, 40],
		iconImageOffset: [-15, -70]
	});
	 let placemark1 = new ymaps.Placemark([55.726401069020426,37.65203149999995], {
		balloonContentHeader: 'Москва',
	}, {
		iconLayout: 'default#image',
		iconImageHref: 'img/ymap/mark.svg',
		iconImageSize: [36, 40],
		iconImageOffset: [0, -40]
	});
	let placemark2 = new ymaps.Placemark([45.040928574583894,38.98296649999998], {
		balloonContentHeader: 'Краснодар',
	}, {
		iconLayout: 'default#image',
		iconImageHref: 'img/ymap/mark.svg',
		iconImageSize: [36, 40],
		iconImageOffset: [0, -40]
	});
	let placemark3 = new ymaps.Placemark([51.586542572358674,45.96639799999997], {
		balloonContentHeader: 'Саратов',
	}, {
		iconLayout: 'default#image',
		iconImageHref: 'img/ymap/mark.svg',
		iconImageSize: [36, 40],
		iconImageOffset: [0, -40]
	});
	let placemark4 = new ymaps.Placemark([51.6714385722938,39.20326949999999], {
		balloonContentHeader: 'Воронеж',
	}, {
		iconLayout: 'default#image',
		iconImageHref: 'img/ymap/mark.svg',
		iconImageSize: [36, 40],
		iconImageOffset: [0, -40]
	});
	let placemark5 = new ymaps.Placemark([40.15375852532393,44.491566499999976], {
		balloonContentHeader: 'Ереван',
	}, {
		iconLayout: 'default#image',
		iconImageHref: 'img/ymap/mark.svg',
		iconImageSize: [36, 40],
		iconImageOffset: [0, -40]
	});
	let placemark6 = new ymaps.Placemark([55.02265456967442,82.97574800000001], {
		balloonContentHeader: 'Новосибирск',
	}, {
		iconLayout: 'default#image',
		iconImageHref: 'img/ymap/mark.svg',
		iconImageSize: [36, 40],
		iconImageOffset: [0, -40]
	});


	map.controls.remove('geolocationControl'); // удаляем геолокацию
	map.controls.remove('searchControl'); // удаляем поиск
	map.controls.remove('trafficControl'); // удаляем контроль трафика
	map.controls.remove('typeSelector'); // удаляем тип
	map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
	// map.controls.remove('zoomControl'); // удаляем контрол зуммирования
	map.controls.remove('rulerControl'); // удаляем контрол правил
	map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)

map.geoObjects.add(placemark); 
map.geoObjects.add(placemark1);
map.geoObjects.add(placemark2);
map.geoObjects.add(placemark3); 
map.geoObjects.add(placemark4);
map.geoObjects.add(placemark5);
map.geoObjects.add(placemark6);
}



ymaps.ready(init);
