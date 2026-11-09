const businessLink = document.querySelector('.header nav a[href="#business"]');
const companyLink = document.querySelector('.header nav a[href="#company"]');
const company = document.getElementById('company');

function updateCurrentSection() {
  const isCompany = company.getBoundingClientRect().top <= window.innerHeight * 0.38;
  const activeLink = isCompany ? companyLink : businessLink;
  const inactiveLink = isCompany ? businessLink : companyLink;
  if (activeLink.hasAttribute('aria-current')) return;
  inactiveLink.removeAttribute('aria-current');
  activeLink.setAttribute('aria-current', 'location');
}

window.addEventListener('scroll', updateCurrentSection, { passive: true });
window.addEventListener('resize', updateCurrentSection);
window.addEventListener('pageshow', updateCurrentSection);
updateCurrentSection();
