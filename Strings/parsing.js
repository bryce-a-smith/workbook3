"use strict";

let fullName = "Brenda Kaye";

function parseAndDisplayName (n) {
    let pos = n.indexOf(" ");
    let first = n.substring(0, pos);
    let last = n.substring(pos + 1);
    console.log(`Full Name: ${n}\nFirst Name: ${first}\nLast Name: ${last}\n`);
}

parseAndDisplayName(fullName);
parseAndDisplayName("Ian Auston");
parseAndDisplayName("Siddalee Grace");

