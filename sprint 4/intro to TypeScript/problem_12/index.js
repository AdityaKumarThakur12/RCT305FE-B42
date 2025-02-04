function getIdentifierInfo(id) {
    if (typeof id === "string") {
        console.log("Identifier is a string. Value: ".concat(id));
    }
    else if (typeof id === "number") {
        console.log("Identifier is a number. Value: ".concat(id));
    }
}
getIdentifierInfo("ABC123");
getIdentifierInfo(101);
