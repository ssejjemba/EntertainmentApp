import Errors from "~/constants/errors";

export function validateEmail(email: any): string {
  if (!email) {
    return Errors.EMPTY_EMAIL;
  }

  const pattern = /^[a-zA-Z][^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!pattern.test(email)) {
    return Errors.INVALID_EMAIL;
  }

  return Errors.NO_ERROR;
}
