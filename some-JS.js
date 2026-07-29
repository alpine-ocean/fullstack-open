const object1 = {
    name: 'Arto Hellas',
    age: 35,
    education: 'PhD',
}

const object2 = {
    name: 'Full Stack web application',
    level: 'intermediate studies',
    size: 5,
}

const object3 = {
    name: {
        first: 'Dan',
        last: 'Abramov',
    },
    grades: [2, 3, 5, 3],
    department: 'Stanford University',
}

console.log(object3.name.first)
console.log(object1['age'])

object1.address = 'Helsinki'
object1['Secret Number'] = 12341

console.log(object1)

const square = p => p * p

console.log(square(2))



