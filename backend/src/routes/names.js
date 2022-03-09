const { getNames , getSingleName } = require("../queries/names");
const { saveName } = require("../command/names");

const names = (app) => {
  app.get("/", async (req, res) => {
    const names = await getNames();
    console.log("names", names);
    res.send(names);
  });

  app.get("/:id", async (req, res) => {
    const name = await getSingleName(req.params.id);
    res.send(name);
  });


  app.post("/", async (req, res) => {
      try{
          const { name } = req.body;
          if(name == null) {
              return res.send(404)
          }
          const user_id = saveName(name);
          res.send(201);
      }catch(e){
          res.send(500)
      }
  });
};

module.exports = { names };
