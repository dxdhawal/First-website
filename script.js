const themeBtn = document.getElementById('theme-btn');
const body = document.body;
const messageArea = document.getElementById('message-area');

themeBtn.addEventListener('click', () => {
  body.classList.toggle('dark-mode');

  if (body.classList.contains('dark-mode')) {
    messageArea.innerText = "Dark Mode Active! 🌙";
  } else {
    messageArea.innerText = "Light Mode Active! ☀️";
  }
});