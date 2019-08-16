import React, { useEffect, useState, useRef } from 'react';
import Slider from 'components/Slider';
import { musicInfoApi, MusicInfo } from './api';
import './index.css';

let timer: any = null;

export default function PlayBar() { 
  const audioRef: any = useRef();
  const [playing, setPlaying] = useState(false);

  const [musicInfo, setMusicInfo] = useState<MusicInfo>({});
  const [playTime, setPlayTime] = useState(0);

  console.log(playTime);
  
  useEffect(() => {
    musicInfoApi(5406749).then(res => {
      setMusicInfo(res.data[0]);
    })
  }, []);

  function play() {
    if (audioRef && audioRef.current) {
      !playing ? audioRef.current.play() : audioRef.current.pause();
      setPlaying(!playing);
    }
  }

  return (
    <footer className="app-play-bar" onClick={play}>
      <Slider max={musicInfo.br} current={playTime} />
      <div>{playTime}</div>
      {musicInfo.url && <audio ref={audioRef} src={musicInfo.url} />}
    </footer>
  )
}
