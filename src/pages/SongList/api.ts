import axios from 'axios';
import { HOST } from 'utils/host';

/** 创建者信息 */
interface Creator {
  accountStatus?: number
  authStatus?: number
  authority?: number
  avatarImgId?: number
  avatarImgIdStr?: number
  avatarImgId_str?: number
  avatarUrl?: string
  backgroundImgId?: number
  backgroundImgIdStr?: string
  backgroundUrl?: string
  birthday?: number
  city?: number
  defaultAvatar?: boolean
  description?: string
  detailDescription?: string
  djStatus?: number
  expertTags?: string[]
  experts?: {[key: number]: string}
  followed?: boolean
  /** 1 男 2 女 */
  gender?: 2 | 1
  mutual?: boolean
  nickname?: string
  province?: number
  remarkName?: string
  signature?: string
  userId?: number
  userType?: number
  vipType?: number
}

interface TrackId {
  alg?: any,
  id?: number,
  v?: number
}

/** 专辑 */
interface AL {
  id?: number
  name?: string
  pic?: number
  picUrl?: string
  tns?: any[]
}

interface AR {
  alias?: string[]
  id?: number
  name?: string
  tns?: any[]
}

interface HLM {
  br?: number
  fid?: number
  size?: number
  vd?: number
}

export interface Track {
  a?: any
  al?: AL
  alia?: any[]
  ar?: AR[]
  cd?: string
  cf?: string
  copyright?: number
  cp?: number
  crbt?: any
  djId?: number
  dt?: number
  fee?: number
  ftype?: number
  h?: HLM
  id?: number
  l?: HLM
  m?: HLM
  mark?: number
  mst?: number
  mv?: number
  name?: string
  no?: number
  pop?: number
  pst?: number
  publishTime?: number
  rt?: string
  rtUrl?: string
  rtUrls?: string[]
  rtype?: number
  rurl?: string
  s_id?: number
  st?: number
  t?: number
  v?: number
}

export interface Playlist {
  adType?: number,
  backgroundCoverId?: number
  backgroundCoverUrl?: string
  cloudTrackCount?: number
  
  /** 评论数量 */
  commentCount?: number
  commentThreadId?: string
  coverImgId?: number 
  coverImgId_str?: string
  coverImgUrl?: string
  createTime?: number
  creator?: Creator
  description?: string
  highQuality?: boolean
  id?: number
  name?: string
  newImported?: boolean
  ordered?: boolean
  playCount?: number
  privacy?: number
  shareCount?: number
  specialType?: number
  status?: number
  subscribed?: boolean
  /** 订阅数量 */
  subscribedCount?: number
  subscribers?: Creator[]
  tags?: string[]
  trackCount?: number
  trackIds?: TrackId[]
  trackNumberUpdateTime?: number,
  trackUpdateTime?: number
  tracks?: Track[]
  updateFrequency?: any
  updateTime?: number
  userId?: number
}

export interface Privilege {
  cp?: number
  cs?: boolean
  dl?: number
  fee?: number
  fl?: number
  flag?: number
  id?: number
  maxbr?: number
  payed?: number
  pl?: boolean
  preSell?: boolean
  sp?: number
  st?: number
  subp?: number
  toast?: boolean
}

export interface Response extends http.ServerResponse {
  playlist?: Playlist,
  privileges?: Array<Privilege>,
  relatedVideos?: any[]
  urls?: string[]
}

export function playListApi(id: string): Promise<Response> {
  return axios.get(`${HOST}/playlist/detail`, {
    params: {
      id
    }
  })
}
