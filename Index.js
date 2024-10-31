const express = require('express')
const app = express()
const Car=[
    { name: 'Mercedes', model: 'C-Class', make: 'Mercedes-Benz', year: 2022 },
    { name: 'BMW', model: '3 Series', make: 'BMW', year: 2021 },
    { name: 'Audi', model: 'A4', make: 'Audi', year: 2023 },
    { name: 'Toyota', model: 'Camry', make: 'Toyota', year: 2020 },
    { name: 'Honda', model: 'Accord', make: 'Honda', year: 2019 },
    { name: 'Ford', model: 'Mustang', make: 'Ford', year: 2022 },
    { name: 'Tesla', model: 'Model S', make: 'Tesla', year: 2023 },
    { name: 'Chevrolet', model: 'Malibu', make: 'Chevrolet', year: 2021 },
    { name: 'Nissan', model: 'Altima', make: 'Nissan', year: 2020 },
    { name: 'Hyundai', model: 'Elantra', make: 'Hyundai', year: 2022 }]

app.get('/',(req,res)=>
{
    res.send(' Welcome to the Car API');
})
app.get('/Car',(req,res)=>{
    const jsoncar=JSON.stringify(Car)
    res.send(jsoncar)
})
app.post('/Add',(req,res)=>
{
    res.send('Car Added');
})

app.listen(3000);
