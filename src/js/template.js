"use strict";

const template = {
  users: [
    {
      name: "Никита",
      age: 9,
    },
    {
      name: "Стас",
      age: 39,
    },
    {
      name: "Поц",
      age: 20,
    },
  ],

  table: function (users) {
    let text = `<tbody>`;
    users.forEach((e) => {
      text += `<tr>
    <td>${e.name}</td>
    <td>${e.age}</td>
    </tr>`;
    });
    text += `</tbody>`;
    return text;
  },
};

export default template;
