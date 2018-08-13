import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import * as React from 'react';

interface Props {
  data: {}
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
      title: {
        fontSize: 14,
        marginBottom: 16
      }
    };
    const bull = <span style={styles.bullet}>•</span>;
    return (
      <div style={styles.item}>
        <Card style={styles.card}>
          <CardContent>
            <Typography style={styles.title} color="textSecondary">
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
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      </div>
    );
  }
}

export default ReferenceItem;