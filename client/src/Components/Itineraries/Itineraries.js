import React, { Component } from "react";
import "./Itineraries.css";
import PropTypes from "prop-types";
import classnames from "classnames";

import { connect } from "react-redux";
import Card from "@material-ui/core/Card";

import Avatar from "@material-ui/core/Avatar";
import ShareIcon from "@material-ui/icons/Share";
import Collapse from "@material-ui/core/Collapse";
import CardMedia from "@material-ui/core/CardMedia";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import CardHeader from "@material-ui/core/CardHeader";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import FavoriteIcon from "@material-ui/icons/Favorite";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { getItins } from "../../Store/Actions/itineraryAction";
import Activities from "../../Components/Activities/Activities";

class ItineraryList extends Component {
  state = { expanded: false };
  static propTypes = {
    // getCities: PropTypes.func.isRequired,
    itineraries: PropTypes.object.isRequired
    // isAuthenticated: PropTypes.bool
  };
  componentDidMount() {
    this.props.getItins();
  }
  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  render() {
    const { itineraries, cities } = this.props;
    
    return (
      <Card className={itineraries}>
        {itineraries &&
          itineraries.map(itineraries => {
            return (
              <React.Fragment>
                <CardHeader
                itineraries={itineraries.title} 
                cityName= {cities.cityName} 
                 key={itineraries}
                  avatar={
                    <Avatar
                      alt={itineraries.title}
                      src={itineraries.userPic}
                      className={itineraries.bigAvatar}
                    />
                  }
                  action={
                    <IconButton>
                      <MoreVertIcon />
                    </IconButton>
                  }
                  title={itineraries.MYtineraryName}
                  // subheader="September 14, 2016" //create time stamp
                />
                <CardMedia
                  className={itineraries.title}
                  title={itineraries.title}
                />
                <img src={itineraries.img} alt={itineraries.title} />
                <CardContent>
                  <Typography component="p">
                    {itineraries.city} {itineraries.country}{" "}
                    {itineraries.duration} ,{itineraries.rating}
                  </Typography>
                </CardContent>
                <CardActions
                  className={itineraries.actions}
                  disableActionSpacing
                >
                  <IconButton aria-label="Add to favorites">
                    <FavoriteIcon />
                  </IconButton>
                  <IconButton aria-label="Share">
                    <ShareIcon />
                  </IconButton>
                  <IconButton
                    className={classnames(itineraries.expand, {
                      [itineraries.expandOpen]: this.state.expanded
                    })}
                    onClick={this.handleExpandClick}
                    aria-expanded={this.state.expanded}
                    aria-label="Show more"
                  >
                    <ExpandMoreIcon />
                  </IconButton>
                </CardActions>
                <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
                  <CardContent>
                    <Typography paragraph>Activities:</Typography>
                    <Typography paragraph>Here's what you can do</Typography>
                    <Typography paragraph>
                      <Activities />
                    </Typography>
                  </CardContent>
                </Collapse>
              </React.Fragment>
            );
          })}
      </Card>
    );
  }
}

const mapStateToProps = state => {
  return {
    itineraries: state.itinerariesObj.itineraries
  };
};
export default connect(
  mapStateToProps,
  { getItins }
)(ItineraryList);
