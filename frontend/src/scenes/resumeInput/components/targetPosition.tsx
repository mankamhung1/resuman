import { FormControl, Input, InputAdornment, InputLabel } from '@material-ui/core';
import AccountCircle from '@material-ui/icons/AccountCircle';
import * as React from 'react';

interface IResumeInputProps {
  onInput: (event : React.FocusEvent<HTMLDivElement> | React.FocusEvent<HTMLInputElement>) => void
}

class TargetPosition extends React.Component<IResumeInputProps> {

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
            onBlur={this.props.onInput}
          />
        </FormControl>
      </div>
    )
  }
}

export default TargetPosition;