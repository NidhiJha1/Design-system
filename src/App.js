import { Layout} from 'antd';
import './App.css';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import HeaderLayout from './components/header';
import AppHome from './view/home';

const { Header,Content } = Layout;
function App() {
  return (
      <>
    <Layout className="mainLayout">
    <Header> 
       <HeaderLayout/>
    </Header>
    <Content>
      <AppHome/>
    </Content>
    </Layout>
 
      </>
  );
}

export default App;
