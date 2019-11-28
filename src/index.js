import React from 'react';
import ReactDOM from 'react-dom';
import { ConfigProvider } from 'antd';
import moment from 'moment';
import zhCN from 'antd/es/locale/zh_CN';
import Root from './root';
import 'moment/locale/zh-cn';

moment.locale('zh-cn');

// <ConfigProvider locale={zhCN} getPopupContainer={node => node.parentElement}>
ReactDOM.render(
  <ConfigProvider locale={zhCN} getPopupContainer={node => node}>
    <Root />
  </ConfigProvider>,
  document.getElementById('root')
);
