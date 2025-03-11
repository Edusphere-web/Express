const express = require("express");
const app = express();
const port = 3000;

// app.use((req, res)=>{
//     console.log("New Incoming Request on port", port);
//     res.send("<h1>Home Page</h1><p>Welcome to the Edusphere's Home page.</p>");
// })

app.get("/", (req, res)=>{
    res.send("<h1>Home Page</h1><p>Welcome to the Edusphere's Home page.</p>")
})

app.get("/:username/:id", (req, res)=>{
    let {username, id} = req.
    ;
    console.log(req.params);
    res.send(`<h1>${username} Page</h1><p>Welcome to the ${username} Home page with the id ${id}.</p>`)
})

app.get("/search", (req, res)=>{
    let {q, color} = req.query;
    res.send(`The search result for query is:${q} which is of ${color} color. `)
})



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
