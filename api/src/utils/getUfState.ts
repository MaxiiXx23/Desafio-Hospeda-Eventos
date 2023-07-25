import { statesBrazil } from '@/database/statesBrazil'
import { IStateDTO } from '@/dtos/IStateDTO'

export function getUfState(uf: string): IStateDTO | undefined {
  const ufState = statesBrazil.find((state) => state.uf === uf)

  return ufState
}
