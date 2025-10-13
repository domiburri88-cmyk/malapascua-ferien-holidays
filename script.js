// Einfache Interaktionen: mobile Nav, Mailto-Fallback, Formularstatus
document.addEventListener('DOMContentLoaded', function () {
// Jahr im Footer
document.getElementById('year').textContent = new Date().getFullYear();


// mobile nav
const navToggle = document.getElementById('navToggle');
const mainNav = document.getElementById('main-nav');


navToggle.addEventListener('click', function () {
const expanded = this.getAttribute('aria-expanded') === 'true';
this.setAttribute('aria-expanded', String(!expanded));
mainNav.style.display = expanded ? '' : 'block';
});


// smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(a => {
a.addEventListener('click', function (e) {
const target = document.querySelector(this.getAttribute('href'));
if (target) {
e.preventDefault();
target.scrollIntoView({ behavior: 'smooth', block: 'start' });
if (window.innerWidth <= 700 && mainNav.style.display === 'block') {
mainNav.style.display = '';
navToggle.setAttribute('aria-expanded', 'false');
}
}
});
});


// Formularhandling
const form = document.getElementById('contactForm');
const status = document.getElementById('formStatus');
const mailtoBtn = document.getElementById('mailtoBtn');


mailtoBtn.addEventListener('click', () => {
const name = document.getElementById('name').value || ' ';
const email = document.getElementById('email').value || ' ';
const message = document.getElementById('message').value || ' ';
const subject = encodeURIComponent('Kontaktformular: ' + name);
const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
window.location.href = `mailto:tauchen@malapascua.com?subject=${subject}&body=${body}`;
});


form.addEventListener('submit', async (e) => {
status.textContent = 'Sende…';
const ok = form.checkValidity();
if (!ok) {
status.textContent = 'Bitte fülle alle Felder korrekt aus.';
return;
}
// Platzhalter: Simulierter Sendeprozess
setTimeout(()=> {
status.textContent = 'Deine Nachricht wurde gesendet. Danke!';