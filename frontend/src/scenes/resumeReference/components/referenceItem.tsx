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
      card: {
        minWidth: 275,
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
        marginLeft: '20px',
        textAlign: "right" as "right"
      },
      actions: {
        padding: '10px'
      },
      button: {
        fontSize: '10px',
        minHeight: '18px',
        padding: 0,
      }
    };

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
                {this.props.data.location ? this.props.data.location.city+', '+this.props.data.location.country: ''}
              </Typography>
            </div>
          </CardContent>
          <CardActions style={styles.actions}>
            <Button style={styles.button} size="small">Know More</Button>
          </CardActions>
        </Card>
      </div>
    );
  }
}

export default ReferenceItem;