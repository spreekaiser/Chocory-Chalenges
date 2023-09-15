function duplicateCount(text) {
    var duplicate = 0;
    var searchString = text.toLowerCase();
    var searchArray = searchString.split("");
    console.log("searchString before for-loop: " + searchString);
    for (var i = 0; i < searchArray.length; i++) {
        console.log("loop rounds: " + i);
        console.log("searchString: " + searchString);
        if (searchString.split(searchArray[i]).length > 2) {
            var char = searchArray[i];
            console.log("char: " + char);
            searchString = searchString.replace(new RegExp(char, "g"), "");
            console.log(searchArray[i] + " ist mehr als 1 mal drin");
            duplicate += 1;
            // searchArray.splice(searchArray.indexOf(searchArray[i]), 1);
            console.log("searchString in for-loop: " + searchString);
            console.log("searchArray in for-loop: " + searchArray);
        }
    }
    console.log("searchString after for-loop: " + searchString);
    console.log("duplicate ist: " + duplicate);
    return duplicate;
}
duplicateCount("Indivisibilities");
