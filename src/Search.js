import {Card, CardImg, InputGroup, CardBody, Input, CardSubtitle, Button, Container, Row, Col, ListGroup} from "reactstrap";
import React from "react";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allUsers: [],
      userSearch: "",
      isEditing: false,
    };
  }
  //default user list
  apiUsers = [];
  componentDidMount() {
    fetch("https://randomuser.me/api/?results=100")
      .then(res => res.json())
      .then(
        result => {
          this.apiUsers = result.results.sort(function(a, b){
            if(a.name.last < b.name.last) { return -1; }
            if(a.name.last > b.name.last) { return 1; }
            return 0;
        })
        console.log(this.apiUsers, 'USER')
          //set default user list
          this.setState({
            allUsers: result.results
          });
        },
        error => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
  }

  handleChange = event => {
    this.setState({
      userSearch: event.target.value
    });
    const {allUsers} = this.state;
    if (event.target.value.length > 3) {
      this.setState({
        isEditing: true,
        allUsers: allUsers.filter(user => user.email.includes(event.target.value) || user.name.last.includes(event.target.value))
      });
    } else {
      //else show default user list
      this.setState({
        allUsers: this.apiUsers
      });
    }
  };

  render() {
    const {isEditing, allUsers, userSearch} = this.state;
    console.log(allUsers, "TOP TJREE");
    return (
      <>
        <Container>
          <Row className="my-5 row-grid align-items-center">
            <InputGroup>
              <Input onChange={e => this.handleChange(e)} placeholder="Type something to search" />
            </InputGroup>
          </Row>

          {allUsers.length > 0 ? (
            allUsers.map((user, index) => (
              <Card>
                <CardBody>
                  <a href="#pablo" onClick={e => e.preventDefault()}>
                    <img alt="..." className="rounded-circle img-center img-fluid shadow shadow-lg--hover" src={user.picture.medium} style={{width: "140px"}} />
                  </a>
                  <div className="pt-4 text-center">
                    <h5 className="h3 title">
                      <span className="d-block mb-1">
                        {user.name.first} {user.name.last}
                      </span>
                      <small className="h4 font-weight-light text-muted">Phone Number : {user.phone}</small>
                    </h5>
                  </div>
                </CardBody>
              </Card>
            ))
          ) : isEditing & (userSearch.length > 1) ? (
            <h2>No Results</h2>
          ) : (
            false
          )}
        </Container>
      </>
    );
  }
}

export default Search;
