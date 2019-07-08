import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';

const images = [
  {
    url: 'https://images.pexels.com/photos/2174656/pexels-photo-2174656.jpeg?cs=srgb&dl=coconut-trees-couple-daylight-2174656.jpg&fm=jpg',
    title: 'MyTinerary',
    width: '40%',
  },
  {
    url: 'https://images.pexels.com/photos/2611499/pexels-photo-2611499.jpeg?cs=srgb&dl=alone-back-view-beautiful-flowers-2611499.jpg&fm=jpg',
    title: 'Traveling Alone',
    width: '30%',
  },
  {
    url: 'https://images.pexels.com/photos/1506836/pexels-photo-1506836.png?cs=srgb&dl=huts-idyllic-palm-trees-1506836.jpg&fm=jpg',
    title: 'Hidden Gems',
    width: '30%',
  },
  {
    url: 'https://images.pexels.com/photos/757432/pexels-photo-757432.jpeg?cs=srgb&dl=city-colorful-commerce-757432.jpg&fm=jpg-list',
    title: 'Traveling Shoulder Seasons',
    width: '30%',
  },
  {
    url: 'https://images.pexels.com/photos/2551599/pexels-photo-2551599.jpeg?cs=srgb&dl=berries-breakfast-delicious-2551599.jpg&fm=jpg',
    title: 'Breakfast',
    width: '30%',
  },
  {
    url: 'https://images.pexels.com/photos/2373201/pexels-photo-2373201.jpeg?cs=srgb&dl=beach-dug-out-pool-leisure-2373201.jpg&fm=jpg',
    title: 'Luxury Experience on Backpacker Budget',
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
}));

export default function ButtonBases() {
  const classes = useStyles();

  return (
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
  );
}