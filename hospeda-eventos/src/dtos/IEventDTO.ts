export interface IEventDTO {
  id: string
  name: string
  dateInitial: string
  hourInitial: string
  privacy: string
  Address: [
    {
      city: string
      state: string
    },
  ]
}
