import React from 'react';
import { Icon } from 'antd';
import { NavLink } from 'react-router-dom';
import Discover from './components/Discover';
import './App.css';

export default function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <div className="app-name">M U S I C</div>
        <div className="app-header-area"></div>
        <div className="app-search-setting">
          <div style={{ marginRight: '20px' }}>搜索</div>
          <div style={{ marginRight: '20px' }}>设置</div>
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
          <Discover />
        </main>        
      </div>

      <footer className="app-footer">play area</footer>
    </div>
  )
}
