const users = require('../../model/user/usermodel');

function userLogin(req, res) {
  const { username, password } = req.body;

  users.userLogin((err, result) => {
    if (err) {
      console.log(err);
      return res.status(500).send({ error: "An error occurred while logging in" });
    }

    if (result.length > 0) {
      return res.status(200).send({ message: "User login successful" });
    }

    return res.status(401).send({ message: "Invalid username or password" });
  }, username, password);
}

module.exports = { userLogin };
