const axios = require("axios");

exports.homeRoutes = (req, res) => {
  //make a get request to /api/users

  axios.get("http://localhost:8080/api/users").then(function (response) {
    console.log(response);
    res.render("index", { users: response.data });
  })
  .catch(err=>{
    res.send(err)
  })
};
 
exports.add_user = (req, res) => {
  res.render("add_user");
}; 

exports.update_user = (req, res) => {
  axios.get("http://localhost:8080/api/users",{params:{id:req.query.id}})
    .then(function(userData){
      res.render("update_user",{user:userData.data});
    })
};
