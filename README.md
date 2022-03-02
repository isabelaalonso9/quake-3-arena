# Quake III Arena Challenge

## Description
---
### This project have the purpose of reading a Quake III Arena log for the game and create a script to list players, rank the players by the kills that they made and show total kills of each match. Also, the code generate a report in JSON format to show the "kills by means" used and how many times they were used in each match.
---

## How to execute the code?
---
### First, you should clone the project in your computer using Git Bash command:
```
git clone "https://"
```

### You should have [Node.js](https://nodejs.org/en/download/) installed on your computer, because for this project the language used was JavaScript with Node.js (I used the 14.18.1 version).

### After that, open the project on [Visual Studio Code](https://code.visualstudio.com/download).
### To install the dependencies, access the Visual Studio Code Terminal, use the command:
```
 npm install
 ```
### To execute the project, open the Visual Studio Code Terminal and type the command:
```
node index.js
```

### See the output of the script of each match and it's respective players, total kills and kills per players.

### To access the kills by means of each match, click on folder named "file" and double-click on the file named "deaths.json". See the report in the JSON format that was generated.