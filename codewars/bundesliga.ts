export function table(results: string[]): string {
  results.forEach((result) => {
    let goalResult: string[] = result.substring(0, 3).split(":");
    let teams: string[] = result.substring(4).split("-");

    console.log(goalResult);
    console.log(teams);
    let teamName1: string =
      teams[0].trim() + new Array(32 - teams[0].length).join(" ").toString();
    console.log("TeamName: " + teamName1);
    let teamName2: string =
      teams[1].trim() + new Array(32 - teams[1].length).join(" ").toString();
    console.log("TeamName: " + teamName2);

    if (Number(goalResult[0]) > Number(goalResult[1])) {
      console.log(teamName1 + " hat gewonnen");
    }
    if (Number(goalResult[0]) === Number(goalResult[1])) {
      console.log("Das Spiel war unentschieden");
    }
    if (Number(goalResult[0]) < Number(goalResult[1])) {
      console.log(teamName2 + " hat gewonnen");
    }
  });

  return results.toString();
}

var results = [
  "6:0 FC Bayern Muenchen - Werder Bremen",
  "1:0 Eintracht Frankfurt - Schalke 04",
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
