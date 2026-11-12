const button = document.querySelector('.menu-button');
const navigation = document.querySelector('#navigation');
button.addEventListener('click', () => {
  const open = button.getAttribute('aria-expanded') === 'true';
  button.setAttribute('aria-expanded', String(!open));
  navigation.classList.toggle('open', !open);
});
navigation.addEventListener('click', (event) => {
  if (event.target.closest('a')) {
    navigation.classList.remove('open');
    button.setAttribute('aria-expanded', 'false');
  }
});
// Preserve links from the previous hash-routed portfolio.
const oldRoute = location.hash.match(/^#\/(home|education|experience|projects|contact)\/?$/);
if (oldRoute) {
  const sections = { home: 'top', education: 'about', experience: 'experience', projects: 'writing', contact: 'contact' };
  location.replace('#' + sections[oldRoute[1]]);
}
