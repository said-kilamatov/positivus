document.addEventListener("DOMContentLoaded", function () {
  ymaps.ready(init);
});

const center = [46.092596874063766, -64.77255111945324];
const Offices = [
  [46.098803846935375, -64.76293368735625],
  [46.085011074508444, -64.78670500000001],
];

function init() {
  const map = new ymaps.Map("map", {
    center: center,
    zoom: 14,
  });

  // Добавляем метки для всех офисов
  Offices.forEach((coords) => {
    const placemark = new ymaps.Placemark(
      coords,
      {},
      {
        iconLayout: "default#image",
        iconImageHref: "../../positivus/images/map-icons/map-icon.svg",
        iconImageSize: [50, 50],
        iconImageOffset: [-20, -50],
      }
    );
    map.geoObjects.add(placemark);
  });

  // Удаляем ненужные элементы управления
  map.controls.remove("searchControl"); // удаляем поиск
  map.controls.remove("geolocationControl"); // удаляем геолокацию
  map.controls.remove("trafficControl"); // удаляем контроль трафика
  map.controls.remove("typeSelector"); // удаляем тип
  map.controls.remove("fullscreenControl"); // удаляем кнопку перехода в полноэкранный режим
  map.controls.remove("zoomControl"); // удаляем контроль зуммирования
  map.controls.remove("rulerControl"); // удаляем контроль правил
}
