import {Row, Container} from "reactstrap";
import React from "react";

class RightImageColumn extends React.Component {
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

    return (
      <section bg-white className="pb-5">
        <Container className="p-0">
          <Row>
            {isMobile ? (
              <div className="col-md-6 col-sm-12 p-0">
                <img  alt={this.props.alt} src={this.props.right} />
              </div>
            ) : (
              false
            )}
            <div className="d-flex col-md-6 col-sm-12 align-items-center">
              <Container>
                <h3 className="text-left display-3 text-uppercase pt-4">{this.props.headline}</h3>
                {this.props.firstSecondaryHeadline ? <h4 className="text-left display-4 text-uppercase"> {this.props.firstSecondaryHeadline} </h4> : false}
                <p className="text-left"> {this.props.firstSecondaryText}</p>
                {this.props.secondSecondaryHeadline ? <h4 className="text-left display-4 text-uppercase"> {this.props.secondSecondaryHeadline} </h4> : false}
                {this.props.secondSecondaryText ? <p className="text-left"> {this.props.secondSecondaryText} </p> : false}
                <p className="text-left"> {this.props.text}</p>
              </Container>
            </div>
            {!isMobile ? (
              <div className="col-md-6 col-sm-12 p-0">
                <img className={""} alt={this.props.alt} src={this.props.right} />
              </div>
            ) : (
              false
            )}
          </Row>
        </Container>
      </section>
    );
  }
}

export default RightImageColumn;
