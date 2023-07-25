import { statesBrazil } from '@/database/statesBrazil'
import { IStateDTO } from '@/dtos/IStateDTO'

export function getStateByQuery(query: string): IStateDTO | undefined {
  const state = statesBrazil.find((state) => state.state.includes(query))

  return state
}
