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

    console.log(goalResult);
    console.log(teams);
    let teamName1: string =
      teams[0].trim() + new Array(32 - teams[0].length).join(" ").toString();
    // console.log("TeamName: " + teamName1);
    let teamName2: string =
      teams[1].trim() + new Array(32 - teams[1].length).join(" ").toString();
    // console.log("TeamName: " + teamName2);

    if (goalResult[0] === "-") {
      tableArray.push(setTableArray(teamName1, 0, 0, 0, 0, 0, 0, 0));
      tableArray.push(setTableArray(teamName2, 0, 0, 0, 0, 0, 0, 0));
      console.log("tableArray in kein Spiel : -> ", tableArray);
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
      console.log("tableArray in team1 hat gewonnen : -> ", tableArray);
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

      console.log("tableArray in Spiel unentschieden : -> ", tableArray);
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
      console.log("tableArray in team2 hat gewonnen : -> ", tableArray);
    }
  });

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
