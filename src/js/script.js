"use strict";

import template from "./template.js";

const users = [...template.users];

function init() {
  document.getElementById("users").innerHTML = template.table(users);
}

document.getElementById("form").addEventListener("submit", (e) => {
  e.preventDefault();
  const min = +document.getElementById("min").value || -1;
  const max = +document.getElementById("max").value || 100;
  users.length = 0;
  users.push(...template.users.filter((i) => i.age > min && i.age < max));
  init();
});

init();
