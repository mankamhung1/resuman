import * as React from 'react';
import ReferenceItem from './components/referenceItem';
import {style} from './index.css.js';

// import TargetPosition from '../resumeInput/components/targetPosition';

interface IResumeReferenceProps {
  targetPosition: string | null
  resumeReferences: object | any
}

class ResumeReferenceList extends React.Component<IResumeReferenceProps> {

  public render() {
    return (
      <div style={this.props.targetPosition ? style.mainWithInput : style.mainNoInput}>
        {this.props.targetPosition ? 
        <div>
          <div style={style.mainWithInput.title}>
            <span style={{color: 'grey'}}>Resumes Reference for: </span>
            <div>{this.props.targetPosition}</div>
          </div>
          {this.props.resumeReferences.map((resume: object, index: number) => <ReferenceItem data={resume} key={index}/>)}
        </div> : 
        <div style={style.header}>Input your target position to get resume references.</div>}
      </div>  
    )
  }
}

export default ResumeReferenceList;