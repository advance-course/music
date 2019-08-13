import React from 'react';
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
          <div>loading</div>
          <div>loading</div>
          <div>loading</div>
          <div>loading</div>
          <div>loading</div>
          <div>loading</div>
          <div>loading</div>
          <div>loading</div>
          <div>loading</div>
          <div>loading</div>
          <div>loading</div>
          <div>loading</div>
          <div>loading</div>
          <div>loading</div>
          <div>loading</div>
          <div>loading</div>
        </aside>

        <main className="app-main">
          <div style={{ height: '200px' }}>主要内容区域</div>
          <div style={{ height: '200px' }}>主要内容区域</div>
          <div style={{ height: '200px' }}>主要内容区域</div>
          <div style={{ height: '200px' }}>主要内容区域</div>
          <div style={{ height: '200px' }}>主要内容区域</div>
          <div style={{ height: '200px' }}>主要内容区域</div>
          <div style={{ height: '200px' }}>主要内容区域</div>
          <div style={{ height: '200px' }}>主要内容区域</div>
          <div style={{ height: '200px' }}>主要内容区域</div>
          <div style={{ height: '200px' }}>主要内容区域</div>
          <div style={{ height: '200px' }}>主要内容区域</div>
          <div style={{ height: '200px' }}>主要内容区域</div>  
        </main>        
      </div>

      <footer className="app-footer">play area</footer>
    </div>
  )
}
