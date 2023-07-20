import WindowModel from '@/models/window';

function removeWindowsBoxShadowClass(button: HTMLElement) {
  button.classList.remove('windows-box-shadow');
  button.classList.add('inverse-windows-box-shadow');
}

function removeInverseWindowsBoxShadowClass(button: HTMLElement) {
  button.classList.remove('inverse-windows-box-shadow');
  button.classList.add('windows-box-shadow');
}

export function openCloseMenu() {
  const startMenu = document.getElementById('start-menu');

  if (startMenu) {
    const visible = startMenu.checkVisibility();

    if (visible) startMenu.style.display = 'none';
    else startMenu.style.display = 'block';
  }
}

export function openCloseWindow(window: WindowModel, hideButton: boolean) {
  const currentWindow = document.getElementById(window.windowId);
  const currentButton = document.getElementById(window.buttonId);

  // if (pages) {
  //   pages.map((page) => {
  //     if (page.windowId !== currentPage.windowId) {
  //       const window = document.getElementById(page.windowId);

  //       if (window && window?.checkVisibility() && page.buttonId) {
  //         const button = document.getElementById(page.buttonId);

  //         if (button) removeInverseWindowsBoxShadowClass(button);
  //       }
  //     }
  //   });
  // }

  if (currentWindow && currentButton) {
    const visible = currentWindow.checkVisibility();

    if (visible) {
      currentWindow.style.display = 'none';

      if (hideButton) currentButton.style.display = 'none';
      else {
        removeInverseWindowsBoxShadowClass(currentButton);
      }
    } else {
      currentWindow.style.display = 'block';
      currentButton.style.display = 'block';
      removeWindowsBoxShadowClass(currentButton);
    }
  }
}

export function minimizeWindow(window?: WindowModel) {
  if (window) {
    const currentWindow = document.getElementById(window.windowId);
    const button = document.getElementById(window.buttonId);

    if (currentWindow && button) {
      const visible = currentWindow.checkVisibility();

      if (visible) {
        currentWindow.style.display = 'none';
        removeInverseWindowsBoxShadowClass(button);
      } else {
        currentWindow.style.display = 'block';
        removeWindowsBoxShadowClass(button);
      }
    }
  }
}
