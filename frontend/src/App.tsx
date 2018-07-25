import axios from 'axios';
import * as React from 'react';
import './App.css';

import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import ResumeInput from './scenes/resumeInput';
import ReferenceList from './scenes/resumeReference';
// import Typography from '@material-ui/core/Typography';

interface IMainState {
  data: {}
}

class App extends React.Component<{}, IMainState> {

  public handleTargetPosition(event: React.FocusEvent<HTMLInputElement>) { // this is the function being passed into the child
    console.log(event.currentTarget.value)
    axios.get('/api/getResumeReference', {
      params: {
        targetPosition: event.currentTarget.value
      }
    }).then(res => {
      console.log(res)
      // const persons = res.data;
      // this.setState({ persons });
    })
  }

  public render() {
    const style = {
      appBar: {
        backgroundImage: 'linear-gradient(to right, #2b5876 0%, #4e4376 100%)'
      },
      contentPage: {
        display: 'flex'
      }
    }
    return (
      <div className="App">
        <AppBar style={style.appBar} position="static">
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
        <div style={style.contentPage}>
          <ReferenceList />
          <ResumeInput onTargetPositionInput={this.handleTargetPosition}/>
        </div>
      </div>
    );
  }
}

export default App;
