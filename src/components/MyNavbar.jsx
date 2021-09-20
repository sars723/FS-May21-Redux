import React from "react";
import { useState } from "react";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import { withRouter, Link } from "react-router-dom";
import { connect } from "react-redux";
import { fillJobsAction } from "../actions";

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({
  fetchJobsWithSearch: (search) => dispatch(fillJobsAction(search)),
});
const MyNavbar = ({ fetchJobsWithSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");
  /*  const [searchCategory, setSearchCategory] = useState(""); */

  /*   const handleSubmit = (e) => {
    e.preventDefault();
    props.setSearchCategory(searchCategory);
  }; */
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">Job Search Engine</Navbar.Brand>
      <Nav className="mr-auto">
        <Link className="nav-link" to="/">
          Home
        </Link>
        {/* <p onClick={() => props.history.push("/favourites", props.job)}>
          {props.job.company_name}
        </p> */}
        <Link className="nav-link" to="/favourites">
          Favourite
        </Link>
      </Nav>
      <Form inline>
        <FormControl
          type="text"
          placeholder="Search"
          className="mr-sm-2"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <Button
          variant="outline-info"
          onClick={() => fetchJobsWithSearch(searchQuery)}
        >
          Search with title
        </Button>
      </Form>
      {/*  <Form inline className="ml-5">
        <FormControl
          type="text"
          placeholder="Search"
          className="mr-sm-2"
          value={searchCategory}
          onChange={(e) => setSearchCategory(e.target.value)}
        />
        <Button
          variant="outline-info"
          onClick={fetchJobsWithSearch(searchCategory)}
        >
          Search with Category
        </Button>
      </Form> */}
    </Navbar>
  );
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(MyNavbar));
