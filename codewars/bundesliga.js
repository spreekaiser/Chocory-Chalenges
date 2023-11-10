"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.table = void 0;
function table(results) {
    var tableArray = [];
    function setTableArray(teamName, playedMatches, wonMatches, tieMatches, lostMatches, shotGoals, gottenGoals, points) {
        return "".concat(teamName).concat(playedMatches, "  ").concat(wonMatches, "  ").concat(tieMatches, "  ").concat(lostMatches, "  ").concat(shotGoals, ":").concat(gottenGoals, "  ").concat(points);
    }
    results.forEach(function (result) {
        var goalResult = result.substring(0, 3).split(":");
        var teams = result.substring(4).split("-");
        // console.log(goalResult);
        // console.log(teams);
        var teamName1 = teams[0].trim() + new Array(32 - teams[0].length).join(" ").toString();
        // console.log("TeamName: " + teamName1);
        var teamName2 = teams[1].trim() + new Array(32 - teams[1].length).join(" ").toString();
        // console.log("TeamName: " + teamName2);
        if (goalResult[0] === "-") {
            tableArray.push(setTableArray(teamName1, 0, 0, 0, 0, 0, 0, 0));
            tableArray.push(setTableArray(teamName2, 0, 0, 0, 0, 0, 0, 0));
            // console.log("tableArray in kein Spiel : -> ", tableArray);
        }
        if (Number(goalResult[0]) > Number(goalResult[1])) {
            tableArray.push(setTableArray(teamName1, 1, 1, 0, 0, parseInt(goalResult[0]), parseInt(goalResult[1]), 3));
            tableArray.push(setTableArray(teamName2, 1, 0, 0, 1, parseInt(goalResult[1]), parseInt(goalResult[0]), 0));
            // console.log("tableArray in team1 hat gewonnen : -> ", tableArray);
        }
        if (Number(goalResult[0]) === Number(goalResult[1])) {
            tableArray.push(setTableArray(teamName1, 1, 0, 1, 0, parseInt(goalResult[0]), parseInt(goalResult[1]), 1));
            tableArray.push(setTableArray(teamName2, 1, 0, 1, 0, parseInt(goalResult[0]), parseInt(goalResult[1]), 1));
            // console.log("tableArray in Spiel unentschieden : -> ", tableArray);
        }
        if (Number(goalResult[0]) < Number(goalResult[1])) {
            tableArray.push(setTableArray(teamName1, 1, 0, 0, 1, parseInt(goalResult[0]), parseInt(goalResult[1]), 0));
            tableArray.push(setTableArray(teamName2, 1, 1, 0, 0, parseInt(goalResult[1]), parseInt(goalResult[0]), 3));
            // console.log("tableArray in team2 hat gewonnen : -> ", tableArray);
        }
    });
    console.log("tableArray: ", tableArray);
    var teamsWith3Points = [];
    var teamsWith1Point = [];
    var teamsWith0Points = [];
    function selectTeamsByPoints(points, team) {
        if (points === "3") {
            teamsWith3Points.push(team);
        }
        if (points === "1") {
            teamsWith1Point.push(team);
        }
        if (points === "0") {
            teamsWith0Points.push(team);
        }
    }
    tableArray.forEach(function (team) {
        selectTeamsByPoints(team.substring(team.length - 1), team);
    });
    function sortTeamsByGoalDiff(a, b) {
        a.localeCompare(b);
    }
    var _loop_1 = function (i) {
        teamsWith3Points.sort(function (a, b) {
            var shutGoals = tableArray[i].substring(42, 43);
            var gottenGoals = tableArray[i].substring(44, 45);
            if (shutGoals > gottenGoals) {
                return 1;
            }
            else if (shutGoals < gottenGoals) {
                return -1;
            }
            else {
                return 0;
            }
        });
    };
    for (var i = 0; i < tableArray.length; i++) {
        _loop_1(i);
    }
    console.log("teams 3Points: ", teamsWith3Points);
    console.log("teams 1 Point: ", teamsWith1Point);
    console.log("teams 0Points: ", teamsWith0Points);
    console.log("goal Differenz: ", parseInt(tableArray[1].substring(42, 43)) -
        parseInt(tableArray[1].substring(44, 45)));
    // console.log("sorted tableArray: ", tableArray);
    return results.toString();
}
exports.table = table;
var results = [
    "6:0 FC Bayern Muenchen - Werder Bremen",
    "-:- Eintracht Frankfurt - Schalke 04",
    "0:2 FC Augsburg - VfL Wolfsburg",
    "1:1 Hamburger SV - FC Ingolstadt",
    "2:0 1. FC Koeln - SV Darmstadt",
    "2:1 Borussia Dortmund - FSV Mainz 05",
    "2:1 Borussia Moenchengladbach - Bayer Leverkusen",
    "2:1 Hertha BSC Berlin - SC Freiburg",
    "2:2 TSG 1899 Hoffenheim - RasenBall Leipzig",
];
var actualTable = table(results);
console.log(actualTable);
