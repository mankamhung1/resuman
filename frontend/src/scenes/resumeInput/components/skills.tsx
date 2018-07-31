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

    // create an array containing all the skills in all skillslist in all resumes references, and make it lowercased
    const skillRef = []
    for (const resume of this.props.resumeReferences) {
      if (resume.skillsList.length > 0) {
        for (const skill of resume.skillsList) {
          skillRef.push(skill.text.toLowerCase())
        }
      }
    }

    // count skills with number
    const counted = skillRef.reduce((count, currentSkill) => {
      if(typeof count[currentSkill] !== "undefined"){
        count[currentSkill]++; 
        return count;
      } else {
        count[currentSkill]=1; 
        return count;
      }
    }, {});
    
    const skillsArray : any[] = [];
    for(const skill of Object.keys(counted)) {
        skillsArray.push(skill + ": " + counted[skill]);
    }

    // first sort by count and then use localeCompare() to sort alphabetically
    skillsArray.sort((a: string, b: string) => {
      return parseInt(b.split(':')[1], 10) - parseInt(a.split(':')[1], 10) || a.localeCompare(b)
    })

    const tooltipWrapper = 
      skillsArray.map((resume: any, index: number) => (skillsArray.length > 0) ? <div key={index}>{resume}</div> : <div key={index}/>)

    return this.props.disabled ? skillCore : (
      <Tooltip title={<React.Fragment>{tooltipWrapper}</React.Fragment>} placement="bottom" disableHoverListener open={this.state.tooltipOpen}>
        {skillCore}
      </Tooltip>
    )
  }
}

export default Skills;