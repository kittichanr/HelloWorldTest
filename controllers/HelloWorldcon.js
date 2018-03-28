import HelloWorld from '../models/HelloWorld';

export const index = (req, res, next) => {
    // Find all movies and return json response
    HelloWorld.find({}).lean().exec(function (err, HelloWorld) {
    if (err) {
      console.log("Error:", err);
    }
    
      res.json(HelloWorld);
    
  });

       
  };