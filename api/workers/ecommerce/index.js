"use strict";

const extraction = async (data) => {
  console.log("extraction...");
  return {
    Success: "Data extracted successfully",
  };
};

module.exports = async (data) => {
  return await extraction(data);
};
