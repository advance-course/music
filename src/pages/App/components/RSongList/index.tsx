import React, { useState, useEffect } from 'react';
import { Spin, Icon } from 'antd';
import { songListApi, ListItem } from './api';
import './index.css';
import { NavLink } from 'react-router-dom';

export default function RSongList() {
  const [list, setList] = useState<ListItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    songListApi().then(res => {
      setList(res.result || []);
      setLoading(false);
    })
  }, []);

  return (
    <Spin spinning={loading}>
      <section className="rsl-container">
        <div className="title">推荐歌单<Icon type="right" /></div>

        <div className="list-container">
          {list.map((item, i) => (
            <NavLink to={{ pathname: '/song/list', state: { id: item.id } }} className="item" key={item.id || i}>
              <div className="img-wrapper">
                <img src={item.picUrl} alt="" />
                <div className="mask" />
                <div className="play">
                  <Icon type="caret-right" />
                  <div className="play-count">{item.playCount ? `${(item.playCount / 10000).toFixed(0)}万` : ''}</div>
                </div>
              </div>
              <div className="tip">{item.name}</div>
            </NavLink>
          ))}
        </div>
        
      </section>
    </Spin>
  )
}
