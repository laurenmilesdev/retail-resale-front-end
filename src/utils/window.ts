export function openCloseMenu() {
  const startMenu = document.getElementById('start-menu');

  if (startMenu) {
    const visible = startMenu.checkVisibility();

    if (visible) startMenu.style.display = 'none';
    else startMenu.style.display = 'block';
  }
}
