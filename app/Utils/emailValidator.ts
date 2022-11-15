export function emailValidator(e: React.FocusEvent<HTMLInputElement>) {
  const inputElement = document.getElementById('email') as HTMLInputElement | null;
  const emailValue: string = inputElement?.value !== undefined ? inputElement?.value : '';
  const message: any = document.querySelector('#email');

  if (emailValue === '') {
    message.placeholder = 'cant be empty';
    inputElement?.classList.add('placeholderred');
  }
}

export function handleSubmit(e: React.KeyboardEvent<HTMLInputElement>) {
  const pattern: RegExp = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  const inputElement = document.getElementById('email') as HTMLInputElement | null;
  const emailValue: string = inputElement?.value !== undefined ? inputElement?.value : '';
  const emailStatus: any = document.querySelector('.text-message');

  let key = e.key;

  if (key === 'Enter') {
    if (pattern.test(emailValue) === false) {
      inputElement?.classList.add('wrong_email');
      emailStatus.innerHTML = 'Invalid Email Address';
    } else if (pattern.test(emailValue) === true) {
      emailStatus.innerHTML = '';
    }
  }
}
