import { FormControl, Tooltip } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import BuildIcon from '@material-ui/icons/Build';
import * as React from 'react';
import {style} from './components.css.js';

interface ISkillsInputProps {
  disabled: boolean,
  resumeReferences: object | any
}

interface ISkillsInputState {
  tooltipOpen: boolean
}

class Skills extends React.Component<ISkillsInputProps, ISkillsInputState> {

  public constructor(props: ISkillsInputProps) {
    super(props)
    this.state = {
      tooltipOpen: false
    }
  }

  public handleTooltipClose = () => {
    this.setState({ tooltipOpen: false })
  }

  public handleTooltipOpen = () => {
    this.setState({ tooltipOpen: true })
  }

  public render() {

    const skillCore = 
      <div style={style.multiline} onFocus={this.handleTooltipOpen} onBlur={this.handleTooltipClose}>
        <FormControl disabled={this.props.disabled}>
          <Grid container spacing={8} alignItems="flex-end">
            <Grid item>
              <BuildIcon color={this.props.disabled ? "disabled" : "inherit"}/>
            </Grid>
            <Grid item>
              <TextField disabled={this.props.disabled} multiline id="input-with-icon-grid" label="Skills"/>
            </Grid>
          </Grid>
        </FormControl>
      </div>

    let skillRef = ''
      for (const resume of this.props.resumeReferences) {
        if (resume.skillsList.length > 0) {
          for (const skill of resume.skillsList) {
            skillRef = skillRef + skill.text
          }
        }
      }

    return this.props.disabled ? skillCore : (
      <Tooltip title={skillRef} placement="bottom" disableHoverListener open={this.state.tooltipOpen}>
        {skillCore}
      </Tooltip>
    )
  }
}

export default Skills;