

// // OOP

// class Item {
//     constructor(make,model,color,size) {
//         this.make = make 
//         this.model = model 
//         this.color  = color 
//         this.size = size 
//     }
//     hello = () =>{
//         console.log('hello')

//     }
//     hello2 = () =>{
//         console.log('hello2')

//     }
//     hello3 = () =>{
//         console.log('hello3')
//     }


// }

// let item = new Item ('tesla','tesla-40','white','medium')
// //console.log(item)




// // function

// let hourlyRate = 160 
// let hour = 20 
// let taxRate = 0.35 
// const allProfite = (hour,hourlyRate,taxRate) =>{
//     return (hour*hourlyRate*(1-taxRate))
// }

// const profite = allProfite(hour,hourlyRate,taxRate)
// const taxes = (profiteMode) =>{
//     return (hourlyRate*hour-profiteMode)
// }

// const taxesHeld = taxes(profite)
// //console.log(taxesHeld)



// // object
// const seriousBusinessPerson ={
//     hour: 20,
//     hourlyRate: 200,
//     taxRate: 0.40,
//     profiteWithTaxes:function() {
//         return (this.hour*this.hourlyRate*(1-this.taxRate))
//     },
//     taxesHeld:function(){
//         return this.hour*this.hourlyRate- this.profiteWithTaxes()
//     }
// }
// const allTaxes = seriousBusinessPerson.taxesHeld()
// //console.log(allTaxes)

// // encapsulation

// function Agency (hour,hourlyRate,taxRate) {
//     this.hour = hour 
//     this.hourlyRate = hourlyRate 
//     this.taxRate = taxRate
//     this.profiteWithTaxes= function() {
//         return (this.hour*this.hourlyRate*(1-this.taxRate))
//     }
//     this.taxes = function() {
//         return this.hour*this.hourlyRate- this.profiteWithTaxes()
//     }
//     this.invoice = function() {
//         return `your invoice total is ${this.hour * this.hourlyRate} and your tax ${this.taxes()} and total profite with taxes ${this.profiteWithTaxes()} `
//     }

// }

// const Rahim = new Agency(20,200,0.40)
// // console.log(Rahim.profiteWithTaxes())
// // console.log(Rahim.taxes())
// // console.log(Rahim.invoice())



// // class 

// class AgencyCreate{
//     constructor(hour,hourlyRate,taxRate) {
//         this.hour = hour
//         this.hourlyRate = hourlyRate 
//         this.taxRate = taxRate
//     }
//     profiteWithTaxes= function() {
//         return (this.hour*this.hourlyRate*(1-this.taxRate))
//     }
//     taxes = function() {
//         return this.hour*this.hourlyRate-this.profiteWithTaxes()
//     }
//     invoice = function() {
//         return `your invoice total is ${this.hour * this.hourlyRate} and your tax ${this.taxes()} and total profite with taxes ${this.profiteWithTaxes()} `

//     }
// }

// let agency = new AgencyCreate(20,200,0.40)
// // console.log(agency.profiteWithTaxes())
// // console.log(agency.taxes())
// // console.log(agency.invoice())

// // inheritance and polymorphism 


// class Animal{
//     constructor(name) {
//         this.name = name
//     }
//     speak(){
//         console.log(`${this.name} is speaking`)
//     }
// }

// class Dog extends Animal {
//     constructor(name,breed) {
//         super(name)
//         this.breed = breed
//     }
// }

// class Lion extends Animal {
//     constructor(name,color) {
//         super(name) 
//         this.color = color 
//     }
// }

// class Tiger extends Animal {
//     constructor(name,breed) {
//         super(name) 
//         this.breed = breed
//     }
//     nature () {
//         console.log(`${this.name} can fly`)
//     }
// }

// let dog = new Dog('susi','sheperd')
// // console.log(dog.name)
// // console.log(dog.breed) 
// // console.log(dog.speak())

// let lion = new Lion ('hary','orange')
// console.log(lion.name) 
// console.log(lion.color) 
// console.log(lion.speak())

// let tiger = new Tiger ('jonshon','hybrid')
// console.log(tiger.name)
// console.log(tiger.breed)
// console.log(tiger.nature())
// console.log(tiger.speak())

// class Horse {
//     constructor(name) {
//         this.name = name
//     }
//     speak () {
//         console.log(`${this.name} is speaking`)
//     }
// }

// let horse = new Horse('jonathan')
// console.log(horse.name)
// horse.name = 'jonson'
// console.log(horse.name)


// not possible to overwrite
class Animal {
    constructor(name) {
        this._name = name
    }
    get name () {
        console.log(`${this._name}`)
    }
    speak() {
        console.log(`${this._name} is speaking`)
    }
}

class Dog extends Animal {
    constructor(name,breed) {
        super(name) 
        this._breed = breed
    }
    get breed() {
        console.log(`${this._breed}`)
    }
    speak() {
        super.speak()
        console.log('hello')
    }
}

// let dog = new Dog('susi','american')
// console.log(dog.name)
// console.log(dog.breed)
// console.log(dog.speak())
// dog.breed = 'hybrid'
// console.log(dog.breed)

class Contractor {
    constructor(name,role) {
        this._name = name 
        this._role = role
    }
    get name () {
        return this._name
    }
    get role () {
        return this._role
    }
    sayHello () {
        console.log(`hello I'm ${this.name}`)
    }

}

class Front extends Contractor {
    constructor(name,role,tech) {
        super(name,role)
        this._tech = tech
    }

    get tech() {
        return this._tech
    }
    sayHello() {
        super.sayHello()
        console.log(`hello i working on ${this._tech}`)
    }
}
class Back extends Contractor {
    constructor(name,role,tech) {
        super(name,role)
        this._tech = tech
    }

    get tech() {
        return this._tech
    }
    sayHello() {
        super.sayHello()
        console.log(`hello i working on ${this._tech} `)
    }
}
// let employe= new Front ('Rahim','front-end','angular')
// console.log(employe.name)
// console.log(employe.role)
// console.log(employe.tech)
// console.log(employe.sayHello())

// let employe1= new Back ('akib','back-end','django')
// console.log(employe1.name)
// console.log(employe1.role)
// console.log(employe1.tech)
// console.log(employe1.sayHello())

// const agencyList = [employe,employe1]
// for(let perosn of agencyList) {
//     perosn.sayHello()
// }


const word = 'hello this is a jr developer and this is a jr developer'
//console.log(word.replaceAll('jr developer','software engineer'))

const arr = [10,20,30,40]
const sum = arr.reduce((accumulator,currentValue)=>{
    return accumulator + currentValue
})
//console.log(sum)

const squares = arr.map((item)=>{
   return item*item
})
//console.log(squares)
let squaresArray = []
for(let i = 0 ; i<arr.length; i++) {
    squaresArray.push(arr[i]*arr[i])

}

//console.log(squaresArray)

const string = 'software'
console.log(string.split("").reverse().join(''))

const palindrome = (str) =>{
    let start = 0 
    let end = str.length -1
    if(str[start]!==str[end]) {
        return false

    }else {
        start ++ 
        end --
    }
    return true
    
}

//console.log(palindrome('ada'))





