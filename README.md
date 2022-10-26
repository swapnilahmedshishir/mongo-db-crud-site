This is a mongodb CRUD site 
👉 C- creat , r- read, u-update , d-delete (crud)

This site only use vanila javascript . 
👉How to fetch javascript ?
⭐⭐⭐ fetch("url")
.then(res => res.json())
.then(result => {
    console.log(result);
})


👉 npm downlode fille : 
( body-parser
  cors 
  express
  mongodb
  nodemon )

 ⭐⭐⭐ npm install body-parser cors express mongodb nodemon 

 👉 How to show the file ?
 // html file show client site 
⭐⭐⭐ app.get("/", (req, res) => {
  res.sendFile(__dirname + "/userInterface/index.html");
});
