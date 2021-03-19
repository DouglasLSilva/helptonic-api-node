const { response } = require('express');
const routes = require('./routes');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.listen(3333);

app.get("login", (request, response)=> {
    return response.send("Ok");
})
