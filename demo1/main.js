"use strict";
// exports.__esModule = true;
// const a = 7;
var projectsList = [
  {
    id: 1,
    name: "ngoc",
  },
  {
    id: 12,
    name: "nga",
  },
];
function showproj(data) {
  // console.log(data);
  data.map(function (pr) {
    console.log(pr);
    return "".concat(pr.name);
  });
  return data;
}
showproj(projectsList);
