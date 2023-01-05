var hideAll = function () {
  var contents = document.querySelectorAll(".tab-content>div");
  for (var i = 0; i < contents.length; i++) {
    contents[i].style.display = "none";
  }
};
document.body.onload = function () {
  hideAll();
  document.querySelector(".tab-content>div:first-child").style.display =
    "block";
  var tabs = document.querySelectorAll(".tab-menu>a");

  var tab01 = document.getElementById("tab_01");
  var tab02 = document.getElementById("tab_02");
  var tab03 = document.getElementById("tab_03");
  var tab04 = document.getElementById("tab_04");

  tab01.onclick = function () {
    tab01.classList.add("active");
    hideAll();
    var content = document.querySelector(".tab-content>.content-" + this.id);
    content.style.display = "block";
    if (tab02.classList.contains("active")) {
      tab02.classList.remove("active");
    }
    if (tab03.classList.contains("active")) {
      tab03.classList.remove("active");
    }
    if (tab04.classList.contains("active")) {
      tab04.classList.remove("active");
    }
  };
  tab02.onclick = function () {
    tab02.classList.add("active");
    hideAll();
    var content = document.querySelector(".tab-content>.content-" + this.id);
    content.style.display = "block";
    if (tab01.classList.contains("active")) {
      tab01.classList.remove("active");
    }
    if (tab03.classList.contains("active")) {
      tab03.classList.remove("active");
    }
    if (tab04.classList.contains("active")) {
      tab04.classList.remove("active");
    }
  };
  tab03.onclick = function () {
    tab03.classList.add("active");
    hideAll();
    var content = document.querySelector(".tab-content>.content-" + this.id);
    content.style.display = "block";
    if (tab01.classList.contains("active")) {
      tab01.classList.remove("active");
    }
    if (tab02.classList.contains("active")) {
      tab02.classList.remove("active");
    }
    if (tab04.classList.contains("active")) {
      tab04.classList.remove("active");
    }
  };
  tab04.onclick = function () {
    tab04.classList.add("active");
    hideAll();
    var content = document.querySelector(".tab-content>.content-" + this.id);
    content.style.display = "block";
    if (tab01.classList.contains("active")) {
      tab01.classList.remove("active");
    }
    if (tab02.classList.contains("active")) {
      tab02.classList.remove("active");
    }
    if (tab03.classList.contains("active")) {
      tab03.classList.remove("active");
    }
  };
};

const allHoverImages = document.querySelectorAll(".hover-container div img");
const imgContainer = document.querySelector(".img-container");

window.addEventListener("DOMContentLoaded", () => {
  allHoverImages[0].parentElement.classList.add("active");
});

allHoverImages.forEach((image) => {
  image.addEventListener("mouseover", () => {
    imgContainer.querySelector("img").src = image.src;
    resetActiveImg();
    image.parentElement.classList.add("active");
  });
});

function resetActiveImg() {
  allHoverImages.forEach((img) => {
    img.parentElement.classList.remove("active");
  });
}
var btnSearch = document.querySelector(".search-box__btn");

btnSearch.addEventListener("click", function () {
  this.parentElement.classList.toggle("active");
  this.previousElementSibling.focus();
});
