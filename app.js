const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const app = express();

app.use(morgan('common')); // let's see what 'common' format looks like
app.use(cors());

// const books = require('./books-data.js');

// app.get('/books', (req, res) => {
//   // ALL OUR CODE HERE
//   const { search = "", sort } = req.query;
//   if(sort) {
//     if(!['title', 'rank'].includes(sort)) {
//       return res
//         .status(400)
//         .send('Sort must be one of title or rank');
//     }
//   }

//   let results = books
//     .filter(book => 
//         book
//           .title
//           .toLowerCase()
//           .includes(search.toLowerCase()));

//   if(sort) {
//     results
//       .sort((a, b) => {
//         return a[sort] > b[sort] ? 1 : a[sort] < b[sort] ? -1 : 0;
//     }); 
//   }  

//   res
//     .json(results);
  
// });

// app.listen(8000, () => {
//   console.log('Server started on PORT 8000');
// });


const apps = require('./playstore.js');
// console.log(apps);
app.get('/apps', (req, res) => {
  // ALL OUR CODE HERE
  const { search = "", sort, genre } = req.query;
  if (sort) {
    if (!['rating', 'app'].includes(sort)) {
      return res
        .status(400)
        .send('Sort must be one of title or rank');
    }
  }

  if (genre) {
  	if (!['Action', 'Puzzle', 'Strategy', 'Casual', 'Arcade', 'Card'].includes(genre)) {
      return res
        .status(400)
        .send('Genre must be one of Action, Puzzle, Strategy, Casual, Arcade, Card');
    }
  }

  let results;
  if (genre) {
		results = apps
    .filter(app => 
      return app
        .Genres
        .toLowerCase()
        .includes(genre.toLowerCase()));
  }

  if(sort) {
    results
      .sort((a, b) => {
        return a[sort] > b[sort] ? 1 : a[sort] < b[sort] ? -1 : 0;
    }); 
  }  

	if (!sort && !genre) results = apps;
  res
    .json(results);
  
});

app.listen(8000, () => {
  console.log('Server started on PORT 8000');
});


