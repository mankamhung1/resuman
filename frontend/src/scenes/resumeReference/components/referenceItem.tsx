import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import * as React from 'react';

interface Props {
  data: any
}

class ReferenceItem extends React.Component<Props> {

  public render() {
    const styles = {
      item: {
        paddingBottom: '10px',
      },
      bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
      },
      card: {
        minWidth: 275,
      },
      pos: {
        marginBottom: 12,
      },
      content: {
        padding: "10px 10px 0 10px" 
      },
      title: {
        textAlign: "left" as "left",
        fontSize: 12,
        marginBottom: 5,
        fontWeight: "bold" as "bold" 
      },
      date: {
        fontSize: 10
      },
      location: {
        fontSize: 12,
        marginLeft: '20px'
      },
      button: {
        minHeight: '18px',
        padding: 0
      }
    };
    // const bull = <span style={styles.bullet}>•</span>;
    return (
      <div style={styles.item}>
        <Card style={styles.card}>
          <CardContent style={styles.content}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <Typography style={styles.title} color="textSecondary">
                {this.props.data.firstName + ' ' + this.props.data.lastName}
              </Typography>
              <Typography style={styles.date} color="textSecondary">
                {this.props.data.dateModified.displayDate}
              </Typography>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <Typography style={styles.title} color="textSecondary">
                <span style={{fontWeight: 'normal'}}>Latest Title: </span>{this.props.data.workExperiences[0].title}
              </Typography>
              <Typography style={styles.location} color="textSecondary">
                HK
              </Typography>
            </div>
            {/* <Typography style={styles.title} color="textSecondary">
              Word of the Day
            </Typography>
            <Typography variant="headline" component="h2">
              be{bull}nev{bull}o{bull}lent
            </Typography>
            <Typography style={styles.pos} color="textSecondary">
              adjective
            </Typography>
            <Typography component="p">
              well meaning and kindly.<br />
              {'"a benevolent smile"'}
            </Typography> */}
          </CardContent>
          <CardActions>
            <Button style={styles.button} size="small">Learn More</Button>
          </CardActions>
        </Card>
      </div>
    );
  }
}

export default ReferenceItem;