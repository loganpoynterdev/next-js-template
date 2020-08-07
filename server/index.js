const express = require('express');
const app = express();
var cors = require('cors');

app.use(cors());


//Routes
const apiRouter = express.Router();

apiRouter
	.route('/users')
	.get((req, res) => {
		res.send("Hello there");
	})

app.use('/api', apiRouter);


//Server
const PORT = process.env.PORT || 5000
app.listen(PORT, console.log(`Server listening on port ${PORT}`));
