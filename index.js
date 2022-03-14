const organizeAndOutput = require(".\\organizeAndOutput.js");

const fs = require("fs");
const path = require("path");

const directoryPath = path.join(__dirname, ".\\log");

fs.writeFileSync("file/deaths.json", "", { flag: "w" });

fs.readdir(directoryPath, function (err, files) {
  if (err) {
    return console.log("Unable to scan directory: " + err);
  }

  files.forEach(function (file) {
    let pathFile = directoryPath + "\\" + file;

    fs.readFile(pathFile, "utf8", function (err, data) {
      if (err) {
        return console.log(err);
      }

      var lines = data.split("\n");

      var match = 0;
      var totalKills = 0;
      var countLines = 0;

      var players = [];
      var deaths = [];
      var deathsFile = [];

      var killsPerPlayer = {};
      var deathsPerPlayer = {};
          
    
      lines.forEach((stepOfGame) => {
        function getKillLine(stepOfGame) {
          countLines++;

          if (stepOfGame.includes("InitGame")) {
            match++;
            players = [];
            totalKills = 0;
            killsPerPlayer = {};
            deathsPerPlayer = {};
            deaths = [];
          }

          if (stepOfGame.includes("Kill:")) {
            var player = stepOfGame.split(": ")[2].split(" killed")[0].trim();
            var deadPlayer = stepOfGame
              .split(": ")[2]
              .split(" killed")[1]
              .split(" by")[0]
              .trim();

            totalKills++;

            if (player.includes("<world>")) {
              if (
                killsPerPlayer[deadPlayer] !== undefined &&
                killsPerPlayer[deadPlayer] > 0
              ) {
                killsPerPlayer[deadPlayer] = killsPerPlayer[deadPlayer] - 1;
              } else {
                killsPerPlayer[deadPlayer] = 0;
              }
            } else if (killsPerPlayer[player] !== undefined) {
              killsPerPlayer[player] = killsPerPlayer[player] + 1;
            } else {
              killsPerPlayer[player] = 1;
              players.push(player);
            }

            var deathCause = stepOfGame.split(": ")[2].split(" by")[1].trim();

            if (deathsPerPlayer[deathCause] !== undefined) {
              deathsPerPlayer[deathCause] = deathsPerPlayer[deathCause] + 1;
            } else {
              deathsPerPlayer[deathCause] = 1;
              deaths.push(deathCause);
            }       

          }
        }

        getKillLine(stepOfGame);

        organizeAndOutput(countLines, lines, match, totalKills, players, killsPerPlayer, deathsPerPlayer, deathsFile);

      });
    });
  });
});










