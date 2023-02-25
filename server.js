const express = require("express");
const path = require("path");
const app = express();
const fs = require("fs");
const request = require("request");
const { PORT } = require("./config");
const { API_KEY } = require("./config.js");

app.use(
  "/static",
  express.static(path.resolve(__dirname, "frontend", "static"))
);
app.get("/*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "frontend", "index.html"));

  // requete pour recuperer la liste des repas
  const options = {
    method: "GET",
    url: "https://tasty.p.rapidapi.com/recipes/list",
    qs: { from: "0", size: "20", tags: "under_30_minutes" },
    headers: {
      "X-RapidAPI-Key": API_KEY,
      "X-RapidAPI-Host": "tasty.p.rapidapi.com",
      useQueryString: true,
    },
  };

  request(options, function (error, response, data) {
    if (error) throw new Error(error);

      const jsonData = JSON.parse(data);
      const formattedData = JSON.stringify(jsonData, null, 2);
    
    //creation de fichier data.json
    fs.writeFile("frontend/static/js/views/data.json", formattedData, (err) => {
      if (err) throw err;
      console.log("success");
    });
  });
});

app.listen(PORT || 4001, () => {
  console.log("Server running on PORT", PORT);
});
