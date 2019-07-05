import React, { Component } from "react";
// import { Container } from "reactstrap";
// import { CSSTransition, TransitionGroup } from "react-transition-group";
// import Carousel from "react-bootstrap/Carousel";import PropTypes from 'prop-types';

import { connect } from "react-redux";
import { getActivs } from "../../Store/Actions/activityAction";
import PropTypes from "prop-types";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from "@material-ui/core/IconButton";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import "./Activities.css";

class Activities extends Component {
  // static propTypes = {
  //   activities: PropTypes.object.isRequired
  // };
  componentDidMount() {
    this.props.getActivs();
  }

  render() {
    const { activities } = this.props;
    return (
      <div className={activities}>
        <GridList className={activities} cols={2.5}>
          {activities &&
            activities.map(activities => (
              <GridListTile key={activities}>
                <img src={activities.img} alt={activities.title} />
                <GridListTileBar
                  title={activities.MYtineraryName}
                  classes={{
                    root: activities.city,
                    title: activities.title
                  }}
                  actionIcon={
                    <IconButton>
                      <StarBorderIcon className={activities.price} />
                    </IconButton>
                  }
                />
              </GridListTile>
            ))}
        </GridList>
      </div>
    );
  }
}

Activities.propTypes = {
  activities: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  return {
    activities: state.activitiesObj.activities
  };
};

export default connect(
  mapStateToProps,
  { getActivs }
)(Activities);
