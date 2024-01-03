export const sanitizeNumber = (val: string) => String(val).replace(/\D/g, "");

export function normalizeString(string: string) {
    return string.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase()
}