const express = require('express');
const hbs = require('hbs');

var app = express();

hbs.registerPartials(__dirname+'/views/partials');

app.set('view engine','hbs');
app.use(express.static(__dirname+'/public'));

app.use( (req,res,next)=> {
  var now = new Date().toString();

  console.log(`${now} : ${req.method} ${req.url}`)
  next();
});

hbs.registerHelper('getCurrentYear',()=> {
  return new Date().getFullYear() + 10;
});

hbs.registerHelper('screamIt' , (text)=> {
  return text.toUpperCase();
});

app.get('/', (req,res)=> {
  // res.send('<h1>Hello Express !</h1>');
  res.send(
    {
      name:'Halil'
      , likes : ['X','y']
    }
  );
});

app.get('/about',(req,res)=> {
  res.render('about.hbs', {
    pageTitle:'About Page'
  });
//  res.send('About Page');
});

app.get('/bad',(req,res)=> {
  res.send({
    errorMessage:'Ooops'
  });
});

app.listen(3000 , () => {
  console.log('Server is up on port 3000');
});
