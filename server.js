const express = require('express')
const nunjucks = require('nunjucks')

const server = express()
const infos = require("./data")

server.use(express.static('public'))

server.set("view engine", "njk")

nunjucks.configure("views", {
    express:server,
    autoescape: false
})

server.get("/", function (req, res) {
    const data = {
        title: "Rocketseat",
        subTitle: "Technology company",
        info: "Brasilian company focused on the best market technologies and willing to carry its pupils to the <strong>next level</strong>",
        tecImage: 'src="assets/rocket_trofy.png" alt="rockettrofy"',
        tecTitle: "The same tecnologies used by renowned companies in the market",
        tecSubTitle: "Tecnologies:",
        tecs: "<li>React</li><li>React Native</li><li>Node</li><li>JavaScript</li><li>entre outras</li>"
    }

    return res.render("rocket_about", {data})
})

server.get("/rocket_content", function (req, res) {
    return res.render("rocket_content", {infos})
})

server.use(function(req, res) {
    res.status(404).render("not-found");
  });

server.listen(5000, function () {
    console.log("Rodouuu")
})