import { validateEmail } from "../helper";
import Errors from "../../constants/errors";

describe("Email validation tests", () => {
  test("Empty email is flagged with empty email error", () => {
    const emptyEmail = "";

    const result = validateEmail(emptyEmail);

    expect(result).toBe(Errors.EMPTY_EMAIL);
  });

  test("Invalid emails are flagged with invalid email error", () => {
    const invalidEmail1 = "3dsjs@email.com";
    const invalidEmail2 = "email.com";
    const invalidEmail3 = "dsjs@email.";
    const invalidEmail4 = "dsjs";
    const invalidEmail5 = "@email.com";
    const invalidEmail6 = "name @email.com";

    expect(validateEmail(invalidEmail1)).toBe(Errors.INVALID_EMAIL);
    expect(validateEmail(invalidEmail2)).toBe(Errors.INVALID_EMAIL);
    expect(validateEmail(invalidEmail3)).toBe(Errors.INVALID_EMAIL);
    expect(validateEmail(invalidEmail4)).toBe(Errors.INVALID_EMAIL);
    expect(validateEmail(invalidEmail5)).toBe(Errors.INVALID_EMAIL);
    expect(validateEmail(invalidEmail6)).toBe(Errors.INVALID_EMAIL);
  });

  test("Correct emails are flagged without errors", () => {
    const correctEmail = "dan@email.com";

    const result = validateEmail(correctEmail);

    expect(result).toBe(Errors.NO_ERROR);
  });
});
