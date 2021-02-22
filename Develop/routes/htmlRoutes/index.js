const path = require("path");
const router = require("express").Router();

//HTMl Pages routes options.

router.get("/notes",(req,res) => {
    res.sendFile(path.join(__dirname, '../../notes.html'));
});
router.get("*",(req,res) => {
    res.sendFile(path.join(__dirname, '../../index.html'));
});
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../index.html'));
  });


module.exports = router;
