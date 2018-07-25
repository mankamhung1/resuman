import * as React from 'react';
import ReferenceItem from './components/referenceItem';
import {style} from './index.css.js';

// interface resumeInputProps {
//   resume: string
// }

class ReferenceList extends React.Component<{},{}> {
  public render() {
    return (
      <div style={style}>
        <ReferenceItem data={{}}/>
      </div>
    )
  }
}

export default ReferenceList;