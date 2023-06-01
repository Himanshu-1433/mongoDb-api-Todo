const Model = require("../model/todoDash.model");

let getTodoData = async (req, res) => {
  // console.log(req.params._status);
  if (req.params._status == "all") {
    const dataRes = await Model.find();
    // console.log("database response" + dataRes);
    if (dataRes.length == 0 || dataRes.length == null) {
      console.log("No data are Found");
      res.send([]);
    } else {
      res.send(dataRes);
    }
  } else {
    const dataRes = await Model.find({ status: req.params._status });
    if (dataRes.length == 0 || dataRes.length == null) {
      console.log("No data are Found");
      res.send([]);
    } else {
      res.send(dataRes);
    }
  }
};

let getDataFromId = async (req, res) => {
  const resData = await Model.find({ _id: req.params.id });
  let errorArray = [];
  if (resData.length > 0) {
    // console.log(resData);
    res.send(resData);
  } else {
    res.send(errorArray);
  }
};

let postData = async (req, res) => {
  let insertData = new Model(req.body);
  insertData
    .save()
    .then(() => {
      console.log("data was insert successFully");
      res.send(insertData);
    })
    .catch(() => {
      console.log("data was rejected to insert");
    });
};

let postManyData = async (req, res) => {
  req.body.forEach((element) => {
    // console.log(element)
    let insertData = new Model(element);
    insertData
      .save()
      .then(() => {
        console.log("data was insert successFully");
        res.send(insertData);
      })
      .catch((err) => {
        console.log("data was rejected to insert", err);
      });
  });
};

let updateData = async (req, res) => {
  Model.updateOne(
    {
      _id: req.params.id,
    },
    {
      $set: {
        taskName: req.body.taskName,
        taskDetails: req.body.taskDetails,
        status: req.body.status,
      },
    }
  )
    .then(() => {
      console.log("update data successFully");
      res.send([{done : true}]);
    })
    .catch((err) => {
      console.log("ERROR! while update record ", err);
      res.send(err);
    });
};

let deleteData = async (req, res) => {
  Model.deleteOne({ _id: req.params._id })
    .then(() => {
      console.log("delete data successFully");
      res.send({delete : true});
    })
    .catch((err) => {
      console.log("ERROR! while delete record ", err);
      res.send({delete : false});
    });
};

module.exports = {
  getTodoData,
  postData,
  updateData,
  deleteData,
  postManyData,
  getDataFromId,
};
