import { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

export interface ContactPayload {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
}

export type ContactErrorCode =
  | "invalidPayload"
  | "firstNameMin"
  | "lastNameMin"
  | "invalidEmail"
  | "subjectMin"
  | "messageMin";

export interface ContactValidationResult {
  data: ContactPayload | null;
  errors: ContactErrorCode[];
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function normalizeField(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

export function validateContactPayload(payload: unknown): ContactValidationResult {
  if (!payload || typeof payload !== "object") {
    return {
      data: null,
      errors: ["invalidPayload"],
    };
  }

  const source = payload as Record<string, unknown>;
  const data: ContactPayload = {
    firstName: normalizeField(source.firstName),
    lastName: normalizeField(source.lastName),
    email: normalizeField(source.email).toLowerCase(),
    subject: normalizeField(source.subject),
    message: normalizeField(source.message),
  };

  const errors: ContactErrorCode[] = [];

  if (data.firstName.length < 2) {
    errors.push("firstNameMin");
  }

  if (data.lastName.length < 2) {
    errors.push("lastNameMin");
  }

  if (!EMAIL_PATTERN.test(data.email)) {
    errors.push("invalidEmail");
  }

  if (data.subject.length < 4) {
    errors.push("subjectMin");
  }

  if (data.message.length < 20) {
    errors.push("messageMin");
  }

  return {
    data: errors.length === 0 ? data : null,
    errors,
  };
}

export function getContactErrorMessage(errorCode: ContactErrorCode, locale: Locale) {
  const dictionary = getDictionary(locale);
  return dictionary.contact.validation[errorCode];
}
