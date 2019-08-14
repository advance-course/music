import axios from 'axios';
import { HOST } from 'utils/host';

/** 每一项的具体内容 */
export interface Banner {
  adDispatchJson?: any
  adLocation?: any
  adSource?: any
  adid?: any
  adurlV2?: any
  alg?: any
  bannerId?: string
  encodeId?: string
  event?: any
  exclusive?: boolean
  extMonitor?: any
  extMonitorInfo?: any
  monitorBlackList?: any
  monitorClick?: any
  monitorClickList?: any[]
  monitorImpress?: any
  monitorImpressList?: any[]
  monitorType?: any
  pic?: string,
  pid?: any
  program?: any
  requestId?: string
  scm?: string
  showAdTag?: boolean
  showContext?: any
  song?: any
  targetId?: number,
  targetType?: number
  titleColor?: string
  typeTitle?: string
  url?: string
  video?: any
}

interface Response extends http.ServerResponse {
  banners: Array<Banner>
}

/** 获取banner轮播图数据 */
export function bannerApi(): Promise<Response> {
  return axios.get(`${HOST}/banner`, {
    params: {
      type: 2
    }
  })
}