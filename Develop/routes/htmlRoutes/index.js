const path = require("path");
const router = require("express").Router();

// router.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "../../public/index.html"));
// });

// router.get("/animals", (req, res) => {
//   res.sendFile(path.join(__dirname, "../../public/animals.html"));
// });

// router.get("/zookeepers", (req, res) => {
//   res.sendFile(path.join(__dirname, "../../public/zookeepers.html"));
// });



router.get("/notes",(req,res) => {
    console.log(__dirname);
    res.sendFile(path.join(__dirname, '../../notes.html'));
});
router.get("*",(req,res) => {
    res.sendFile(path.join(__dirname, '../../index.html'));
});
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../index.html'));
  });


module.exports = router;
