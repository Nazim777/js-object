const headOrTail = () =>{
    let result = Math.floor(Math.random()*10)
   if(result>5) {
    return 'Head'
   } else{
    return 'Tail'
   }
}
//console.log(headOrTail())

const hello = (n) =>{
    for(let i = 0 ; i<=n ; i++) {
        let result = headOrTail() 
       // console.log(result)
    }
}
hello(10)

const data = ['dirilis antugrul','buyuk seljukon','barbrosa', 'kurulus osman']
for(let i = 0 ; i<data.length; i++) {
 //   console.log(data[i])
}

const number = [2,1,3,4,5,6]
let even= []
for(let i = 0 ; i<number.length; i++) {
   
    if(number[i]%2==0) {
        even.push(number[i])
    }
}
//console.log(even)
 

let highest = number[0]
 let lowest = number[0]
const sum = (arr) =>{
    for(let i = 0 ; i <arr.length; i++) {
        if(highest<number[i]) {
            highest = number[i]
        }
        if(lowest>number[i]) {
            lowest = number[i]
        }
    }
}

sum(number)
//console.log(highest,lowest)
 

// sum of array's second highest number and second lowest number
const sortedArray = number.sort((a,b)=>a-b)
let sum2 = sortedArray[1] + sortedArray[sortedArray.length-2]
//console.log(sum2)

let stopwatch = {} 
// stopwatch.currentTime = 12 
// stopwatch.tellTime = (time) =>{
//     console.log(`current time is ${time}`)
// }
// stopwatch.tellTime(stopwatch.currentTime)

stopwatch.size = 'medium' 
stopwatch.color = 'orange' 
stopwatch.brand = 'nike'
stopwatch.shape = 'round' 
stopwatch.start = () =>{
    console.log('stopwatch start') 
}
stopwatch.stop = () =>{
    console.log('stopwatch stop')
}
stopwatch.brandName = () =>{
    console.log(stopwatch.brand)
}
//console.log(stopwatch)

let fruit = 'hello this is a fruit of apple , banana , orange '
let result = ''
const favFruit = (fruit) =>{
    let fruitArray = fruit.split(' ')
   for(let word of fruitArray) {
   
   if(word==='apple') {
   result = word
   return result
   }
   
   
   }

}
//console.log(favFruit(fruit))

// shortcut way to find any word from string 
if(fruit.search('apple') !== -1) {
   // console.log('yes')
}else{
   // console.log('no')
}




const game = () =>{
    let result = Math.floor(Math.random()*3) 
    if(result==1) {
       return 'rock'
    } else if(result==2) {
       return 'paper'
    }else {
       return 'scissor'
    }
}
//console.log(game())


// for(let i= 0 ; i<=10 ; i++) {
//    console.log( game() ) 
    
// }

const win = (option) =>{
   let result = game()
   if((option==='rock' &&  result==='scissor') || (option==='paper' && result==='rock') || (option==='scissor' && result==='paper')) {
     return  'You Won!'
   }else if(option===result){
     return 'You Tied!'
   }else{
    return 'You Lose'
   }

}
//console.log(win('rock'))

const playGameXtime = (arr) =>{
    for(let i = 0 ; i<arr.length; i++) {
        console.log(win(arr[i]))
    }
} 
const arr1 = ['rock','paper','scissor','paper','scissor','rock']
//playGameXtime(arr1)



// foreEach method 

const playGameXtime1 = (arr) =>{
    arr.forEach(item => {
    console.log(win(item))
    });
}
//playGameXtime1(arr1)



// sum 
const numberArray = [10,34,5,40,50,20]

let result2=  numberArray.reduce((accumulator,currentValue)=>{
    return accumulator+ currentValue
})
//console.log (result2)



let sum3 = 0
for(let i = 0 ; i<numberArray.length; i++) {
    sum3+= numberArray[i]

}


//console.log(sum3)
let sum4 = 0
const sumallNumber = (arr) =>{
    arr.forEach((item)=>{
       sum4+=item
    })


}
sumallNumber(numberArray)
//console.log(sum4)


// squares 
const numberArray1 = [10,34,5,40,50,20]
let newArray = []

for(let i= 0; i<numberArray1.length; i++) {
    newArray.push(numberArray1[i]*numberArray1[i])

}
//console.log(newArray)

const squaresArray = (arr) =>{
let result = arr.map((item)=>item*item) 
return result
}

//console.log(squaresArray(numberArray1))

// palindrome 

const palindrome = (str) =>{
    let start = 0 
    let end = str.length-1 
    if(str[start] !== str[end]) {
        return false
    }else{
        start ++ 
        end --
    }
    return true
}

//console.log(palindrome('ada'))

function Person (name,age,profession,email) {
    this.name = name
    this.age = age 
    this.profession = profession 
    this.email = email
    this.hello = function() {
        console.log('hello1')
    }
    this.hello2 = function() {
        console.log('hello2')
    }

}


