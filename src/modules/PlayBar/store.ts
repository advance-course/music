import { observable } from 'mobx';

class PlayBarStore {
  /** 播放列表 */
  @observable
  playList: any[] = []

  /** 历史记录列表 */
  historyList: any[] = []
}

export default new PlayBarStore();