import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
import Camera from "@material-ui/icons/Camera";
import Palette from "@material-ui/icons/Palette";
import Favorite from "@material-ui/icons/Favorite";
// core components
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import Button from "components/CustomButtons/Button.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import NavPills from "components/NavPills/NavPills.jsx";
import Parallax from "components/Parallax/Parallax.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import Badge from "components/Badge/Badge.jsx";

import profile from "assets/img/faces/adam2.png";

import studio1 from "assets/img/examples/studio-1.jpg";
// import studio2 from "assets/img/examples/studio-2.jpg";
import studio3 from "assets/img/examples/studio-3.jpg";
// import studio4 from "assets/img/examples/studio-4.jpg";
// import studio5 from "assets/img/examples/studio-5.jpg";
import work1 from "assets/img/examples/olu-eletu.jpg";
import work2 from "assets/img/examples/clem-onojeghuo.jpg";
import work3 from "assets/img/examples/cynthia-del-rio.jpg";
import work4 from "assets/img/examples/mariya-georgieva.jpg";
import work5 from "assets/img/examples/clem-onojegaw.jpg";

import reactImg from "assets/img/examples/logos/react.png";
import js from "assets/img/examples/logos/js.png";
import css from "assets/img/examples/logos/css.png";
import html from "assets/img/examples/logos/html.png";
import node from "assets/img/examples/logos/node.png";
import postgres from "assets/img/examples/logos/postgres.png";
import redux from "assets/img/examples/logos/redux.png";
import git from "assets/img/examples/logos/git.png";
import deltav from "assets/img/examples/logos/deltav.png";
import info from "assets/img/examples/logos/info.png";

import profilePageStyle from "assets/jss/material-kit-react/views/profilePage.jsx";

