import * as React from 'react';
import Skills from './components/skills';
import TargetPosition from './components/targetPosition';
import {style} from './index.css.js';

interface IResumeInputProps {
  onTargetPositionInput: (event : React.FocusEvent<HTMLDivElement> | React.FocusEvent<HTMLInputElement>) => void,
  targetPosition: string | null,
  resumeReferences: object | any
}

class ResumeInput extends React.Component<IResumeInputProps> {

  public render() {
    return (
      <div style={style}>
        <TargetPosition onInput={this.props.onTargetPositionInput}/>
        <Skills disabled={this.props.targetPosition ? false : true} resumeReferences={this.props.resumeReferences}/>
      </div>
    )
  }
}

export default ResumeInput;