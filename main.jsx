import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

// 単体ページ (#root) または fx/index.html 埋め込み (#root-brokers) の両方に対応
const rootEl = document.getElementById('root-brokers') || document.getElementById('root');
if (rootEl) {
  ReactDOM.createRoot(rootEl).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
