const express = require('express');
const conn = require('./conn');
const app = express();

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index');
});

app.post('/register', (req, res) => {
    const ln = req.body.ln;
    const fn = req.body.fn;
    const age = req.body.age;
    const add = req.body.add;

    console.log(ln);
    console.log(fn);
    console.log(age);
    console.log(add);

    const insert = `INSERT INTO tbl_students VALUES('0', '${ln}', '${fn}', '${age}', '${add}')`;

    // To execute the query
    conn.query(insert, (err) => {
        if (err) throw err;
        res.send(`
            <script>
                alert('Data Inserted');
                location.href = '/';
            </script>
        `);
    });
});

app.get('/view', (req, res) => {
    const getData = 'SELECT * FROM tbl_students';

    conn.query(getData, (err, data) => {
        if (err) throw err;
        res.render('view', {
            student: data
        });
    });
});

app.get('/delete/:id', (req, res) => {
    const del_id = req.params.id;

    const toDelete = `DELETE FROM tbl_students WHERE idnum = '${del_id}'`;

    conn.query(toDelete, (err) => {
        if (err) throw err;

        res.send(`
            <script>
                alert('data deleted!');
                location.href = '/view';
            </script>
        `);
    });
});

app.listen(8000);
