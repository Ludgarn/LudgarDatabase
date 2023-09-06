const express = require('express');
const port = 3000;

const app = express();
const { errorHandler } = require('./middleware/errorMiddleware');


app.use(errorHandler);


app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/api/todos', require('./routes/todoRoutes'))

app.listen(port, () => {
  console.log(`Server started on port http://localhost:${port}`);

  
});