Person.prototype.isCompleted = true 
const person1 = new Person('Abdur Rahman',40,'teacher','abdurrahman@gmail.com')
// console.log(person1)
// person1.hello() 
// person1.hello2()
//console.log(person1.isCompleted)

 const person2 = new Person ('Rahim Uddin',50,'teacher','rahimuddin@gmail.com')
// console.log(person2)
// person2.hello() 
// person2.hello2()
function FighterGame (ch1,ch2,ch3,ch4) {
    this.ch1= ch1
    this.ch2 = ch2
    this.ch3 = ch3 
    this.ch4 = ch4 
    this.hello = function() {
        console.log('hello1')
    }
    this.hello2 = function() {
        console.log('hello2')
    }
    this.hello3 = function() {
        console.log('hello3')
    }
    this.hello4 = function() {
        console.log('hello4')
    }


}

let  fighterGame = new FighterGame('name1','name2','name3','name4')
// fighterGame.hello()
// fighterGame.hello2()
// fighterGame.hello3()
// fighterGame.hello4()
//console.log(fighterGame)

let number2 = [10,20,30,4]
let sum5 = 0
const sumNumber = (arr) =>{
    for(let i= 0 ; i<arr.length-1; i++) {
        sum5+= arr[i] /arr[arr.length-1]


    }
} 
sumNumber(number2) 

//console.log(sum5)

const sumNumber1 = (n1,n2,n3,n4) =>{
    return (n1+n2+n3)/ n4

}
//console.log(sumNumber1(10,20,30,4))

const powww= (root,squares) =>{
    console.log(Math.pow(root,squares))
}
//powww(2,3)

const stringBoolean = (str,boolean) =>{
    if(boolean){
       console.log('true',str)
    }else{
        console.log('false',str)
    }

    // or

    boolean?console.log('true',str):console.log('false',str)
}
//stringBoolean('hello',true)

const number3 = [2,3,6,8,9,10,15,30,25,75]
const result4= (arr) =>{
    for(let i= 0 ; i<arr.length; i++) {
        if(arr[i]%3===0 && arr[i]%5===0) {
            console.log('fizzbuzz')
        }else if(arr[i]%3==0) {
            console.log('fizz')
        } else if(arr[i]%5===0) {
            console.log('buzz')
        }else {
            console.log(arr[i])
        }
    }
}
//result4(number3)

const fizzBuzz = (number) =>{
    for(let i = 1; i<=number; i++) {
        if(i%3===0 && i%5===0) {
            console.log('fizzbuzz')
        }else if(i%3===0){ 
            console.log('fizz')
            
        } else if(i%5===0) {
            console.log('buzz')
        } else {
            console.log(i)
        }
    }
}

//fizzBuzz(20)

const movie = ['super man','spider man','hulk']
let firstMovie = movie[0]
let movieLength = movie.length
let lastMovie = movie[movie.length-1]
// console.log(firstMovie)
// console.log(movieLength)
// console.log(lastMovie)


const movieTitle = ['super man','spider man','hulk','avenger','captain america']
for(let i= 0 ; i<movieTitle.length ; i++) {
   // console.log(movieTitle[i]) 
}

const number4 = [10,20,30]
// for(let i = 0 ;i<number4.length ; i++) {
//     number4[i] += 3
// }
number4.forEach((item,index)=>{
    number4[index]+= 3
})
//console.log(number4)

const number5 = [10,20,30]
let total = 0 
number5.forEach((item,i)=>{
    total += item
})
let avarage = total/number5.length
// console.log(avarage)

let string2 = 'hello'
//console.log(string2[1])
//console.log(string2.charAt(1))

const hello5 = (n1,n2,n3) =>{
    return (n1/n2)*n3
}
//console.log(hello5(6,2,5))


const hello6 = (value) =>{
    if(value=='april'|| value =='may' || value == 'june') {
        console.log('YAY')
    }else {
        console.log('BOOO')
    }
}
//hello6('april')

const hello7 = (number) =>{
    for(let i = 1 ; i<= number ; i++) {
        if(!(i%5==0)) {
            console.log(i)

        }
    }

}
//hello7(30)

const cubeRootIt = (root) =>{
    console.log(Math.cbrt(root).toFixed(4))
}
//cubeRootIt(9)

const number6 = [2,3,6,8,9,10,15,30,25,75]

const hello8 = (number6) =>{
    if(number6[0]<number6[number6.length-1]) {
        console.log('Hi')
    }else if(number6[0]==number6[number6.length-1]) {
        console.log('We close in an hour')
    }else{
        console.log('Bye')

    }

}

//hello8(number6)



const number7 = [2,3,6]
const hello9 = (arr) =>{
    let total1 = 1
    // arr.forEach((item)=>{
    //     total1 *=item
    // })
    for(let i = 0 ; i<arr.length; i++) {
        total1 *= arr[i]
    }
    console.log(total1)

}
//hello9(number7)

