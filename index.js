// requried npm file  body-parser ,cors, express, mongodb, nodemon 
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { MongoClient, ServerApiVersion} = require("mongodb");
// requrie file end 

// mongodb data id object select 
const obejectCount = require("mongodb").ObjectId;

//app connect 
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// mongodb databse user and password client 
const pwd = "eAQA8ePXHWLs2c6C";
const uri =
  "mongodb+srv://swpanil_ahmed:eAQA8ePXHWLs2c6C@educational-pacties.es4tepq.mongodb.net/swapnildb?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

// html file show client site 
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/userInterface/index.html");
});

// database total work here CRUD system 
client.connect((err) => {
  const collection = client.db("swapnildb").collection("product");
// create product 
  app.post("/addProduct", (req, res) => {
    const product = req.body;
    collection.insertOne(product).then((result) => {
      console.log("success");
      res.redirect("/");
    });
  });

  // Read product 
  app.get("/product", (req, res) => {
    collection.find({}).toArray((err, documents) => {
      res.send(documents);
      console.log(documents);
    });
  });

  app.get("/product/:id", (req, res) => {
    const productId = obejectCount(req.params.id);
    collection.find({ _id: productId }).toArray((err, document) => {
      res.send(document[0]);
    });
  });

  // update product 
  app.patch("/update/:id", (req, res) => {
    const productId = obejectCount(req.params.id);
    collection
      .updateOne(
        { _id: productId },
        {
          $set: {
            price: req.body.price,
            quantity: req.body.quantity,
          },
        }
      )
      .then((result) => {
        res.send(result.modifiedCount > 0);
      });
  });

  // delete product 
  app.delete("/delete/:id", (req, res) => {
    const productId = obejectCount(req.params.id);
    collection.deleteOne({ _id: productId }).then((result) => {
      res.send(result.deletedCount > 0);
    });
  });


});

// port http://localhost:3000 
app.listen(3000);
