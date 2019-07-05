// import React, { Component } from "react";
// import { Container, ListGroup, ListGroupItem, Button } from "reactstrap";
// import { CSSTransition, TransitionGroup } from "react-transition-group";
// import { connect } from "react-redux";
// import { getActivs } from "../../Store/Actions/activityAction";
// import PropTypes from "prop-types";
// // import Carousel from "react-bootstrap/Carousel";

// class Activities extends Component {
//   static propTypes = {
//     activities: PropTypes.object.isRequired
//   };
//   componentDidMount() {
//     this.props.getActivs();
//   }
//   render() {
//     const Activities = ({ Activities }) => {
//       const { index, activities } = activities;
//       return (
//         <div id={`card-${index}`} className="card">
//           {/* <img src={picture} alt={city} /> */}
//           <div className="details">
//             <span className="index">{index + 1}</span>
//             <p className="location">
//               {activities.city}
//               <br />
//               {activities.address}
//             </p>
//             <ul className="features">
//               <li className="icon-bed">
//                 {activities.titles} <span>Title</span>
//               </li>
//               {/* <li className="icon-bath">
//             {bathrooms} <span>bathrooms</span>
//           </li> */}
//               {/* <li className="icon-car">
//             {carSpaces} <span>parking spots</span>
//           </li> */}
//             </ul>
//           </div>
//         </div>
//       );
//     };
//   }
// }

// // Cards.propTypes = {
// //   activities: PropTypes.object.isRequired
// // };

// // export default Activities;

// export default connect(
//   mapStateToProps,
//   { getActivs }
// )(Activities);

// //   render() {
// //     const { activities } = this.props;
// //     return (
// //       <Container>
// //         <Carousel>
// //           <TransitionGroup className="activity-list">
// //             {activities &&
// //               activities.map(activities => {
// //                 return (
// //                   <Carousel.Item>
// //                     <img
// //                       className="d-block w-100"
// //                       src="holder.js/800x400?text=First slide&bg=373940"
// //                       alt="First slide"
// //                     />
// //                     <Carousel.Caption>
// //                       <h3>{activities.title}</h3>
// //                       <p>
// //                         Nulla vitae elit libero, a pharetra augue mollis
// //                         interdum.
// //                       </p>
// //                     </Carousel.Caption>
// //                   </Carousel.Item>
// //                 );
// //               })}
// //           </TransitionGroup>
// //         </Carousel>
// //       </Container>
// //     );
// //   }
// // }

// // const mapStateToProps = state => {
// //   return {
// //     cards: state.cardsObj.cards
// //   };
// // };
