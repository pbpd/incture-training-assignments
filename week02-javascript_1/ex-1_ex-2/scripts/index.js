'use strict';

let achievementId = 0;

function addAchivement() {
  let element = document.createElement('div');
  element.classList = 'field mb-5 is-horizontal';
  achievementId++;
  element.id = `achievement-${achievementId}`;

  element.innerHTML = `<label class="label mr-5">Achievement ${achievementId}</label>
  <div class="control mr-5">
    <textarea
      class="textarea achievement-text"
      placeholder="frontend developer"
      style="width: 500px"
    ></textarea>
  </div>
  <button type="button" class="button is-danger" onclick="removeAchievement(${achievementId})">Remove</button>`;

  document.getElementById('achievements').appendChild(element);
}

function removeAchievement(id) {
  document.getElementById(`achievement-${id}`).remove();
}

class candidateData {
  constructor(
    firstName,
    lastName,
    gender,
    age,
    specialization,
    experience,
    achievements
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.gender = gender;
    this.age = age;
    this.specialization = specialization;
    this.experience = experience;
    this.achievements = achievements;
  }

  saveInLocalStorage(newData) {
    let persistedData = JSON.parse(localStorage.getItem('candidateData'));
    let arr = [];

    if (persistedData) {
      arr = persistedData;
    }
    arr.push(newData);
    localStorage.setItem('candidateData', JSON.stringify(arr));
  }

  persistData() {
    let newData = {
      firstName: this.firstName,
      lastName: this.lastName,
      gender: this.gender,
      age: this.age,
      specialization: this.specialization,
      experience: this.experience,
      achievements: this.achievements,
    };

    this.saveInLocalStorage(newData);
  }
}

let button = document
  .getElementById('submit')
  .addEventListener('click', submitData);

function getElementValue(id) {
  return document.getElementById(id).value;
}

function submitData(e) {
  e.preventDefault();

  let firstName = getElementValue('firstName');
  let lastName = getElementValue('lastName');
  let gender = getElementValue('gender');
  let age = getElementValue('age');
  let specialization = getElementValue('specialization');
  let experience = getElementValue('experience');

  let newCandidateData = new candidateData(
    firstName,
    lastName,
    gender,
    age,
    specialization,
    experience
  );

  newCandidateData.persistData();
}

let persistedData = JSON.parse(localStorage.getItem('candidateData'));
console.log(persistedData);
