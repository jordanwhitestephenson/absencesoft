import {Jumbotron, Container, Row, Button} from "reactstrap";
import React from "react";

class JumbotronContainer extends React.Component {
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
      alignItems: "center",
      marginBottom: !isMobile ? "2em" : "6em"
    };
    const gradientJumbotron = {
      backgroundImage: !isMobile ? `url(${this.props.image})` : `linear-gradient(rgb(41 35 35 / 0%), rgb(10 10 10), rgb(10 10 10), rgb(10 10 10), rgb(10 10 10)), url(${this.props.mobileImage})`,
      backgroundSize: !isMobile ? "cover" : "contain",
      backgroundRepeat: "no-repeat",
      minHeight: !isMobile ? this.props.imageHeight : this.props.mobileHeight,
      display: "flex",
      alignItems: "center",
   
      
    };
    return (
      <div>
        {this.props.fullcontainer ? (
          <Jumbotron style={jumbotron}></Jumbotron>
        ) : (
          <Jumbotron style={gradientJumbotron} className={isMobile ? "pb-7 pt-7 m-0" : "pb-7 pt-7 mb-7"}>
            <Container>
              <Row>
                <div className="d-flex col-md-6 col-sm-12 flex-column ">
                  <h3 className="text-let display-3 text-white text-uppercase text-left">This is Another Headline</h3>
                  <p className="text-left text-white pb-4"> {this.props.text}</p>
                  <Button color="warning" size="lg" type="button" className="btn text-uppercase">
                    This is a Call To Action
                  </Button>
                </div>
                <div className="col-md-6 col-sm-12 d-sm-none"></div>
              </Row>
            </Container>
          </Jumbotron>
        )}
      </div>
    );
  }
}

export default JumbotronContainer;
