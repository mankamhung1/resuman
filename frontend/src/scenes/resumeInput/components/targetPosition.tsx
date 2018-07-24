import { FormControl, Input, InputAdornment, InputLabel } from '@material-ui/core';
import AccountCircle from '@material-ui/icons/AccountCircle';
import * as React from 'react';

// interface resumeInputProps {
//   resume: string
// }

class TargetPosition extends React.Component {

  public targetPositionInput() {
    console.log('blurred')
  }

  public render() {
    return (
      <div>
        <FormControl>
          <InputLabel htmlFor="input-with-icon-adornment">Target Job Position</InputLabel>
          <Input
            id="input-with-icon-adornment"
            startAdornment={
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            }
            onBlur={this.targetPositionInput}
          />
        </FormControl>
      </div>
    )
  }
}

export default TargetPosition;