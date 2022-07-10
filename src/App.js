import logo from './logo.svg';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Node Environment ==> {process.env.NODE_ENV} <br/>
          Loading Environment Variable ==> {process.env.REACT_APP_TEST_VALUE}
        </p>
      </header>
    </div>
  );
};

export default App;
