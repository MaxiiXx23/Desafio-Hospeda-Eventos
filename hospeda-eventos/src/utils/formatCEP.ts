export function formattedCEP(cep: string) {
  const cepFormatted = cep.replace(/[^0-9]/g, '')
  return cepFormatted
}
