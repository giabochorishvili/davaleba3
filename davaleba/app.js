/* პირველი დავალება */
function calculate(num1, num2 , ...args){
    const x = num1 + num2

    const z = function sumArgs(){
        let sum = 0
        for(const num of args){
            sum = sum + num
        }
        return sum
    }

    const array = [x,z()]

    return array
}

console.log(calculate(5,7,14,18,19))




/* დავალება მეორე */


const user = {
    banks: [{},{address: {city:"tbilisi"}}]
}

function test({banks:[,{address:{city} = {}}]}){
    return city
}

console.log(test(user))




/* მესამე დავალება */

const car = {
    model: "porsche",
    year: 2017,
    price: 150,
    moreDetails: {
        color: "white",
        speed: 200
    }
}

function createNew(newcar){
    newcar = {
        ...car,
        moreDetails: {
            ...car.moreDetails
        }
    }

    return newcar
}

console.log(createNew(car))

