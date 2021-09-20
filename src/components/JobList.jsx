import React from "react";
import { withRouter } from "react-router-dom";
import { Button, Badge } from "react-bootstrap";
import { connect } from "react-redux";
import { addToFavoriteCompanyThunk } from "../actions";
import { FaStar } from "react-icons/fa";

const mapStateToProps = (state) => state;
const mapDispatchToProps = (dispatch) => ({
  addToFavoriteCompanies: (companyToAdd) =>
    dispatch(addToFavoriteCompanyThunk(companyToAdd)),
});

const JobList = ({ jobb, history, addToFavoriteCompanies }) => {
  return (
    <div
      className="mx-auto d-flex justify-content-between align-items-center"
      style={{ border: "1px solid #00000033", borderRadius: 4, width: "30%" }}
    >
      {/* {console.log(job)} */}
      <p className="ml-3" onClick={() => history.push("/favourites", jobb)}>
        {jobb.company_name}
      </p>
      <Badge
        style={{ cursor: "pointer" }}
        onClick={() => addToFavoriteCompanies(jobb)}
        className="ml-3 mr-3"
        variant="info"
      >
        {" "}
        <FaStar />
      </Badge>
    </div>
  );
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(JobList));
