// 'Skill' component in 'resumeInput' is not using Redux because of the purpose of practice, though Redux is helpful in this case. Redux would be used in other components.
import axios from 'axios';
import * as React from 'react';
import './App.css';

import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import ResumeInput from './scenes/resumeInput';
import ResumeReferenceList from './scenes/resumeReference';

interface IMainState {
  targetPosition: string | null
  resumeReferences: object
  isRefListLoading: boolean
}

class App extends React.Component<{}, IMainState> {

  constructor(props: any){
    super(props);
    this.state = {
      resumeReferences: [],
      targetPosition: '',
      isRefListLoading: false
    };
    this.handleTargetPosition = this.handleTargetPosition.bind(this);
  }

  public handleTargetPosition(event: React.FocusEvent<HTMLInputElement>) { // this is the function being passed into the child
    console.log(event.currentTarget.value)
    this.setState({
      targetPosition: event.currentTarget.value,
      isRefListLoading: true
    })
    axios.get('/api/getResumeReference', {
      params: {
        targetPosition: event.currentTarget.value
      }
    }).then(res => {
      console.log(res)
      this.setState({
        resumeReferences: res.data.data.resumes,
        isRefListLoading: false
      })
    })
  }

  public render() {
    const style = {
      appBar: {
        backgroundImage: 'linear-gradient(to right, #2b5876 0%, #4e4376 100%)'
      },
      contentPage: {
        display: 'flex',
        height: 'calc(100% - 64px)'
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
          <ResumeReferenceList targetPosition={this.state.targetPosition} resumeReferences={this.state.resumeReferences} isLoading={this.state.isRefListLoading}/>
          <ResumeInput targetPosition={this.state.targetPosition} onTargetPositionInput={this.handleTargetPosition} resumeReferences={this.state.resumeReferences} isLoading={this.state.isRefListLoading}/>
        </div>
      </div>
    );
  }
}

export default App;
