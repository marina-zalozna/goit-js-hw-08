import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
  input: document.querySelector('.feedback-form input'),
  textarea: document.querySelector('.feedback-form textarea'),
};

refs.form.addEventListener('input', throttle(input, 500));
refs.form.addEventListener('submit', onSubmit);

fillInputs();

function input() {
  const data = {
    email: refs.input.value,
    message: refs.textarea.value,
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(data));
}

function onSubmit(e) {
  e.preventDefault();
  console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
  e.currentTarget.reset();
  localStorage.removeItem('feedback-form-state');
}

function fillInputs() {
  const savedInfo = localStorage.getItem('feedback-form-state');

  if (savedInfo) {
    refs.input.value = JSON.parse(savedInfo).email;
    refs.textarea.value = JSON.parse(savedInfo).message;
  }
}
