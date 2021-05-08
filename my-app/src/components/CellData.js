

import React, { useState } from "react";

const Data= [];
for (let i=0;i<2;i++){
  Data.push({
    processed:'tprocessed ${i}',
    odd:'odd ${i}',
    GMDHMS:'GNKd ${i}',
    US:'US ${i}',
    FMIN:'tmin ${i}',
    FMAX:'tmax ${i}',
    DF:'tDF ${i}',
    N:'tpN ${i}',
    specter:'tinspector ${i}',
    crec:'crec ${i}',

  })
}

export const CellData = ( props ) => {
  
  
   
  return (

    <>
    <div> </div>
    </>
  );
};