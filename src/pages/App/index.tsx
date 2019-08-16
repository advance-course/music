import React from 'react';
import { Icon } from 'antd';
import { NavLink, Route } from 'react-router-dom';

// 首页的组件
import Discover from './components/Discover';
import RSongList from './components/RSongList';

// 页面组件
import FM from 'pages/FM';
import Video from 'pages/Video';
import Friend from 'pages/Friend';
import SongList from 'pages/SongList';

import logo from './images/logo.svg';
import './App.css';

export default function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <div className="app-name">
          <img src={logo} className="App-logo" alt="logo" />
          <span>网易云音乐</span>
        </div>
        <div className="app-header-area"></div>
        <div className="app-search-setting">
          <div style={{ marginRight: '20px' }}><Icon type="search" /></div>
          <div style={{ marginRight: '20px' }}><Icon type="setting" /></div>
        </div>
      </header>

      <div className="content-container">
        <aside className="app-sidemenu">
          <div className="user-info">
            <div className="avatar" />
            <span className="no-login">未登录</span>
            <Icon type="caret-right" />
          </div>

          <NavLink to="/" exact className="nav" activeClassName="active">
            <Icon type="dashboard" theme="outlined" className="nav-icon" />
            <span>发现音乐</span>
          </NavLink>
          
          <NavLink to="/fm" className="nav" activeClassName="active">
            <Icon type="gold" theme="outlined" className="nav-icon" />
            <span>私人FM</span>
          </NavLink>

          <NavLink to="/video" className="nav" activeClassName="active">
            <Icon type="alert" theme="outlined" className="nav-icon" />
            <span>视频</span>
          </NavLink>

          <NavLink to="/friend" className="nav" activeClassName="active">
            <Icon type="bug" theme="outlined" className="nav-icon" />
            <span>朋友</span>
          </NavLink>
        </aside>

        <main className="app-main">
          
          <Route path="/" exact 
            render={() => (
              <>
                <Discover />
                <RSongList />
              </>
            )}
          />
          <Route path="/fm" component={FM} />
          <Route path="/video" component={Video} />
          <Route path="/friend" component={Friend} />
          <Route path="/song/list" component={SongList} />
        </main>
      </div>

      <footer className="app-footer">play area</footer>
    </div>
  )
}
