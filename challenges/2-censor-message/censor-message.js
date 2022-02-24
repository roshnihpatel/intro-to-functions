/*function:
=========
name: censorMessage

parameters:
  - MESSAGE: string
  - BAN_LIST: list of strings

return type: string
 */
function censorMessage(message, banList) {
    let rawWords = message.split(" ")
    let scrubbedWords = []
    for (let word of rawWords){
        let lowercaseWord = word.toLocaleLowerCase()
        if (banList.indexOf(lowercaseWord)!== -1){
            scrubbedWords.push("*****")
        }else {
            scrubbedWords.push(word)
        }
    }
    let scrubbedMessage = scrubbedWords.join(" ")
    return scrubbedMessage
}


//test cases
console.log(`censorMessage("don't mess with cats", ["mess"])`, censorMessage("don't mess with cats", ["mess"]), `should be "don't ***** with cats"`)
console.log(`censorMessage("Are you sure that this is safe", ["are", "is"])`, censorMessage("Are you sure that this is safe", ["are", "is"]), `should be "***** you sure that this ***** safe"`)
console.log(`censorMessage("I CANNOT HELP YOU", ["can", "not", "help", "you"])`, censorMessage("I CANNOT HELP YOU", ["can", "not", "help", "you"]), `should be "I CANNOT ***** *****"`)
