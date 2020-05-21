import React from 'react';
import './App.css';
import { channels } from '../shared/constants';
import Button from '@material-ui/core/Button';
const { ipcRenderer } = window;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      appName: '',
      appVersion: '',
    };
    ipcRenderer.send(channels.APP_INFO);
    ipcRenderer.on(channels.APP_INFO, (event, arg) => {
      ipcRenderer.removeAllListeners(channels.APP_INFO);
    });
  }

  render() {
    return (
      <div className="App">
        <Button variant="contained" color="primary" onClick={() => console.log('asd')}>
          Hello World
        </Button>
      </div>
    );
  }
}

export default App;
