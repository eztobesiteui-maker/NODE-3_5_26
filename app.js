const express = require ('express');
const app = express ();

app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));
app.set('view engine', 'ejs')
app.get('/', (req,res)=>{
    res.render('index');
})
app.post('/register',(req,res)=>{
const ln = req.body.ln;
const fn = req.body.fn;
const age = req.body. age;
const add = req.body.add;

console.log(ln);
console.log(fn);
console.log(age);
console.log(add);
})
app.listen(8000);