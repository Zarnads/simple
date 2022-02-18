const { application } = require('express');
const express = require('express');
const app = express();
const sequelize = require('./connection');
const articleRouter = require('./routes/articles')
PORT=5000;

app.set("view engine","ejs");

app.use('/articles', articleRouter)

app.get('/',(req,res)=>{
    const articles =[{
        title:"article1",
        createdAt:new Date(),
        description:'hfbmkdskm ekfnoi'
    },{
        title:"article1",
        createdAt:new Date(),
        description:'hfbmkdskm ekfnoi'
    }]
    res.render("articles/index",{articles: articles})
});
app.get("/articles/new",(req, res) => {
    res.render('articles/new');
  }); 

sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`post connected:: http://localhost:${PORT}`);
    });
  });