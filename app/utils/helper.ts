import Errors from '~/constants/errors';

export function validateEmail(email: string): string {
  if (!email) {
    return Errors.EMPTY_EMAIL;
  }

  const pattern = /^[a-zA-Z][^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!pattern.test(email)) {
    return Errors.INVALID_EMAIL;
  }

  return Errors.NO_ERROR;
}

export const showActiveIcon = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
  const formerActiveIcon = document.querySelector('.active_icon');

  formerActiveIcon?.classList.remove('active_icon');
  formerActiveIcon?.classList.add('icon');

  const iconId = event.currentTarget.id;
  const iconButton = document.getElementById(iconId)?.firstElementChild;

  iconButton?.classList.add('active_icon');
  iconButton?.classList.remove('icon');

  console.log(iconButton);
};

export const removeActiveIcon = () => {
  const formerActiveIcon = document.querySelector('.active_icon');

  formerActiveIcon?.classList.remove('active_icon');
  formerActiveIcon?.classList.add('icon');
};
