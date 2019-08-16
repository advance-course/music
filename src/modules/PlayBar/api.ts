import axios from 'axios';
import { HOST } from 'utils/host';

export interface MusicInfo {
  br?: number
  canExtend?: boolean
  code?: number
  encodeType?: string
  expi?: number
  fee?: number
  flag?: number
  freeTrialInfo?: any
  gain?: number
  id?: number
  level?: string
  md5?: string
  payed?: number
  size?: number
  type?: string
  uf?: null
  url?: string
}

export interface Response extends http.ServerResponse {
  data: MusicInfo[]
}

export function musicInfoApi(id: number): Promise<Response> {
  return axios.get(`${HOST}/song/url`, {
    params: {
      id
    }
  })
}