const express = require('express');
const nunjucks = require('nunjucks');

const server = express();
const recipes = require("./data");

server.use(express.static('public'));

server.set("view engine", "njk");

nunjucks.configure("views", {
    express: server,
    autoescape: false,
    noCache: true
});

server.get("/", function(req, res){
    return res.render("index", { items: recipes });
});

server.get("/sobre", function(req, res){
    return res.render("sobre");
});

server.get("/receitas", function(req, res){
    return res.render("receitas", { items: recipes });
});

server.get("/receitas/:index", function (req, res) {
  
    const recipeIndex = req.params.index;

    // console.log(recipes[recipeIndex]);
    return res.render("receita", { item: recipes[recipeIndex] });
 
});

server.listen(5000, function() {
    console.log("server is running");
});
