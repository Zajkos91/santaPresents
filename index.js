const express = require("express");
const methodOverride = require("method-override");
// const cookieParser = require("cookie-parser");
const hbs = require("express-handlebars");
const {homeRouter} = require("./routes/home")
const path = require('path');
const {handlebarsHelpers} = require("./utils/handlebars-helpers");
const {childRouter} = require("./routes/child");
const {handleError} = require("./utils/sendError");
const {giftRouter} = require("./routes/gift");

const app = express();
const port = 3000;

app.use(methodOverride('_method'));
// app.use(express.json()); // content-type: application/json
app.use(express.static('public'));
// app.use(cookieParser());

app.engine('hbs', hbs.engine({
    extname: '.hbs',
    // helpers: handlebarsHelpers, // dodatkowe funkcjonalnosci ktore chcemy dodac do handlebarsow
}));
app.set('view engine', '.hbs');

app.use('/', homeRouter);
app.use('/child', childRouter);
app.use('/gift', giftRouter);





app.use(handleError);

app.listen(port, 'localhost', () => {
    console.log('Listening on http://localhost:3000');
});