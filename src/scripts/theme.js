const theme = window.theme || {};
window.theme = theme;

document.addEventListener('DOMContentLoaded', (event) => {
  console.log('Theme:', theme);
});