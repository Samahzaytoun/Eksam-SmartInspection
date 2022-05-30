const contactForm = document.getElementById('contact-form');
const nameEl = document.getElementById('name');
const emailEl = document.getElementById('email');
const subjectEl = document.getElementById('subject');
const messageEl = document.getElementById('message');
let errorDiv = document.getElementById('errors');

contactForm.addEventListener('submit', e => {
  e.preventDefault();
  handleForm();
});

function validateEmail(email) {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
}

function handleForm(e) {
  let errors = [];

  
  if (!nameEl.value) errors.push('Name is required');
  if (nameEl.value && nameEl.value.length < 5) errors.push('Name must be at least 5 characters');


  if (!emailEl.value) errors.push('Email is required');
  if (emailEl.value && !validateEmail(emailEl.value)) errors.push('Email is invalid');

  if (!subjectEl.value) errors.push('Subject is required');
  if (subjectEl.value && subjectEl.value.length < 4) errors.push('Subject must be at least 4 characters');

  if (!messageEl.value) errors.push('Message is required');
  if (messageEl.value && messageEl.value.length < 25) errors.push('Message must be at least 25 characters');

  if (errors.length) {
    errorDiv.innerHTML = '';
    errorDiv.className = 'show';

    errors.forEach(error => {
      let eEl = document.createElement('li');
      eEl.classList.add('error');
      eEl.innerHTML = error;
      errorDiv.appendChild(eEl);
    });
  } else {

    nameEl.value = '';
    emailEl.value = '';
    subjectEl.value = '';
    messageEl.value = '';

    errorDiv.innerHTML = '';
    errorDiv.className = 'show';
    let sEl = document.createElement('div');
    sEl.classList.add('success');
    sEl.innerHTML = 'Thanks we will get back to you asap';
    errorDiv.appendChild(sEl);

    //hide suucess meesage
    setTimeout(() => {
      document.getElementById('errors').className = 'hide';
    }, 2000);
  }
}
