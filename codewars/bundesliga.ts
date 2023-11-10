export function table(results: string[]): string {
  let tableArray: string[] = [];

  function setTableArray(
    teamName: string,
    playedMatches: number,
    wonMatches: number,
    tieMatches: number,
    lostMatches: number,
    shotGoals: number,
    gottenGoals: number,
    points: number
  ): string {
    return `${teamName}${playedMatches}  ${wonMatches}  ${tieMatches}  ${lostMatches}  ${shotGoals}:${gottenGoals}  ${points}`;
  }

  results.forEach((result) => {
    let goalResult: string[] = result.substring(0, 3).split(":");
    let teams: string[] = result.substring(4).split("-");

    // console.log(goalResult);
    // console.log(teams);
    let teamName1: string =
      teams[0].trim() + new Array(32 - teams[0].length).join(" ").toString();
    // console.log("TeamName: " + teamName1);
    let teamName2: string =
      teams[1].trim() + new Array(32 - teams[1].length).join(" ").toString();
    // console.log("TeamName: " + teamName2);

    if (goalResult[0] === "-") {
      tableArray.push(setTableArray(teamName1, 0, 0, 0, 0, 0, 0, 0));
      tableArray.push(setTableArray(teamName2, 0, 0, 0, 0, 0, 0, 0));
      // console.log("tableArray in kein Spiel : -> ", tableArray);
    }
    if (Number(goalResult[0]) > Number(goalResult[1])) {
      tableArray.push(
        setTableArray(
          teamName1,
          1,
          1,
          0,
          0,
          parseInt(goalResult[0]),
          parseInt(goalResult[1]),
          3
        )
      );
      tableArray.push(
        setTableArray(
          teamName2,
          1,
          0,
          0,
          1,
          parseInt(goalResult[1]),
          parseInt(goalResult[0]),
          0
        )
      );
      // console.log("tableArray in team1 hat gewonnen : -> ", tableArray);
    }
    if (Number(goalResult[0]) === Number(goalResult[1])) {
      tableArray.push(
        setTableArray(
          teamName1,
          1,
          0,
          1,
          0,
          parseInt(goalResult[0]),
          parseInt(goalResult[1]),
          1
        )
      );
      tableArray.push(
        setTableArray(
          teamName2,
          1,
          0,
          1,
          0,
          parseInt(goalResult[0]),
          parseInt(goalResult[1]),
          1
        )
      );

      // console.log("tableArray in Spiel unentschieden : -> ", tableArray);
    }
    if (Number(goalResult[0]) < Number(goalResult[1])) {
      tableArray.push(
        setTableArray(
          teamName1,
          1,
          0,
          0,
          1,
          parseInt(goalResult[0]),
          parseInt(goalResult[1]),
          0
        )
      );
      tableArray.push(
        setTableArray(
          teamName2,
          1,
          1,
          0,
          0,
          parseInt(goalResult[1]),
          parseInt(goalResult[0]),
          3
        )
      );
      // console.log("tableArray in team2 hat gewonnen : -> ", tableArray);
    }
  });

  console.log("tableArray: ", tableArray);

  let teamsWith3Points: string[] = [];
  let teamsWith1Point: string[] = [];
  let teamsWith0Points: string[] = [];
  function selectTeamsByPoints(points: string, team: string): void {
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

  tableArray.forEach((team) => {
    selectTeamsByPoints(team.substring(team.length - 1), team);
  });

  function sortTeamsByGoalDiff(a: string, b: string): void {
    a.localeCompare(b);
  }

  for (let i: number = 0; i < tableArray.length; i++) {
    teamsWith3Points.sort((a, b) => {
      const shutGoals = tableArray[i].substring(42, 43);
      const gottenGoals = tableArray[i].substring(44, 45);
      if (shutGoals > gottenGoals) {
        return 1;
      } else if (shutGoals < gottenGoals) {
        return -1;
      } else {
        return 0;
      }
    });
  }

  console.log("teams 3Points: ", teamsWith3Points);
  console.log("teams 1 Point: ", teamsWith1Point);
  console.log("teams 0Points: ", teamsWith0Points);
  console.log(
    "goal Differenz: ",
    parseInt(tableArray[1].substring(42, 43)) -
      parseInt(tableArray[1].substring(44, 45))
  );

  // console.log("sorted tableArray: ", tableArray);

  return results.toString();
}

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
