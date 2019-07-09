import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';

const images = [
  {
    url: 'https://images.pexels.com/photos/2265876/pexels-photo-2265876.jpeg?cs=srgb&dl=bay-beach-blue-water-2265876.jpg&fm=jpg',
    title: 'Create Itineraries',
    width: '40%',
  },
  {
    url: 'https://images.pexels.com/photos/2070485/pexels-photo-2070485.jpeg?cs=srgb&dl=amazing-thailand-ancient-architecture-2070485.jpg&fm=jpg',
    title: 'Share',
    width: '30%',
  },
  {
    url: 'https://images.pexels.com/photos/2155749/pexels-photo-2155749.jpeg?cs=srgb&dl=arid-barren-blue-2155749.jpg&fm=jpg',
    title: 'Create Community',
    width: '30%',
  },
  {
    url: 'https://images.pexels.com/photos/2278885/pexels-photo-2278885.jpeg?cs=srgb&dl=architecture-beautiful-boat-2278885.jpg&fm=jpg',
    title: 'Find Others',
    width: '30%',
  },
  {
    url: 'https://images.pexels.com/photos/2179172/pexels-photo-2179172.jpeg?cs=srgb&dl=backlit-beach-camera-2179172.jpg&fm=jpg',
    title: 'Create Favorites',
    width: '30%',
  },
  {
    url: 'https://images.pexels.com/photos/2422255/pexels-photo-2422255.jpeg?cs=srgb&dl=adventure-hand-illustration-2422255.jpg&fm=jpg',
    title: 'Make Memories',
    width: '40%',
  },
];

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    minWidth: 300,
    width: '100%',
  },
  image: {
    position: 'relative',
    height: 200,
    [theme.breakpoints.down('xs')]: {
      width: '100% !important', // Overrides inline-style
      height: 100,
    },
    '&:hover, &$focusVisible': {
      zIndex: 1,
      '& $imageBackdrop': {
        opacity: 0.15,
      },
      '& $imageMarked': {
        opacity: 0,
      },
      '& $imageTitle': {
        border: '4px solid currentColor',
      },
    },
  },
  focusVisible: {},
  imageButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
  },
  imageSrc: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create('opacity'),
  },
  imageTitle: {
    position: 'relative',
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`,
  },
  imageMarked: {
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
  button: {
    margin: theme.spacing(1),
  },
  input: {
    display: 'none',
  },
}));

export default function ButtonBases() {
  const classes = useStyles();

  return (
    <div> 
    <Button href="api/users/google" variant="contained" color="secondary" className={classes.button}>
    Google+
      </Button>
    
    <div className={classes.root}>
      {images.map(image => (
        <ButtonBase
          focusRipple
          key={image.title}
          className={classes.image}
          focusVisibleClassName={classes.focusVisible}
          style={{
            width: image.width,
          }}
        >
          <span
            className={classes.imageSrc}
            style={{
              backgroundImage: `url(${image.url})`,
            }}
           
          />
          <span className={classes.imageBackdrop} />
          <span className={classes.imageButton}>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              className={classes.imageTitle}
            >
              {image.title}
              <span className={classes.imageMarked} />
            </Typography>
          </span>
        </ButtonBase>
   
      ))}
    </div>
    </div>
  );
}