import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
// import zhCN from 'antd/es/locale/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';
import 'antd/dist/antd.less';
import Router from './router';

moment.locale('zh-cn');
ReactDOM.render(<Router/>, document.getElementById('app'));
