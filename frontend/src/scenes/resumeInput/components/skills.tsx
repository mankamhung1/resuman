import { FormControl, Tooltip } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import BuildIcon from '@material-ui/icons/Build';
import WhatshotIcon from '@material-ui/icons/Whatshot';
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
    
    const skillsArray : string[] = [];
    for(const skill of Object.keys(counted)) {
        skillsArray.push(skill + ": " + counted[skill]);
    }

    // first sort by count and then use localeCompare() to sort alphabetically
    skillsArray.sort((a: string, b: string) => {
      return parseInt(b.split(':')[1], 10) - parseInt(a.split(':')[1], 10) || a.localeCompare(b)
    })

    // render the whatshot icon and create the colors of the ranks
    const hotCount : number[] = []
    const rankColor : string[] = ['red', 'orange', 'yellow']
    const rankIcon : any[] = [<WhatshotIcon key={1}/>, <WhatshotIcon key={2}/>, <WhatshotIcon key={3}/>]
    const rankLogic = (skill: string, index: number, logic: any[]) => {
      const currentSkillCount = parseInt(skill.split(':')[1], 10)
      if (index === 0 && hotCount.length === 0) {   // as this function would be run more than 1 time, check if hotCount.length === 0
        hotCount.push(currentSkillCount)
        return logic[0]
      } else if (currentSkillCount === hotCount[0]) {
        return logic[0]
      } else if (hotCount.length === 1) {
        hotCount.push(currentSkillCount)
        return logic[1]
      } else if (currentSkillCount === hotCount[1]) {
        return logic[1]
      } else if (hotCount.length === 2) {
        hotCount.push(currentSkillCount)
        return logic[2]
      } else if (currentSkillCount === hotCount[2]) {
        return logic[2]
      } else {
        return null 
      }
    }

    const tooltipWrapper = 
      skillsArray.map((skill: any, index: number) => (
        skillsArray.length > 0 && index <= 50) ? 
        <div key={index} style={{color: rankLogic(skill, index, rankColor), display: 'flex', alignItems: 'center'}}> 
          {rankLogic(skill, index, rankIcon)} 
          <span>{skill}</span>
        </div> : 
        <div key={index}/>
      )

    return this.props.disabled ? skillCore : (
      <Tooltip title={<React.Fragment>{tooltipWrapper}</React.Fragment>} placement="bottom" disableHoverListener open={this.state.tooltipOpen}>
        {skillCore}
      </Tooltip>
    )
  }
}

export default Skills;