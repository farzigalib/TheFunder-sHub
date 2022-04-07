import React from "react";
import { Link } from "react-router-dom";

const ViewStartUpPage = () => {
  return (
    <div>
      <h1>View StartUp Page</h1>
      <Link to={"/createrequest"}>Click Me</Link>
    </div>
  );
};

export default ViewStartUpPage;
