import React, { useEffect, useState } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { playListApi, Playlist } from './api';
import { Spin, Tag, Icon } from 'antd';
import PlayList from './components/PlayList';
import Comments from './components/Comments';
import Collectors from './components/Collectors';
import Description from './components/Description';
import './index.css';

export interface SongListProps extends RouteComponentProps {}

function SongList({ location }: SongListProps) {
  const id = location.state.id;
  const [playList, setPlaylist] = useState<Playlist>({})
  const [loading, setLoading] = useState(true);

  const [navIndex, setNavindex] = useState(0);

  useEffect(() => {
    if (id) {
      playListApi(id).then(res => {
        console.log(res);
        setPlaylist(res.playlist || {});
        setLoading(false);
      })
    }
  }, [id]);

  return (
    <Spin spinning={loading}>
      <section className="song-list-detail">
        <img className="cover-img" src={playList.coverImgUrl} alt="" />
        <div className="info">
          <div className="title">
            <div className="pre-tag">歌单</div>
            <div className="song-title">{playList.name}</div>
          </div>

          {playList.creator && (
            <div className="creator">
              <img className="avatar" src={playList.creator!.avatarUrl} alt="" />
              <span className="nickname">{playList.creator!.nickname}</span>
              <span className="create-time">{playList.createTime}创建</span>
            </div>
          )}

          <div className="btns-wrapper">
            <div className="btn-container playall">
              <div className="play-list">
                <Icon className="btn-icon" type="right-circle" />
                <span className="btn-text">播放全部</span>
              </div>
              <div className="add-list"><Icon className="btn-icon" type="plus" /></div>
            </div>

            <div className="btn-container">
              <Icon className="btn-icon" type="folder-add" />
              <span className="btn-text">收藏({playList.cloudTrackCount})</span>
            </div>

            <div className="btn-container">
              <Icon className="btn-icon" type="share-alt" />
              <span className="btn-text">分享({playList.shareCount})</span>
            </div>
          </div>

          {playList.tags && (
            <div className="tags">
              标签：
            {playList.tags.map((tag, i) => (
              <Tag key={i} color="orange">{tag}</Tag>
            ))}
            </div>
          )}

          <div className="tip">
            歌曲数：{playList.trackCount} 播放数：{playList.playCount}
          </div>
        </div>
      </section>
      <section className="song-list-content">
        <div className="nav-container">
          <div className="navs">
            <div className={navIndex === 0 ? 'nav active' : 'nav'} onClick={() => setNavindex(0)}>歌曲列表</div>
            <div className={navIndex === 1 ? 'nav active' : 'nav'} onClick={() => setNavindex(1)}>评论({playList.commentCount})</div>
            <div className={navIndex === 2 ? 'nav active' : 'nav'} onClick={() => setNavindex(2)}>收藏者</div>
            <div className={navIndex === 3 ? 'nav active' : 'nav'} onClick={() => setNavindex(3)}>简介</div>
          </div>
          <div className="searchs"></div>
        </div>

        {navIndex === 0 && <PlayList list={playList.tracks} />}
        {navIndex === 1 && <Comments />}
        {navIndex === 2 && <Collectors />}
        {navIndex === 3 && <Description />}
      </section>
    </Spin>
  )
}

export default withRouter(SongList);