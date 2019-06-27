var mapLink = document.querySelector(".map-crop");

var mapPopup = document.querySelector(".modal-map");
var mapClose = mapPopup.querySelector(".modal-close");

mapLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.add("modal-show");
});

mapClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (mapPopup.classList.contains("modal-show")) {
      mapPopup.classList.remove("modal-show");
    }

    if (writeUsPopup.classList.contains("modal-show")) {
      writeUsPopup.classList.remove("modal-show");
      writeUsPopup.classList.remove("modal-error");
    }
  }
  if (evt.keyCode === 13) {
    evt.preventDefault();
    if (!mapPopup.classList.contains("modal-show")) {
      mapPopup.classList.add("modal-show");
    }
  }
});

var writeUsLink = document.querySelector(".write-us-button");

var writeUsPopup = document.querySelector(".modal-write-us");
var writeUsClose = writeUsPopup.querySelector(".modal-close");

var writeUsForm = writeUsPopup.querySelector("form");
var writeUsName = writeUsPopup.querySelector("[name=name]");
var writeUsEmail = writeUsPopup.querySelector("[name=email]");
var writeUsText = writeUsPopup.querySelector("[name=text]");

writeUsLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  writeUsPopup.classList.add("modal-show");
  writeUsName.focus();
});

writeUsClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  writeUsPopup.classList.remove("modal-show");
  writeUsPopup.classList.remove("modal-error");
});

writeUsForm.addEventListener("submit", function (evt) {
  if (!writeUsName.value || !writeUsEmail.value || !writeUsText.value) {
    evt.preventDefault();
    writeUsPopup.classList.add("modal-error");
    console.log("Нужно заполнить все поля");
  }
});
