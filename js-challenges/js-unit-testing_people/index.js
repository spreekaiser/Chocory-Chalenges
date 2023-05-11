export function getFirstNames(people) {
  return people.map((person) => person.firstName);
}

export function getFullNames(people) {
  const fullNames = people.map((name) => {
    return name.firstName + " " + name.lastName;
  });
  // console.log(fullNames);
  return fullNames;
}

export function getNameAndAge(people) {
  const nameAndAge = people.map((person) => {
    return `${person.lastName} (${person.age})`;
  });
  console.log(nameAndAge);
  return nameAndAge;
}

export function getPeopleByAge(people, age) {
  return people.filter((person) => person.age === age);
}

export function getPeopleNamesOlderThan(people, age) {}

export function getPeopleByLastName(people, lastName) {}

export function findPersonById(people, id) {}

export function isAnyoneOlderThan(people, age) {
  return people.some((person) => person.age > age);
}

export function getFullNamesSortedByAge(people) {
  const sortedArray = people.sort((a, b) => {
    return a.age - b.age;
  });
  return getFullNames(sortedArray);
}
