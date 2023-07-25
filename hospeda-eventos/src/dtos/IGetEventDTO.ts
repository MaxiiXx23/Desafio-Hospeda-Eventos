export interface IGetEventDTO {
  id: string
  name: string
  description: string
  dateInitial: string
  hourInitial: string
  privacy: string
  Address: [
    {
      cep: string
      street: string
      number: number
      complement: string
      district: string
      city: string
      state: string
    },
  ]
}
