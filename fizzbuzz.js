const express = require('express')
const app = express()
const port = 8080

function fizzBuzzOutput(value){
    // TODO: Write fizzbuzz
    if(!(value % 3) & !(value % 5)) return "FizzBuzz"
    else if(!(value % 3)) return "Fizz"
    else if(!(value % 5)) return "Buzz"
    else return value.toString();
}

app.get('/fizzbuzz/:n', (req, res) => {
    // TODO: Write express route
    const {n} = req.params
    // * Send response
    res.send( fizzBuzzOutput(parseInt(n)))
})

module.exports.app = app
module.exports.port = port
module.exports.fizzBuzzOutput = fizzBuzzOutput;
