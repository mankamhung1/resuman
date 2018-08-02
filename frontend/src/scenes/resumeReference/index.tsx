import * as React from 'react';
import { CircularProgress } from '../../../node_modules/@material-ui/core';
import ReferenceItem from './components/referenceItem';

const style = { // style in tsx can avoid class names miss-used issues by other components, it acts like scoped css
  header: {
    color: 'grey',
    width: '200px',
  },
  mainNoInput: {
    alignItems: 'center',
    display: 'flex',
    height: 'calc(100% - 60px)',
    justifyContent: 'center',
    overflowY: 'scroll' as "scroll",
    padding: '30px 10px',
    width: '295px'
  },
  mainWithInput: {
    height: 'calc(100% - 60px)',
    overflowY: 'scroll' as "scroll",
    padding: '30px 10px',
    title: {
      fontSize: '14px',
      paddingBottom: '20px'
    },
    width: '295px'
  }
} 

interface IResumeReferenceProps {
  targetPosition: string | null
  resumeReferences: object | any
  isLoading: boolean
}

class ResumeReferenceList extends React.Component<IResumeReferenceProps> {

  public render() {
    return (
      <div style={this.props.targetPosition ? style.mainWithInput : style.mainNoInput}>
        {this.props.targetPosition ? 
          (this.props.isLoading ? 
            <CircularProgress style={{ color: '#2b5876' }} thickness={7} /> :
            <div>
              <div style={style.mainWithInput.title}>
                <span style={{color: 'grey'}}>Resumes Reference for: </span>
                <div>{this.props.targetPosition}</div>
              </div>
              {this.props.resumeReferences.map((resume: object, index: number) => <ReferenceItem data={resume} key={index}/>)}
            </div>) : 
        <div style={style.header}>Input your target position to get resume references.</div>
        }
      </div>  
    )
  }
}

export default ResumeReferenceList;