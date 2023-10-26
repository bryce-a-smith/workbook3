"use strict";

let fullName = "Brenda Kaye";
let counter = 0;

function parseAndDisplayName(n) {
  let firstName, middleName, lastName;

  const firstSpaceIndex = n.indexOf(" ");

  if (firstSpaceIndex == -1) {
    firstName = n;
    console.log(`Name: ${n}\nOnly name: ${firstName}`);
  } else {
    const secondSpaceIndex = n.indexOf(" ", firstSpaceIndex + 1);

    if (secondSpaceIndex == -1) {
      firstName = n.substring(0, firstSpaceIndex);
      lastName = n.substring(firstSpaceIndex + 1);
      console.log(`Name: ${n}\nFirst Name: ${firstName}\nLast Name: ${lastName}\n`);
    } else {
      const thirdSpaceIndex = n.indexOf(" ", secondSpaceIndex + 1);

      if (thirdSpaceIndex == -1) {
        firstName = n.substring(0, firstSpaceIndex);
        middleName = n.substring(firstSpaceIndex + 1, secondSpaceIndex);
        lastName = n.substring(secondSpaceIndex + 1);
        console.log(`Name: ${n}\nFirst Name: ${firstName}\nMiddle Name: ${middleName}\nLast Name: ${lastName}\n`);
      } else {
        function concatMiddleName(name) {
          const spaceIndex = name.indexOf(" ");

          if (spaceIndex == -1) {
            return name;
          } else {
            const nameFirst = name.substring(0, spaceIndex);
            const nameRest = name.substring(spaceIndex + 1);

            const lastIndex = nameRest.lastIndexOf(" ");

            if (lastIndex !== -1) {
              const middleName = nameRest.substring(0, lastIndex);

              return `${nameFirst} ${middleName}`;
            } else {
              return `${nameFirst} ${nameRest}`;
            }
          }
        }
        firstName = n.substring(0, firstSpaceIndex);
        lastName = n.substring(n.lastIndexOf(" "));
        middleName = concatMiddleName(n.substring(firstSpaceIndex));
        console.log(`Name: ${n}\nFirst Name: ${firstName}\nMiddle Name: ${middleName}\nLast Name: ${lastName}\n`);
      }
    }
  }
}


parseAndDisplayName(fullName);
parseAndDisplayName("Ian Auston");
parseAndDisplayName("Siddalee Grace");

parseAndDisplayName("a b c d e f");
parseAndDisplayName("A B C D E F G H I")
