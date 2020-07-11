
const admin = require("../firebase");
const getAllUsersFirebase = async (req, res) => {
  const displayUsersF = await admin.auth().getUsers([])
  res.json({
    status: "ok",
    payload: displayUsersF
  })
  console.log(displayUsersF)
}

module.exports={getAllUsersFirebase}