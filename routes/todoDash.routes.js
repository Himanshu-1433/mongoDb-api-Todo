const express = require("express");
const routes = express.Router();
const todoDash = require("../controller/todoDash.controller");

routes.get("/todo/get/status=:_status" , todoDash.getTodoData);
routes.get("/todo/get/id=:id" , todoDash.getDataFromId);
routes.post("/todo/post" , todoDash.postData);
routes.post("/todo/postMany" , todoDash.postManyData);
routes.put("/todo/put/id=:id" , todoDash.updateData);
routes.delete("/todo/delete/id=:_id" , todoDash.deleteData);

module.exports = routes;