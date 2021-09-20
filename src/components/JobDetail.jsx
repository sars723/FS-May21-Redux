import React from "react";
import { withRouter } from "react-router-dom";
import { Container, Row, Col, ListGroup, Table } from "react-bootstrap";
export const JobDetail = (props) => {
  return (
    <Container>
      <Row>
        <Col sm={6} className="mx-auto mt-5">
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Job Details</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Company Name</td>
                <td> {props.location.state.company_name}</td>
              </tr>
              <tr>
                <td>Title</td>
                <td>{props.location.state.title}</td>
              </tr>
              <tr>
                <td>Category</td>
                <td>{props.location.state.category}</td>
              </tr>
              <tr>
                <td>Candidate required location</td>
                <td>{props.location.state.candidate_required_location}</td>
              </tr>

              <tr>
                <td>Job type</td>
                <td> {props.location.state.job_type}</td>
              </tr>
              <tr>
                <td>Salary</td>
                <td>{props.location.state.salary}</td>
              </tr>
              <tr>
                <td>more details</td>
                <td>
                  {" "}
                  <a href={props.location.state.url}>
                    {props.location.state.url}
                  </a>
                </td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};
export default withRouter(JobDetail);
