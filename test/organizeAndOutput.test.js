const mock = require('../fixture/mock.js')
const organizeAndOutput = require('../organizeAndOutput.js')

  test('Verify the organize output and kills by means of game 12', () => {
        const result = organizeAndOutput(
            mock.countLines,
            mock.lines,
            mock.match,
            mock.totalKills,
            mock.players,
            mock.killsPerPlayer,
            mock.deathsPerPlayer
        )

        const expectResult = {
            "gameDict": [
              "game_12",
              {
                "total_kills": 582,
                "players": [
                  "Oootsimo",
                  "Maluquinho",
                  "Chessus"
                ],
                "kills": {
                  "Isgalamido": 81,
                  "Zeh": 73,
                  "Dono da Bola": 32,
                  "Assasinu Credi": 68,
                  "Oootsimo": 63,
                  "Maluquinho": 0,
                  "Mal": 4,
                  "Chessus": 18
                }
              }
            ],
            "deathsFile": [
                [
                    "game-12",
                    {
                        "kills_by_means": {
                            "MOD_TRIGGER_HURT": 98,
                            "MOD_ROCKET_SPLASH": 210,
                            "MOD_FALLING": 30,
                            "MOD_ROCKET": 101,
                            "MOD_RAILGUN": 65,
                            "MOD_MACHINEGUN": 25,
                            "MOD_SHOTGUN": 15,
                            "MOD_TELEFRAG": 25,
                            "MOD_BFG_SPLASH": 7,
                            "MOD_BFG": 4,
                            "MOD_CRUSH": 2
                        }
                    }
                ]
            ]
        }

      expect(result).toEqual(expectResult);
})
