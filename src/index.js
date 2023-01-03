const express=require('express')
const route = require('./route/route');
const { default: mongoose } = require('mongoose');
const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));
mongoose.set('strictQuery', true);
mongoose.connect("mongodb+srv://Project_1:Xr1m54ZBz5hgLJbP@cluster0.wttupro.mongodb.net/CompanyAssi_DB", {
    useNewUrlParser: true
})
    .then(() => console.log("Db is connected"))
    .catch(err => console.log(err))

app.use('/', route);

app.listen(3000, function () {
    console.log('running on port ' + 3000)
});

