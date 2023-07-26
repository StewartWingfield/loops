let numbers = 0
do {
    numbers ++
    console.log(numbers)
} while (numbers < 1000) 


const person = {
    firstName: 'Jane',
    lastName: 'Doe',
    birthDate: 'Jan 5, 1925',
    gender: 'female'
}

console.log(Object.keys(person))

for (const [key, value] of Object.entries(person)) {
    console.log(`${key}: ${value}`);
  }

const arrayOfPersons = [{
    firstName: 'Jane',
    lastName: 'Doe',
    birthDate: 'Jan 5, 1925',
    gender: 'female'
},     

{firstName: 'Abraham',
lastName: 'Lincoln',
birthDate: 'February 12, 1809',
gender: 'male'
},

{firstName: 'Danielle',
lastName: 'Puga',
birthDate: 'July 23, 1996',
gender: 'female'
}, ]



/* const oddYear = (arrayOfPersons) => {
    for (const person of arrayOfPersons) {
      const birthYear = new Date(person.birthDate).getFullYear()
      if (birthYear % 2 !== 0) {
        console.log(`${person.firstName}'s birth year is odd: ${birthYear}`)
      }
    }
  }

  oddYear(arrayOfPersons) */

const oddYear = (arrayOfPersons) => {
    for (const person of arrayOfPersons) {
        let newDate = person.birthDate
        let newNumb = newDate.match(/\d/g)
        let finalNumb = newNumb.slice(-1)
        if (finalNumb % 2 !== 0) {
            console.log(`${person.firstName}'s birth year is odd: ${newDate}`)
        }
    }
}

oddYear(arrayOfPersons)

arrayOfPersons.map((person) => {
    return {...person}
  }).forEach((person) => {
    console.log(`The maps are: First Name: ${person.firstName}, Last Name: ${person.lastName}, Birth Date: ${person.birthDate}, Gender ${person.gender}`)
  });

  const onlyMales = arrayOfPersons.filter((person) => person.gender === 'male')

onlyMales.forEach((person) => {
  console.log(`The only males are: First Name: ${person.firstName}, Last Name: ${person.lastName}, Birth Date: ${person.birthDate}, Gender: ${person.gender}`)
});

jan1990 = (birthDate) => {
    const dateToCompare = new Date('1990-01-01')
    const givenDate = new Date(birthDate)
    return givenDate < dateToCompare
  }

  for (const person of arrayOfPersons) {
    const isBefore1990 = jan1990(person.birthDate)
    console.log(`${person.firstName} ${person.lastName} is before Jan 1, 1990? ${isBefore1990}`)
  }


  const personsBefore1990 = arrayOfPersons.filter((person) => jan1990(person.birthDate))

personsBefore1990.forEach((person) => {
  console.log(`People born before 1990: First Name: ${person.firstName}, Last Name: ${person.lastName}, Birth Date: ${person.birthDate}, Gender: ${person.gender}`)
});


//.find 

 myFind = (arr, b) => {

  for (let i = 0; i < arr.length; i++) {

    if (b(arr[i], i, arr)) {
      return arr[i];
    }
  }
  return undefined;
}

//.findIndex

myFindIndex = (arr, c) => {
  
  for (let i = 0; i < arr.length; i++) {
    
    if (c(arr[i], i, arr)) {
      return i;
    }
  }
  
  return undefined;
}