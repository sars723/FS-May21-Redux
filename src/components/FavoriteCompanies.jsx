import React from "react";
import { connect } from "react-redux";
import { FaTrash } from "react-icons/fa";
import { Row, Button, Col } from "react-bootstrap";
import { removeFromFavoriteCompanyThunk } from "../actions";
import { withRouter } from "react-router";

const mapStateToProps = (state) => ({
  companies: state.favoriteCompany.companies,
});

const mapDispatchToProps = (dispatch) => ({
  removeFromCompany: (index) => dispatch(removeFromFavoriteCompanyThunk(index)),
});
const FavoriteCompanies = ({
  companies,
  removeFromCompany,
  location,
  history,
}) => {
  return (
    <Row className="mt-5">
      {console.log(location.state)}
      <Col sm={4}>
        <ul style={{ listStyle: "none" }}>
          {companies.map((company, i) => (
            <li key={i} className="my-4 d-flex justify-content-between">
              <Button
                className=""
                variant="danger"
                onClick={() => removeFromCompany(i)}
              >
                <FaTrash />
              </Button>

              <p onClick={() => history.push("/jobDetails", company)}>
                {company.company_name}
              </p>
            </li>
          ))}
        </ul>
      </Col>
    </Row>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(FavoriteCompanies));
