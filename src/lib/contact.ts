export interface ContactPayload {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
}

export interface ContactValidationResult {
  data: ContactPayload | null;
  errors: string[];
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function normalizeField(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

export function validateContactPayload(payload: unknown): ContactValidationResult {
  if (!payload || typeof payload !== "object") {
    return {
      data: null,
      errors: ["Invalid contact payload."],
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

  const errors: string[] = [];

  if (data.firstName.length < 2) {
    errors.push("First name must be at least 2 characters long.");
  }

  if (data.lastName.length < 2) {
    errors.push("Last name must be at least 2 characters long.");
  }

  if (!EMAIL_PATTERN.test(data.email)) {
    errors.push("Please provide a valid email address.");
  }

  if (data.subject.length < 4) {
    errors.push("Subject must be at least 4 characters long.");
  }

  if (data.message.length < 20) {
    errors.push("Message must be at least 20 characters long.");
  }

  return {
    data: errors.length === 0 ? data : null,
    errors,
  };
}
