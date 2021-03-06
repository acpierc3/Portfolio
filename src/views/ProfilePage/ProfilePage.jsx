import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
// import Camera from "@material-ui/icons/Camera";
import Palette from "@material-ui/icons/Palette";
// import Favorite from "@material-ui/icons/Favorite";
import LocationCity from "@material-ui/icons/LocationCity";
import Build from "@material-ui/icons/Build";

// core components
import Header from "components/Header/Header.jsx";
import FooterClean from "components/Footer/FooterClean.jsx";
import Button from "components/CustomButtons/Button.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import HeaderLinksSocialMedia from "components/Header/HeaderLinksSocialMedia.jsx";
import NavPills from "components/NavPills/NavPills.jsx";
import Parallax from "components/Parallax/Parallax.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import Badge from "components/Badge/Badge.jsx";
import Muted from "components/Typography/Muted.jsx";

import profile from "assets/img/faces/adam2.png";
import robofriends from "assets/img/examples/projects/robofriends.png";
import burgerBuilder from "assets/img/examples/projects/burgerBuilder.png";
import faceRecognition from "assets/img/examples/projects/faceRecognition.png";

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
import zenith from "assets/img/examples/logos/zenith.png";
import remason from "assets/img/examples/logos/remason.png";
import ncstate from "assets/img/examples/logos/ncstate.png";

import profilePageStyle from "assets/jss/material-kit-react/views/profilePage.jsx";