const number8 = [2,3,6,8,9,10,15,30,25,75]

const hello10 = (arr) =>{
    let newArray = []
    for(let i = 0 ; i<arr.length; i++) {
        if(arr[i] %2 ===0) {
            newArray.push(arr[i])
        }
    }
    console.log(newArray)

}

//hello10(number8)

let num= 20 
num-=10
//console.log(num)

const hello11= (age) =>{
    if(age<16) {
        console.log("you can't drive")
    }else if(age<18) {
        console.log("you can't go to club")
    }else if(age<21) {
        console.log("you can't drink")
    }else if(age<25){
        console.log("you can't rent a car")
    }else if(age<30) {
        console.log("you can't rent fency car affodably")
    }else{
        console.log("you can do all which mention in above")
    }

}
//hello11(16)

const hello12 = (n1,n2,n3) =>{
    let result = (n1+n2)%n3
    return result

}
 //console.log(hello12(10,7,3))

const hello13 = () =>{
    for(let i = 1 ; i<= 21 ; i++) {
        console.log('21')
       
    }
    
}

//hello13() 

const hello14 = (n1,n2) =>{
    let result= n1+n2 
    if(result>50) {
        console.log('jumanji')
    }
}

//hello14(40,20)

const hello15 = (n1,n2,n3) =>{
    const result = n1*n2*n3 
    if(result%3===0) {
        console.log('Zebra')
    }
}

//hello15(2,3,5)

const hello16 = (word,number)=>{
    for(let i= 1 ; i<=number ; i++) {
        console.log(word)
    }
}

//hello16('hello',10)


class Item {
    constructor(make,model,color,size) {
        this.make = make 
        this.model = model 
        this.color  = color 
        this.size = size 
    }
    hello = () =>{
        console.log('hello')

    }
    hello2 = () =>{
        console.log('hello2')

    }
    hello3 = () =>{
        console.log('hello3')
    }


}

let item = new Item ('tesla','tesla-40','white','medium')
//console.log(item)




// function

let hourlyRate = 160 
let hour = 20 
let taxRate = 0.35 
const allProfite = (hour,hourlyRate,taxRate) =>{
    return (hour*hourlyRate*(1-taxRate))
}

const profite = allProfite(hour,hourlyRate,taxRate)
const taxes = (profiteMode) =>{
    return (hourlyRate*hour-profiteMode)
}

const taxesHeld = taxes(profite)
//console.log(taxesHeld)



// object
const seriousBusinessPerson ={
    hour: 20,
    hourlyRate: 200,
    taxRate: 0.40,
    profiteWithTaxes:function() {
        return (this.hour*this.hourlyRate*(1-this.taxRate))
    },
    taxesHeld:function(){
        return this.hour*this.hourlyRate- this.profiteWithTaxes()
    }
}
const allTaxes = seriousBusinessPerson.taxesHeld()
//console.log(allTaxes)

// encapsulation

function Agency (hour,hourlyRate,taxRate) {
    this.hour = hour 
    this.hourlyRate = hourlyRate 
    this.taxRate = taxRate
    this.profiteWithTaxes= function() {
        return (this.hour*this.hourlyRate*(1-this.taxRate))
    }
    this.taxes = function() {
        return this.hour*this.hourlyRate- this.profiteWithTaxes()
    }
    this.invoice = function() {
        return `your invoice total is ${this.hour * this.hourlyRate} and your tax ${this.taxes()} and total profite with taxes ${this.profiteWithTaxes()} `
    }

}

const Rahim = new Agency(20,200,0.40)
// console.log(Rahim.profiteWithTaxes())
// console.log(Rahim.taxes())
// console.log(Rahim.invoice())



// class 

class AgencyCreate{
    constructor(hour,hourlyRate,taxRate) {
        this.hour = hour
        this.hourlyRate = hourlyRate 
        this.taxRate = taxRate
    }
    profiteWithTaxes= function() {
        return (this.hour*this.hourlyRate*(1-this.taxRate))
    }
    taxes = function() {
        return this.hour*this.hourlyRate-this.profiteWithTaxes()
    }
    invoice = function() {
        return `your invoice total is ${this.hour * this.hourlyRate} and your tax ${this.taxes()} and total profite with taxes ${this.profiteWithTaxes()} `

    }
}

let agency = new AgencyCreate(20,200,0.40)
// console.log(agency.profiteWithTaxes())
// console.log(agency.taxes())
// console.log(agency.invoice())

// inheritance and polimorphism 


class Animal{
    constructor(name) {
        this.name = name
    }
    speak(){
        console.log(`${this.name} is speaking`)
    }
}

class Dog extends Animal {
    constructor(name,bread) {
        super(name)
        this.bread = bread
    }
}

let dog = new Dog('susi','sheperd')
// console.log(dog.name)
// console.log(dog.bread) 
// console.log(dog.speak())



