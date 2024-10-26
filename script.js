document.getElementById("accept-btn").addEventListener("click", hideCookieMessage);
document.getElementById("decline-btn").addEventListener("click", hideCookieMessage);

function hideCookieMessage() {
  document.getElementById("cookie-message").style.display = "none";
}

