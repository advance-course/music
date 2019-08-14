import React, { useState, useEffect, useCallback } from 'react';
import { Carousel, Spin } from 'antd';
import { bannerApi, Banner } from './api';
import './index.css';

export default function() {
  const [loading, setLoading] = useState<boolean>(true);
  const [banner, setBanner] = useState<Banner[]>([]);

  useEffect(() => {
    bannerApi().then(res => {
      setBanner(res.banners);
      setLoading(false);
    })
  }, []);

  const navToMusic = useCallback((url?: string) => {
    if (url) {
      window.location.href = url;
    }
  }, [])

  return (
    <Spin spinning={loading}>
      <Carousel className="banner-container">
        {banner.map((item, i) => (
          <div key={i} className="banner-item" onClick={() => navToMusic(item.url)}>
            <img src={item.pic} alt="" />
          </div>
        ))}
      </Carousel>
    </Spin>
  )
}
