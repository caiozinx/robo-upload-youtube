const readLine = require('readline-sync')

function start() {
    const content = {}

    content.searchTerm = askAndReturnSearchTerm()
    content.prefix = askAndReturnPrefix()

    function askAndReturnSearchTerm() {
        return readLine.question('Type a Wikipedia term: ')
    }

    function askAndReturnPrefix(){
        const prefixes = ['Who is', 'Whats is', 'The history of']
        const SelectedPrefixIndex = readLine.keyInSelect(prefixes, 'Choose your prefix.')
        const SelectedPrefixText = prefixes[SelectedPrefixIndex]
        return SelectedPrefixText
    }
    console.log(content)
}

start()