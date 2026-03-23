// Basic Portfolio Interaction Script

function toggleTheme() {
  document.body.classList.toggle('dark-theme');
}

function showAlert() {
  const message = 'Nice to meet you! This site is under construction.';
  const alertArea = document.getElementById('alert-area');
  if (alertArea) {
    alertArea.textContent = message;
    alertArea.classList.add('visible');
    setTimeout(() => {
      alertArea.classList.remove('visible');
      alertArea.textContent = '';
    }, 3500);
  }
}

window.addEventListener('DOMContentLoaded', () => {
  const actionBtn = document.getElementById('action-btn');
  if (actionBtn) {
    actionBtn.addEventListener('click', showAlert);
  }

  const themeBtn = document.getElementById('theme-btn');
  if (themeBtn) {
    themeBtn.addEventListener('click', toggleTheme);
  }
});
