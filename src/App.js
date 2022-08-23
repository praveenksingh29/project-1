import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import MainScreen from './components/MainScreen/MainScreen';
import Layout from './components/Layout/Layout';
import Head from './components/head/head';


function App() {
  return (
    <div className="App">
      <div className='head'>
        <Head />
      </div>
      <div className="main-container">
        <Sidebar/>
        <MainScreen/>
        <Layout/>
      </div>
    </div>
  );
}

export default App;
