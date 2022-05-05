'use strict';

const studentJson = `[
  {
    "id": "1",
    "name": "John Doe",
    "branch": "Information Technology",
    "totalSemesters": "8",
    "subject": [
      {
        "subId": "101",
        "subName": "Data Structures and Algorithms"
      },
      {
        "subId": "102",
        "subName": "Compiler Theory"
      },
      {
        "subId": "103",
        "subName": "Realational Database Management System"
      },
      {
        "subId": "104",
        "subName": "Microcontroller"
      }
    ]
  },
  {
    "id": "2",
    "name": "Jane Doe",
    "branch": "Computer Science Engineering",
    "totalSemesters": "8",
    "subject": [
      {
        "subId": "101",
        "subName": "Data Structures and Algorithms"
      },
      {
        "subId": "105",
        "subName": "IOT"
      },
      {
        "subId": "106",
        "subName": "Python Programming"
      },
      {
        "subId": "107",
        "subName": "OOP"
      }
    ]
  },
  {
    "id": "3",
    "name": "John Cena",
    "branch": "Electronics and Telecommunication Enginnering",
    "totalSemesters": "8",
    "subject": [
      {
        "subId": "108",
        "subName": "Basics of Programming"
      },
      {
        "subId": "109",
        "subName": "Computer Architecture"
      },
      {
        "subId": "110",
        "subName": "Embedded Systems"
      },
      {
        "subId": "101",
        "subName": "Data Structures and Algorithms"
      }
    ]
  }
]`;

const obj = JSON.parse(studentJson);

function buildTable(data) {
  let tableBody = document.getElementById('tableBody');

  for (let i = 0; i < data.length; i++) {
    let subjectsCol = '';

    for (let j = 0; j < data[i].subject.length; j++) {
      let subjectsRow = `
        <tr>
          <td>${data[i].subject[j].subName} (${data[i].subject[j].subId})</td>
        </tr>`;

      subjectsCol += subjectsRow;
    }

    let row = `
      <tr class="border-b">
        <td class="table-body-id">
          ${data[i].id}
        </td>
        <td class="table-body-row">
          ${data[i].name}
        </td>
        <td class="table-body-row">
          ${data[i].branch}
        </td>
        <td class="table-body-row">
          ${data[i].totalSemesters}
        </td>
        <td class="table-body-row">
          <table class="min-w-full">
            <tbody>
              ${subjectsCol}
            </tbody>
          </table>
        </td>
      </tr>`;

    tableBody.innerHTML += row;
  }
}

buildTable(obj);
