import * as React from 'react';
import TargetPosition from './components/targetPosition';
import {style} from './index.css.js';

// interface resumeInputProps {
//   resume: string
// }

class ResumeInput extends React.Component {
  public render() {
    return (
      <div style={style}>
        <TargetPosition />
      </div>
    )
  }
}

export default ResumeInput;