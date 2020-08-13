import {Row, Container, Jumbotron, Button} from "reactstrap";
import React from "react";

class SpotLightContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobile: false
    };
  }
  async componentDidMount() {
    window.addEventListener("resize", this.resize.bind(this));
    this.resize();
  }

  resize() {
    this.setState({isMobile: window.innerWidth <= 760});
  }
  render() {
    const isMobile = this.state.isMobile;
    const jumbotron = {
      backgroundImage: !isMobile ? `url(${this.props.image})` : `url(${this.props.mobileImage})`,
      backgroundSize: "cover",
      minHeight: !isMobile ? this.props.imageHeight : this.props.mobileHeight,
      backgroundPosition: "center",
      display: "flex",
      alignItems: "center"
    };
    const gradientJumbotron = {
      backgroundImage: `linear-gradient(rgba(41, 35, 35, 0), rgb(10 10 10 / 69%), rgb(10 10 10 / 75%), rgb(10, 10, 10), rgb(10, 10, 10), rgb(10, 10, 10),rgb(10, 10, 10), rgb(10, 10, 10)), url(${this.props.image})`,
      backgroundSize: "contain",
      backgroundRepeat: "no-repeat",
      minHeight: !isMobile ? this.props.imageHeight : this.props.mobileHeight,
      display: "flex",
      alignItems: "center",
      height: ""
    };
    const gradientImage = {
      backgroundImage: `linear-gradient(rgba(41, 35, 35, 0), rgb(38 38 38 / 0%), rgb(38 38 38 / 0%)), url(${this.props.image})`,
      height: `18vh`,
      backgroundPosition: "top",
      backgroundSize: "contain",
      backgroundRepeat: "no-repeat",
      backgroundColor: "#262626"
    };
    return (
      <div>
        {this.props.fullcontainer ? (
          <Jumbotron style={jumbotron}></Jumbotron>
        ) : (
          <div>
            {this.state.isMobile ? <div style={gradientImage}>{/* <img className={""} alt="Giro Helmet Safety Test" src={this.props.image} /> */}</div> : false}
            <Jumbotron className = "pb-7" style={!this.state.isMobile ? gradientJumbotron : {background: "#262626"}}>
              <Container>
                <Row>
                  <div className="d-flex col-sm-12 flex-column">
                    <h3 className="text-left display-3 text-white text-uppercase">Proven Performance</h3>
                    <p className="text-left text-white">
                      {" "}
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                      <br></br>
                      <br></br>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                      <br></br>
                      <br></br>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                      <br></br>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                      consequat. Duis aute irure dolor in reprehenderit in voluptate.
                    </p>
                    <div className={this.state.isMobile ? "d-flex flex-column" : "d-flex align-items-center justify-items-center"}>
                      <Button  color="warning" size="lg" type="button" className= {isMobile ? "btn text-uppercase mb-4 mt-4" : "btn text-uppercase mr-3"}>
                        This is a Call To Action
                      </Button>
                      <Button  color="warning" size="lg" type="button" className={isMobile ? "btn text-uppercase mt-3" : "btn text-uppercase"}>
                        This is a Call To Action 2
                      </Button>
                    </div>
                  </div>
                </Row>
              </Container>
            </Jumbotron>
          </div>
        )}
      </div>
    );
  }
}

export default SpotLightContainer;
