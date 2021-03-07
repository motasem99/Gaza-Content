import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import Logo from '../../assets/img/newphoto.webp';

const useStyles = makeStyles({
  root: {
    marginTop: '20px',
    maxWidth: 345,
  },
  media: {
    height: '140px',
  },
});

const MainContent = () => {
  const classes = useStyles();

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'auto auto auto',
        width: '80%',
        margin: 'auto',
        justifyContent: 'space-between',
        marginTop: '100px',
      }}
    >
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={Logo}
            title='Contemplative Reptile'
          />
          <CardContent>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <Typography gutterBottom variant='h5' component='h2'>
                Product Name
              </Typography>
              <Typography gutterBottom variant='h5' component='h2'>
                Price
              </Typography>
            </div>
            <Typography variant='body2' color='textSecondary' component='p'>
              Description Description Description Description Description
              Description Description
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size='small' color='primary'>
            Buy
          </Button>
          <Button size='small' color='primary'>
            Learn More
          </Button>
        </CardActions>
      </Card>

      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={Logo}
            title='Contemplative Reptile'
          />
          <CardContent>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <Typography gutterBottom variant='h5' component='h2'>
                Product Name
              </Typography>
              <Typography gutterBottom variant='h5' component='h2'>
                Price
              </Typography>
            </div>
            <Typography variant='body2' color='textSecondary' component='p'>
              Description Description Description Description Description
              Description Description
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size='small' color='primary'>
            Buy
          </Button>
          <Button size='small' color='primary'>
            Learn More
          </Button>
        </CardActions>
      </Card>

      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={Logo}
            title='Contemplative Reptile'
          />
          <CardContent>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <Typography gutterBottom variant='h5' component='h2'>
                Product Name
              </Typography>
              <Typography gutterBottom variant='h5' component='h2'>
                Price
              </Typography>
            </div>
            <Typography variant='body2' color='textSecondary' component='p'>
              Description Description Description Description Description
              Description Description
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size='small' color='primary'>
            Buy
          </Button>
          <Button size='small' color='primary'>
            Learn More
          </Button>
        </CardActions>
      </Card>

      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={Logo}
            title='Contemplative Reptile'
          />
          <CardContent>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <Typography gutterBottom variant='h5' component='h2'>
                Product Name
              </Typography>
              <Typography gutterBottom variant='h5' component='h2'>
                Price
              </Typography>
            </div>
            <Typography variant='body2' color='textSecondary' component='p'>
              Description Description Description Description Description
              Description Description
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size='small' color='primary'>
            Buy
          </Button>
          <Button size='small' color='primary'>
            Learn More
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default MainContent;
