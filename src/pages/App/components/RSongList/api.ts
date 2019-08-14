import axios from 'axios';
import { HOST } from 'utils/host';

export interface ListItem {
  alg?: string,
  canDislike?: boolean
  copywriter?: string,
  highQuality?: boolean
  id?: number
  name?: string,
  picUrl?: string,
  playCount?: number,
  trackCount?: number
  type?: number
}

export interface Response extends http.ServerResponse {
  category?: number,
  hasTaste?: boolean,
  result?: ListItem[],
}

export function songListApi(): Promise<Response> {
  return axios.get(`${HOST}/personalized`);
}