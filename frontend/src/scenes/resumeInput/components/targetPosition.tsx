import { FormControl } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import * as React from 'react';
import {style} from './components.css.js';

interface TargetPositionInputProps {
  onInput: (event: React.FocusEvent<HTMLDivElement> | React.FocusEvent<HTMLInputElement>) => void
}

class TargetPosition extends React.Component<TargetPositionInputProps> {

  constructor(props: TargetPositionInputProps) {
    super(props)
    this.onInput = this.onInput.bind(this)
  }

  public onInput(event: React.FocusEvent<HTMLDivElement> | React.FocusEvent<HTMLInputElement>) {
    this.props.onInput(event)
  }

  public render() {
    return (
      <div style={style}>
        <FormControl>
          <Grid container spacing={8} alignItems="flex-end">
            <Grid item>
              <AccountCircleIcon />
            </Grid>
            <Grid item>
              <TextField id="input-with-icon-grid" label="Target Job Position" onBlur={this.onInput}/>
            </Grid>
          </Grid>
        </FormControl>
      </div>
    )
  }
}

export default TargetPosition;