class ProfilePage extends React.Component {
  render() {
    const { classes, ...rest } = this.props;
    const imageClasses = classNames(
      classes.imgRaised,
      classes.imgRoundedCircle,
      classes.imgFluid
    );
    
    return (
      <div>
        <Header
          color="transparent"
          brand="Adam Pierce"
          rightLinks={<HeaderLinksSocialMedia />}
          fixed
          changeColorOnScroll={{
            height: 200,
            color: "info"
          }}
          {...rest}
        />
        <Parallax medium filter image={require("assets/img/bg3.jpg")} />
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
                        <i className={"fa fa-address-book"} />
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
                A software engineer with extensive experience in industrial automation software, trained in web development.{" "}
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
                        tabIcon: Build,
                        tabContent: (
                          <div style={{overflowX: 'hidden'}}>
                            <h4 className={classes.title}>Skills</h4>
                            <GridContainer justify="center" >
                              <GridItem xs={7} sm={7} md={4}>
                                <Card
                                  raised
                                  style={{
                                    backgroundColor: "#000",
                                    width: "80%"
                                  }}
                                >
                                <img
                                  style={{height: "auto", width: "100%", display: "block"}}
                                  className={classes.imgCardTop}
                                  src={reactImg}
                                  alt="React"
                                />
                                  <CardBody
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
                                  style={{
                                    backgroundColor: "#000",
                                    width: "80%"
                                  }}
                                >
                                <img
                                  style={{height: "auto", width: "100%", display: "block"}}
                                  className={classes.imgCardTop}
                                  src={git}
                                  alt="git"
                                />
                                  <CardBody
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
                                  raised
                                  style={{
                                    backgroundColor: "#000",
                                    width: "80%"
                                  }}
                                >
                                <img
                                  style={{height: "auto", width: "100%", display: "block"}}
                                  className={classes.imgCardTop}
                                  src={css}
                                  alt="CSS"
                                />
                                  <CardBody
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
                              <GridItem xs={7} sm={7} md={4}>
                                <Card
                                  raised
                                  style={{
                                    backgroundColor: "#000",
                                    width: "80%"
                                  }}
                                >
                                <img
                                  style={{height: "auto", width: "100%", display: "block"}}
                                  className={classes.imgCardTop}
                                  src={js}
                                  alt="js"
                                />
                                  <CardBody
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
                                  raisd
                                  style={{
                                    backgroundColor: "#000",
                                    width: "80%"
                                  }}
                                >
                                <img
                                  style={{height: "auto", width: "100%", display: "block"}}
                                  className={classes.imgCardTop}
                                  src={postgres}
                                  alt="PostgreSQL"
                                />
                                  <CardBody
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
                                  raised
                                  style={{
                                    backgroundColor: "#000",
                                    width: "80%"
                                  }}
                                >
                                <img
                                  style={{height: "auto", width: "100%", display: "block"}}
                                  className={classes.imgCardTop}
                                  src={deltav}
                                  alt="DeltaV"
                                />
                                  <CardBody
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
                              <GridItem xs={7} sm={7} md={4}>
                                <Card
                                  raised
                                  style={{
                                    backgroundColor: "#000",
                                    width: "80%"
                                  }}
                                >
                                <img
                                  style={{height: "auto", width: "100%", display: "block"}}
                                  className={classes.imgCardTop}
                                  src={node}
                                  alt="Node"
                                />
                                  <CardBody
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
                                  raised
                                  style={{
                                    backgroundColor: "#000",
                                    width: "80%"
                                  }}
                                >
                                <img
                                  style={{height: "auto", width: "100%", display: "block"}}
                                  className={classes.imgCardTop}
                                  src={redux}
                                  alt="Redux"
                                />
                                  <CardBody
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
                                  raised
                                  style={{
                                    backgroundColor: "#000",
                                    width: "80%"
                                  }}
                                >
                                <img
                                  style={{height: "auto", width: "100%", display: "block"}}
                                  className={classes.imgCardTop}
                                  src={html}
                                  alt="HTML"
                                />
                                  <CardBody
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
                          <div style={{overflowX: 'hidden', overflowY: 'hidden'}}>
                          <Muted><p>Note that since the Apps are hosted by Heroku, they will take a few seconds to load initially</p></Muted>
                            <GridContainer justify="center" direct="column" spacing={40}>
                              <GridItem
                                xs={12}
                                sm={12}
                                md={12}
                                className={classes.gridItem}
                              >
                                <Card profile plain className={classes.card}>
                                  <GridContainer>
                                    <GridItem xs={12} sm={12} md={5}>
                                      <CardHeader image plain>
                                        <a href="https://sandwich-builder.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                                          <img src={burgerBuilder} alt="..." />
                                        </a>
                                      </CardHeader>
                                    </GridItem>
                                    <GridItem xs={12} sm={12} md={7}>
                                      <CardBody plain>
                                        <h4>
                                          Burger Builder
                                        </h4>
                                        <Muted>
                                          <h6>React, Redux</h6>
                                        </Muted>
                                        <p className={classes.description}>
                                          Lightning fast and responsive React app for building and ordering custom burgers.
                                          Order info and customer data all stored in a Firebase database.
                                        </p>
                                      </CardBody>
                                    </GridItem>
                                  </GridContainer>
                                </Card>
                              </GridItem>
                              <GridItem
                                xs={12}
                                sm={12}
                                md={12}
                                className={classes.gridItem}
                              >
                                <Card profile plain className={classes.card}>
                                  <GridContainer>
                                    <GridItem xs={12} sm={12} md={5}>
                                      <CardHeader image plain>
                                        <a href="https://apierce-facerecognition.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                                          <img src={faceRecognition} alt="..." />
                                        </a>
                                      </CardHeader>
                                    </GridItem>
                                    <GridItem xs={12} sm={12} md={7}>
                                      <CardBody plain>
                                        <h4>
                                          Facial Recognition
                                        </h4>
                                        <Muted>
                                          <h6>Node, PostgreSQL, React, Redux</h6>
                                        </Muted>
                                        <p className={classes.description}>
                                          App that auto detects faces in photos by connecting to Clarafai's facial recognition API.
                                          Complete with user login and register pages, with backend built on Node.js and database using PostgreSQL.
                                        </p>
                                      </CardBody>
                                    </GridItem>
                                  </GridContainer>
                                </Card>
                              </GridItem>
                              <GridItem
                                xs={12}
                                sm={12}
                                md={12}
                                className={classes.gridItem}
                              >
                                <Card profile plain className={classes.card}>
                                  <GridContainer>
                                    <GridItem xs={12} sm={12} md={5}>
                                      <CardHeader image plain>
                                        <a href="https://apierce-robofriends.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                                          <img src={robofriends} alt="..." />
                                        </a>
                                      </CardHeader>
                                    </GridItem>
                                    <GridItem xs={12} sm={12} md={7}>
                                      <CardBody plain>
                                        <h4>
                                          Robofriends App
                                        </h4>
                                        <Muted>
                                          <h6>React, Redux</h6>
                                        </Muted>
                                        <p className={classes.description}>
                                          Quick and fun app retrieving a database of robots from a psuedo-backend using API calls.
                                          Later rebuilt using redux, for learning purposes.
                                        </p>
                                      </CardBody>
                                    </GridItem>
                                  </GridContainer>
                                </Card>
                              </GridItem>
                              <GridItem
                                xs={12}
                                sm={12}
                                md={5}
                                className={classes.gridItem}>
                              </GridItem>
                            </GridContainer>
                          </div>
                        )
                      },
                      {
                        tabButton: "Work History",
                        tabIcon: LocationCity,
                        tabContent: (
                          <div style={{overflowX: 'hidden', overflowY: 'hidden'}}>
                            <GridContainer justify="center" direct="column" spacing={40}>
                              <GridItem
                                xs={12}
                                sm={12}
                                md={12}
                                className={classes.gridItem}
                              >
                                <Card profile plain className={classes.card}>
                                  <GridContainer>
                                    <GridItem xs={4} sm={4} md={4}>
                                      <CardHeader image plain>
                                      <a href="https://www.zenithtechnologies.com/" target="_blank" rel="noopener noreferrer">
                                          <img src={zenith} alt="zenith" width="50" />
                                        </a>
                                      </CardHeader>
                                    </GridItem>
                                    <GridItem xs={7} sm={7} md={7}>
                                      <CardBody plain className={classes.cardTitle}>
                                        <h4 >
                                          Zenith Technologies
                                        </h4>   
                                        <h6>2015-2018</h6>
                                        <Muted>
                                          <p>
                                            Automation SoftwareEngineer working on Genentech's new Purification Suite software
                                            through design, implementation, and testing stages.
                                          </p>
                                        </Muted>
                                      </CardBody>
                                    </GridItem>
                                  </GridContainer>
                                </Card>
                              </GridItem>
                              <GridItem
                                xs={12}
                                sm={12}
                                md={12}
                                className={classes.gridItem}
                              >
                                <Card profile plain className={classes.card}>
                                  <GridContainer>
                                    <GridItem xs={4} sm={4} md={4}>
                                      <CardHeader image plain>
                                      <a href="https://remason.com/" target="_blank" rel="noopener noreferrer">
                                          <img src={remason} alt="r.e. mason" width="50" />
                                        </a>
                                      </CardHeader>
                                    </GridItem>
                                    <GridItem xs={7} sm={7} md={7}>
                                      <CardBody plain className={classes.cardTitle}>
                                        <h4 >
                                          R. E. Mason Company
                                        </h4>   
                                        <h6>2011-2015</h6>
                                        <Muted>
                                          <p>
                                            Automation Software Engineer working on various capital projects for clients including
                                            Biogen, Mallinckrodt Pharmaceuticals, Grifols, Weyerhaeuser.
                                          </p>
                                        </Muted>
                                      </CardBody>
                                    </GridItem>
                                  </GridContainer>
                                </Card>
                              </GridItem>
                              <GridItem
                                xs={12}
                                sm={12}
                                md={12}
                                className={classes.gridItem}
                              >
                                <Card profile plain className={classes.card}>
                                  <GridContainer>
                                    <GridItem xs={4} sm={4} md={4}>
                                      <CardHeader image plain>
                                      <a href="https://www.ncsu.edu/" target="_blank" rel="noopener noreferrer">
                                          <img src={ncstate} alt="n.c. state" width="1" />
                                        </a>
                                      </CardHeader>
                                    </GridItem>
                                    <GridItem xs={7} sm={7} md={7}>
                                      <CardBody plain className={classes.cardTitle}>
                                        <h4 >
                                          N.C. State
                                        </h4>   
                                        <h6>2008-2013</h6>
                                        <Muted>
                                          <p>
                                            Bachelor of Science in Chemical Engineering, GPA 3.67
                                          </p>
                                          <p>
                                            Completed the co-operative education program, where I alternated 
                                            semesters of study with semesters of work with R. E. Mason Company 
                                            for three semesters of work total. This led to full time 
                                            employment at R. E. Mason after I graduated.
                                          </p>
                                        </Muted>
                                      </CardBody>
                                    </GridItem>
                                  </GridContainer>
                                </Card>
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
        <FooterClean />
      </div>
    );
  }
}

export default withStyles(profilePageStyle)(ProfilePage);
