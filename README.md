<pre>
This is a mongodb CRUD site 
ð C- creat , r- read, u-update , d-delete (crud)

This site only use vanila javascript . 
ðHow to fetch javascript ?

â­â­â­ fetch("url")
.then(res => res.json())
.then(result => {
    console.log(result);
})


ð npm downlode fille : 
( body-parser
  cors 
  express
  mongodb
  nodemon )

 â­â­â­ npm install body-parser cors express mongodb nodemon 

 ð How to show the file ?
 // html file show client site 
â­â­â­ app.get("/", (req, res) => {
  res.sendFile(__dirname + "/userInterface/index.html");
});
</pre>