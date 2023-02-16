//Use a do...while loop to console.log the numbers from 1 to 1000.

let count = 1;
do {
    console.log(count);
    count++
} while (count <= 1000)


// Create an object (with keys and values) called person with the following data:
// firstName: "Jane",
//     lastName: "Doe",
//         birthDate: "Jan 5, 1925",
//             gender: "female"

const person = {
    // Create an object(with keys and values) called person with the following data:
    firstName: "Jane",
    lastName: "Doe",
    birthDate: "Jan 5, 1925",
    gender: "female"
}


// Create a function that logs out the keys of the object using Object.keys().
const personKeys = () => {
    console.log(Object.keys(person));

}
//personKeys()
// Create a function that logs out the keys and values of the object using Object.entries().
const personKeyValues = () => {
    for (const [key, value] of Object.entries(person)) {
        console.log(`The key is ${key}: and the value is ${value}`);
    }
}
personKeyValues()

// Create an arrayOfPersons that contains multiple "people" objects. You can simply copy/paste the person object you made above multiple times. Feel free to change the values to reflect multiple people you might have in your database.

const arrayOfPersons = [
    {
        firstName: "Jane",
        lastName: "Doe",
        birthDate: "Jan 5, 1925",
        gender: "female"
    },
    {
        firstName: "Mike",
        lastName: "Smith",
        birthDate: "Jul 8, 1991",
        gender: "male"
    },
    {
        firstName: "Phillip",
        lastName: "Rivers",
        birthDate: "Mar 8, 1944",
        gender: "male"
    },
    {
        firstName: "Molly",
        lastName: "Shannon",
        birthDate: "Feb 9, 1987",
        gender: "female"
    },
]


// Create a function that uses a for...of loop and an if statement to console.logthe value associated with the key birthDate of each object if the birth year is an odd number.
const oddBirthYears = () => {
    for (const ppl of arrayOfPersons) {
        let birthYear = ppl.birthDate.slice(-4)
        if (birthYear % 2 == 1) {
            console.log(birthYear);
        }
    }
}
oddBirthYears()

// Use .map() to map over the arrayOfPersons and console.log() their information.
// create new array with a change to the og array 
let newPeople = arrayOfPersons.map(
    person => console.log(`Name: ${person.firstName} ${person.lastName} 
Birthdate: ${person.birthDate}
Gender: ${person.gender}
`)
)

// Use .filter() to filter the persons array and console.log 0only males in the array.

const onlyMales = arrayOfPersons.filter(person => (person.gender === "male"));
console.log(onlyMales);

// Create a function that returns true if the value of birthDate is before Jan 1, 1990.

const reallyOldPeople = () => {
    // for (granny of arrayOfPersons) {
    //     if (granny.birthDate.slice(-4) < 1990) {
    //         console.log("true");
    //         //return true
    //     }
    for (let i = 0; i < arrayOfPersons.length; i++) {
        if (arrayOfPersons[i].birthDate.slice(-4) < 1990) {
            console.log("true");
            // return true
        }
    }
}
//}
reallyOldPeople()

// Use .filter() to filter the persons array and console.log only people that were born before Jan 1, 1990.

const oldPeople = arrayOfPersons.filter(persons => (persons.birthDate.slice(-4) < 1990))
console.log("oldPeople", oldPeople)

