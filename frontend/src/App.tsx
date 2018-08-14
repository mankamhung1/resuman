// 'Skill' component in 'resumeInput' is not using Redux because of the purpose of practice, though Redux is helpful in this case. Redux would be used in other components.
import axios from 'axios';
import * as React from 'react';
import './App.css';

import { Provider } from 'react-redux';
import { store } from './redux/store';
import { updateRefAction, updateTargetAction } from './redux/target/actions';
import {ApplicationBar} from './scenes/appBar';
import ResumeInput from './scenes/resumeInput';
import ResumeReferenceList from './scenes/resumeReference';

interface MainState {
  targetPosition: string | null
  resumeReferences: object
  isRefListLoading: boolean
}

class App extends React.Component<{},MainState> {

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
    this.setState({
      targetPosition: event.currentTarget.value,
      isRefListLoading: true
    })
    store.dispatch(updateTargetAction(event.currentTarget.value)) // update the store with the target position
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
      store.dispatch(updateRefAction(res.data.data.resumes)) // update the store with the resumes reference
    })
  }

  public render() {
    const style = {
      contentPage: {
        display: 'flex',
        height: 'calc(100% - 64px)'
      }
    }
    return (
      <Provider store={store}>
        <div className="App">
          <ApplicationBar/>
          <div style={style.contentPage}>
            <ResumeReferenceList targetPosition={this.state.targetPosition} resumeReferences={this.state.resumeReferences} isLoading={this.state.isRefListLoading}/>
            <ResumeInput targetPosition={this.state.targetPosition} onTargetPositionInput={this.handleTargetPosition} resumeReferences={this.state.resumeReferences} isLoading={this.state.isRefListLoading}/>
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;