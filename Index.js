const express = require('express')
const app = express()

app.use(express.json());
const Car=[
    {  id:1, name: 'Mercedes', model: 'C-Class', make: 'Mercedes-Benz', year: 2022 },
    {   id:2,name: 'BMW', model: '3 Series', make: 'BMW', year: 2021 },
    {   id:3,name: 'Audi', model: 'A4', make: 'Audi', year: 2023 },
    {   id:4,name: 'Toyota', model: 'Camry', make: 'Toyota', year: 2020 },
    {   id:5,name: 'Honda', model: 'Accord', make: 'Honda', year: 2019 },
    {   id:6,name: 'Ford', model: 'Mustang', make: 'Ford', year: 2022 },
    {   id:7,name: 'Tesla', model: 'Model S', make: 'Tesla', year: 2023 },
    {   id:8,name: 'Chevrolet', model: 'Malibu', make: 'Chevrolet', year: 2021 },
    {   id:9,name: 'Nissan', model: 'Altima', make: 'Nissan', year: 2020 },
    {   id:10,name: 'Hyundai', model: 'Elantra', make: 'Hyundai', year: 2022 }]

app.get('/',(req,res)=>
{
    res.send(' Welcome to the Car API');
})
app.get('/Car',(req,res)=>{
    const jsoncar=JSON.stringify(Car)
    res.send(jsoncar)
})
app.post('/AddCar',(req,res)=>
{
    const data=req.body;
    Car.push(data);
res.json({array:Car});
    // res.send('Car Added');
})
app.put('/UpdateCarparams/:id',(req,res)=>
    {
        // res.status(404).send(req.query);
      const req1=req.params.id;
      if(re1)

    })
    app.patch('/quereyCar/:model',(req,res)=>
    {
        const previousid=req.query.id;
      const modelfind=Car.find(x=>x.model==previousmodel);
      if(modelfind)
      {
        modelfind.name=req.body.name;
        modelfind.model=req.body.model;
        modelfind.make=req.body.make;
        modelfind.year=req.body.year;
        res.json({array:Car});
      }
    });
    app.delete('/DeleteCar',(req,res)=>
        {
            res.status(200).send('Car Deleted Success');
        })

app.listen(3000);
