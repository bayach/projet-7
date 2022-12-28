const mongoose = require("mongoose");

mongoose.connect('mongodb+srv://' + process.env.DB_USER + ':' + process.env.DB_PASSWORD + process.env.DB_NAME + '/groupomania', 
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    }
  )
  .then(() => console.log("Connecté à MongoDB"))
  .catch((err) => console.log("erreur connexion MongoDB", err));
