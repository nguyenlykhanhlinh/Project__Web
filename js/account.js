getForm_login = document.querySelector(".form-login");
getForm_register = document.querySelector(".form-register");

getHeader_login = document.querySelector(".form-login__heading-login span");
getHeader_register = document.querySelector(
  ".form-login__heading-register span"
);

getHeader_login.onmouseover = function () {
  getHeader_login.style.color = "#cd9b33";
  getHeader_login.style.borderBottom = "2px solid #cd9b33";
  getHeader_register.style.borderBottom = "none";
  getHeader_register.style.color = "#333";
};

getHeader_register.onmouseover = function () {
  getHeader_register.style.color = "#cd9b33";
  getHeader_register.style.borderBottom = "2px solid #cd9b33";
  getHeader_login.style.borderBottom = "none";
  getHeader_login.style.color = "#333";
};

getHeader_login.onclick = function () {
  getForm_register.style.display = "none";
  getForm_login.style.display = "flex";
  getForm_login.style.flexDirection = "center";
};

getHeader_register.onclick = function () {
  getForm_login.style.display = "none";
  getForm_register.style.display = "flex";
  getForm_register.style.flexDirection = "center";
};
