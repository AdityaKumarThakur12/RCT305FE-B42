type Identifier = string | number;

function getIdentifierInfo(id: Identifier): void {
    if (typeof id === "string") {
        console.log(`Identifier is a string. Value: ${id}`);
    } else if (typeof id === "number") {
        console.log(`Identifier is a number. Value: ${id}`);
    }
}

getIdentifierInfo("ABC123");
getIdentifierInfo(101);       
