import * as React from 'react';
import TargetPosition from './components/targetPosition';
import {style} from './index.css.js';

interface IResumeInputProps {
  onTargetPositionInput: (event : React.FocusEvent<HTMLDivElement> | React.FocusEvent<HTMLInputElement>) => void
}

class ResumeInput extends React.Component<IResumeInputProps> {

  public render() {
    return (
      <div style={style}>
        <TargetPosition onInput={this.props.onTargetPositionInput}/>
      </div>
    )
  }
}

export default ResumeInput;