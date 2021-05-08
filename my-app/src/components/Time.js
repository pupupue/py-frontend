import React, { useState, useEffect } from "react";

export const Time = () => {
  var [date, setDate] = useState(new Date());

  useEffect(() => {
    var timer = setInterval(() => setDate(new Date()), 1000);
    return function cleanup() {
      clearInterval(timer);
    };
  });

  return (
    <div>
      <p>Date : {date.toLocaleDateString()} Time : {date.toLocaleTimeString()}</p>
      
    </div>
  );
};