class ProfilePage extends React.Component {
  render() {
    const { classes, ...rest } = this.props;
    const imageClasses = classNames(
      classes.imgRaised,
      classes.imgRoundedCircle,
      classes.imgFluid
    );
    const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
    return (
      <div>
        <Header
          color="transparent"
          brand="Adam Pierce"
          rightLinks={<HeaderLinks />}
          fixed
          changeColorOnScroll={{
            height: 200,
            color: "info"
          }}
          {...rest}
        />
        <Parallax small filter image={require("assets/img/bg.jpg")} />
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div>
            <div className={classes.container} >
              <GridContainer justify="center" >
                <GridItem xs={12} sm={12} md={6}>
                  <div className={classes.profile}>
                    <div>
                      <img src={profile} alt="..." className={imageClasses} />
                    </div>
                    <div className={classes.name}>
                      <h3 className={classes.title}>Adam Pierce</h3>
                      <h6>SOFTWARE DEVELOPER</h6>
                      <Button href={"https://github.com/acpierc3"} target={"_blank"} rel={"noopener noreferrer"} justIcon link className={classes.margin5}>
                        <i className={"fab fa-github"} />
                      </Button>
                      <Button href={"mailto:adam.pierc3@gmail.com"} target={"_top"} justIcon link className={classes.margin5}>
                        <i className={"fa fa-address-book github"} />
                      </Button>
                      <Button href={"https://www.linkedin.com/in/adam-pierce-ab8a4829/"} target={"_blank"} rel={"noopener noreferrer"} justIcon link className={classes.margin5}>
                        <i className={"fab fa-linkedin"} />
                      </Button>
                    </div>
                  </div>
                </GridItem>
              </GridContainer >
              <div className={classes.description}>
                <p>
                A software engineer with extensive experience in industrial automation, trained in web development.{" "}
                </p>
              </div>
              <GridContainer justify="center" >
                <GridItem xs={12} sm={12} md={8} className={classes.navWrapper}>
                  <NavPills
                    alignCenter
                    color="primary"
                    tabs={[
                      {
                        tabButton: "Skills",
                        tabIcon: Camera,
                        tabContent: (
                          <div style={{overflowX: 'hidden'}}>
                            <GridContainer justify="center" >
                              <GridItem xs={3} sm={5} md={4}>
                                <Card
                                  background
                                  style={{
                                    backgroundColor: "#000"
                                  }}
                                >
                                <img
                                  style={{height: "auto", width: "100%", display: "block"}}
                                  className={classes.imgCardTop}
                                  src={reactImg}
                                  alt="React"
                                />
                                  <CardBody
                                    background
                                    className={classes.cardBody}
                                  >
                                    <Badge
                                      color="warning"
                                      className={classes.badge}
                                    >
                                      React.js
                                      <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">
                                        <img
                                          style={{height: "auto", width: "1rem", display: "inline", paddingInlineStart: "3px"}}
                                          className={classes.imgCardTop}
                                          src={info}
                                          alt="info"
                                        />
                                      </a> 
                                    </Badge>
                                  </CardBody>
                                </Card>
                                <Card
                                  background
                                  style={{
                                    backgroundColor: "#000"
                                  }}
                                >
                                <img
                                  style={{height: "auto", width: "100%", display: "block"}}
                                  className={classes.imgCardTop}
                                  src={git}
                                  alt="git"
                                />
                                  <CardBody
                                    background
                                    className={classes.cardBody}
                                  >
                                    <Badge
                                      color="warning"
                                      className={classes.badge}
                                    >
                                      Git
                                      <a href="https://git-scm.com/" target="_blank" rel="noopener noreferrer">
                                        <img
                                          style={{height: "auto", width: "1rem", display: "inline", paddingInlineStart: "3px"}}
                                          className={classes.imgCardTop}
                                          src={info}
                                          alt="info"
                                        />
                                      </a> 
                                    </Badge>
                                  </CardBody>
                                </Card>
                                <Card
                                  background
                                  style={{
                                    backgroundColor: "#000"
                                  }}
                                >
                                <img
                                  style={{height: "auto", width: "100%", display: "block"}}
                                  className={classes.imgCardTop}
                                  src={css}
                                  alt="CSS"
                                />
                                  <CardBody
                                    background
                                    className={classes.cardBody}
                                  >
                                    <Badge
                                      color="warning"
                                      className={classes.badge}
                                    >
                                      CSS
                                      <a href="https://www.w3schools.com/css/" target="_blank" rel="noopener noreferrer">
                                        <img
                                          style={{height: "auto", width: "1rem", display: "inline", paddingInlineStart: "3px"}}
                                          className={classes.imgCardTop}
                                          src={info}
                                          alt="info"
                                        />
                                      </a> 
                                    </Badge>
                                  </CardBody>
                                </Card>
                              </GridItem>
                              <GridItem xs={3} sm={5} md={4}>
                                <Card
                                  background
                                  style={{
                                    backgroundColor: "#000"
                                  }}
                                >
                                <img
                                  style={{height: "auto", width: "100%", display: "block"}}
                                  className={classes.imgCardTop}
                                  src={js}
                                  alt="js"
                                />
                                  <CardBody
                                    background
                                    className={classes.cardBody}
                                  >
                                    <Badge
                                      color="warning"
                                      className={classes.badge}
                                    >
                                      JavaScript
                                      <a href="https://www.javascript.com/" target="_blank" rel="noopener noreferrer">
                                        <img
                                          style={{height: "auto", width: "1rem", display: "inline", paddingInlineStart: "3px"}}
                                          className={classes.imgCardTop}
                                          src={info}
                                          alt="info"
                                        />
                                      </a> 
                                    </Badge>
                                  </CardBody>
                                </Card>
                                <Card
                                  background
                                  style={{
                                    backgroundColor: "#000"
                                  }}
                                >
                                <img
                                  style={{height: "auto", width: "100%", display: "block"}}
                                  className={classes.imgCardTop}
                                  src={postgres}
                                  alt="PostgreSQL"
                                />
                                  <CardBody
                                    background
                                    className={classes.cardBody}
                                  >
                                    <Badge
                                      color="warning"
                                      className={classes.badge}
                                    >
                                      PostgreSQL
                                      <a href="https://www.postgresql.org/" target="_blank" rel="noopener noreferrer">
                                        <img
                                          style={{height: "auto", width: "1rem", display: "inline", paddingInlineStart: "3px"}}
                                          className={classes.imgCardTop}
                                          src={info}
                                          alt="info"
                                        />
                                      </a> 
                                    </Badge>
                                  </CardBody>
                                </Card>
                                <Card
                                  background
                                  style={{
                                    backgroundColor: "#000"
                                  }}
                                >
                                <img
                                  style={{height: "auto", width: "100%", display: "block"}}
                                  className={classes.imgCardTop}
                                  src={deltav}
                                  alt="DeltaV"
                                />
                                  <CardBody
                                    background
                                    className={classes.cardBody}
                                  >
                                    <Badge
                                      color="warning"
                                      className={classes.badge}
                                    >
                                      DeltaV
                                      <a href="https://www.emerson.com/en-us/automation/deltav" target="_blank" rel="noopener noreferrer">
                                        <img
                                          style={{height: "auto", width: "1rem", display: "inline", paddingInlineStart: "3px"}}
                                          className={classes.imgCardTop}
                                          src={info}
                                          alt="info"
                                        />
                                      </a> 
                                    </Badge>
                                  </CardBody>
                                </Card>
                              </GridItem>
                              <GridItem xs={3} sm={5} md={4}>
                                <Card
                                  background
                                  style={{
                                    backgroundColor: "#000"
                                  }}
                                >
                                <img
                                  style={{height: "auto", width: "100%", display: "block"}}
                                  className={classes.imgCardTop}
                                  src={node}
                                  alt="Node"
                                />
                                  <CardBody
                                    background
                                    className={classes.cardBody}
                                  >
                                    <Badge
                                      color="warning"
                                      className={classes.badge}
                                    >
                                      Node.js
                                      <a href="https://nodejs.org/en/" target="_blank" rel="noopener noreferrer">
                                        <img
                                          style={{height: "auto", width: "1rem", display: "inline", paddingInlineStart: "3px"}}
                                          className={classes.imgCardTop}
                                          src={info}
                                          alt="info"
                                        />
                                      </a> 
                                    </Badge>
                                  </CardBody>
                                </Card>
                                <Card
                                  background
                                  style={{
                                    backgroundColor: "#000"
                                  }}
                                >
                                <img
                                  style={{height: "auto", width: "100%", display: "block"}}
                                  className={classes.imgCardTop}
                                  src={redux}
                                  alt="Redux"
                                />
                                  <CardBody
                                    background
                                    className={classes.cardBody}
                                  >
                                    <Badge
                                      color="warning"
                                      className={classes.badge}
                                    >
                                      Redux.js
                                      <a href="https://redux.js.org/" target="_blank" rel="noopener noreferrer">
                                        <img
                                          style={{height: "auto", width: "1rem", display: "inline", paddingInlineStart: "3px"}}
                                          className={classes.imgCardTop}
                                          src={info}
                                          alt="info"
                                        />
                                      </a> 
                                    </Badge>
                                  </CardBody>
                                </Card>
                                <Card
                                  background
                                  style={{
                                    backgroundColor: "#000"
                                  }}
                                >
                                <img
                                  style={{height: "auto", width: "100%", display: "block"}}
                                  className={classes.imgCardTop}
                                  src={html}
                                  alt="HTML"
                                />
                                  <CardBody
                                    background
                                    className={classes.cardBody}
                                  >
                                    <Badge
                                      color="warning"
                                      className={classes.badge}
                                    >
                                      HTML
                                      <a href="https://www.w3schools.com/html/html_intro.asp" target="_blank" rel="noopener noreferrer">
                                        <img
                                          style={{height: "auto", width: "1rem", display: "inline", paddingInlineStart: "3px"}}
                                          className={classes.imgCardTop}
                                          src={info}
                                          alt="info"
                                        />
                                      </a> 
                                    </Badge>
                                  </CardBody>
                                </Card>
                              </GridItem>


                            </GridContainer>
                          </div>
                        )
                      },
                      {
                        tabButton: "Projects",
                        tabIcon: Palette,
                        tabContent: (
                          <div style={{overflowX: 'hidden'}}>
                            <GridContainer justify="center">
                              <GridItem xs={12} sm={12} md={4}>
                                <img
                                  alt="..."
                                  src={work1}
                                  className={navImageClasses}
                                />
                                <img
                                  alt="..."
                                  src={work2}
                                  className={navImageClasses}
                                />
                                <img
                                  alt="..."
                                  src={work3}
                                  className={navImageClasses}
                                />
                              </GridItem>
                              <GridItem xs={12} sm={12} md={4}>
                                <img
                                  alt="..."
                                  src={work4}
                                  className={navImageClasses}
                                />
                                <img
                                  alt="..."
                                  src={work5}
                                  className={navImageClasses}
                                />
                              </GridItem>
                            </GridContainer>
                          </div>
                        )
                      },
                      {
                        tabButton: "Work History",
                        tabIcon: Favorite,
                        tabContent: (
                          <div style={{overflowX: 'hidden'}}>
                            <GridContainer justify="center">
                              <GridItem xs={12} sm={12} md={4}>
                                <img
                                  alt="..."
                                  src={work4}
                                  className={navImageClasses}
                                />
                                <img
                                  alt="..."
                                  src={studio3}
                                  className={navImageClasses}
                                />
                              </GridItem>
                              <GridItem xs={12} sm={12} md={4}>
                                <img
                                  alt="..."
                                  src={work2}
                                  className={navImageClasses}
                                />
                                <img
                                  alt="..."
                                  src={work1}
                                  className={navImageClasses}
                                />
                                <img
                                  alt="..."
                                  src={studio1}
                                  className={navImageClasses}
                                />
                              </GridItem>
                            </GridContainer>
                          </div>
                        )
                      }
                    ]}
                  />
                </GridItem>
              </GridContainer>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default withStyles(profilePageStyle)(ProfilePage);
