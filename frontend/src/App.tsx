import * as React from 'react';
import './App.css';

// import ResumeInput from './scenes/resumeInput'

import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/core/icon';
import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
// import MenuIcon from '@material-ui/icons/Menu';

class App extends React.Component {
  public render() {
    const style = {
      backgroundImage: 'linear-gradient(to right, #2b5876 0%, #4e4376 100%)'
    }
    return (
      <div className="App">
        <AppBar style={style} position="static">
          <Toolbar>
            <IconButton aria-label="Menu">
              <MenuIcon />
            </IconButton>
            <div className="app-bar-flex">
              <div>Resuman</div>
              <Button color="inherit">Login</Button>
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default App;
