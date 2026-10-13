// Egyptian mobile numbers: 01X XXXX XXXX, where X after 01 is 0, 1, 2 or 5.
// TODO: confirm the accepted formats with the backend.
const EGYPT_MOBILE = /^1[0125]\d{8}$/

/**
 * Normalizes an Egyptian mobile number typed with or without the leading 0
 * (spaces, dashes and a +20 / 0020 prefix are allowed) to E.164, such as +201012345678.
 * Returns null when the number is not valid.
 */
export function toEgyptE164(input: string): string | null {
  let digits = input.replace(/[\s\-().]/g, '')
  if (digits.startsWith('+20')) digits = digits.slice(3)
  else if (digits.startsWith('0020')) digits = digits.slice(4)
  if (digits.startsWith('0')) digits = digits.slice(1)
  return EGYPT_MOBILE.test(digits) ? `+20${digits}` : null
}
