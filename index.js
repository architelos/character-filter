module.exports = function(string, characters) {
    if (typeof string !== 'string') throw new TypeError('The string provided is not a string, maybe try .toString()?')
    
    var validCharacters
    var saniString = string.replace(/\s/g, '')
    var finalString = string

    var validCharacters = (!characters || typeof characters !== 'string') ? ('abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789') : (characters)
    
    for (currentIndex in saniString) {
        var currentCharacter = saniString[currentIndex]
        var result = validCharacters.includes(currentCharacter)
        if (result) {continue} else {var finalString = finalString.replace(currentCharacter, '')}
    }
    var finalStringSani = finalString.replace(/\s{2,}/g, ' ')
    return finalStringSani
}