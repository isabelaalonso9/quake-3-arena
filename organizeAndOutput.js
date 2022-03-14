const fs = require("fs");

function organizeAndOutput(countLines, lines, match, totalKills, players , killsPerPlayer, deathsPerPlayer) {

    var deathDict = [];
    var gameDict = [];
    var deathsFile = [];
      
    if (countLines < lines.length) {
      
      if (
        countLines == lines.length - 1 ||
        (countLines > 1 && lines[countLines].includes("InitGame"))
      ) {
        
        gameDict = [`game_${match}`];

        gameDict.push({
          total_kills: totalKills,
          players: players,
          kills: killsPerPlayer,
        });

        console.log(gameDict);
        
        deathDict = [`game-${match}`];

        deathDict.push({
          kills_by_means: deathsPerPlayer,
        });

        deathsFile.push(deathDict);

        fs.writeFileSync("file/deaths.json", JSON.stringify(deathDict, undefined, 2), { flag: "a+" });   
      }     
    }
      
    return {gameDict, deathsFile};
}

module.exports = organizeAndOutput;

