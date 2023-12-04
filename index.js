const express = require('express');
const hbs = require('hbs');
const app = express();

app.set('view engine', 'hbs');

// TODO: Add in the code to allow Express to access the form (see lab 6 step 1)

app.use(express.urlencoded({
  extended: false // use basic forms not advanced forms
}))

app.get("/", function(req,res){
  res.send(`<a href="/fruits">Fruit form</a>`)
})

app.get('/fruits', function(req, res) {
  res.render('fruits')
});

app.post('/fruits', function(req, res) {
   let total = 0
 let fruit = req.body;
    fruit= {
      durian: 15 , 
      apple: 3 ,
      orange: 6 ,
      banana: 4 
    }



})

app.listen(3000, () => {
  console.log('server started');
});
