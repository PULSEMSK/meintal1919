const infoDialog = document.querySelector('#information-dialog');
const navDialog = document.querySelector('#navigation-dialog');
const panelTitles = { tickets: 'Билеты', accreditation: 'Аккредитация', collection: 'Коллекция MEIN TAL 1919' };
document.querySelectorAll('[data-panel]').forEach(button => {
  button.addEventListener('click', () => {
    if (navDialog.open) navDialog.close();
    document.querySelector('#information-title').textContent = panelTitles[button.dataset.panel];
    document.querySelector('#information-description').textContent = 'Информация скоро появится.';
    infoDialog.showModal();
  });
});
document.querySelector('#mobile-menu-toggle').addEventListener('click', () => navDialog.showModal());
document.querySelectorAll('[data-close]').forEach(button => button.addEventListener('click', () => button.closest('dialog').close()));
document.querySelectorAll('[data-nav-close]').forEach(link => link.addEventListener('click', () => navDialog.close()));
for (const dialog of [infoDialog, navDialog]) {
  dialog.addEventListener('click', event => {
    if (event.target !== dialog) return;
    const { left, top, right, bottom } = dialog.getBoundingClientRect();
    if (event.clientX < left || event.clientX > right || event.clientY < top || event.clientY > bottom) dialog.close();
  });
}
