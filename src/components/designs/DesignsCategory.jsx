import React from "react";
import { useParams } from "react-router";

const DesignsCategory = () => {
  const { category } = useParams();
  return <div>DesignsCategory</div>;
};

export default DesignsCategory;
