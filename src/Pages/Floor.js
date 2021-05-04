import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

export const Floor = () => {
  const param = useParams();
  const { id } = param;
  useEffect(() => {
    // api call
    console.log("also i call something to python");
    console.log(id);
  }, [id]);

  return <div>Floor {id}</div>;
};
