import React from 'react';
import { Track } from '../../api';
import { Icon } from 'antd';
import moment from 'moment';
import './index.css';

export interface PlayListProps {
  list?: Track[]
}

function fixZero(num: number) {
  return num < 10 ? `0${num}` : num;
}

export default function Playlist({ list = [] }: PlayListProps) {
  return (
    <div className="playlist-container">
      <header className="row header">
        <div className="title">歌曲标题</div>
        <div className="singer">歌手</div>
        <div className="album">专辑</div>
        <div className="duration">时长</div>
      </header>
      {list.map((item, i) => (
        <div key={i} className="row">
          <div className="index">{fixZero(i + 1)}</div>
          <div className="btn-c">
            <Icon type="heart" />
          </div>

          <div className="btn-c">
            <Icon type="download" />
          </div>
          
          <div className="title">{item.name}</div>
          <div className="singer">{item.ar![0].name}</div>
          <div className="album">{item.al!.name}</div>
          <div className="duration">{moment(item.dt).format('mm:ss')}</div>
        </div>
      ))}
    </div>
  );
};
