# character-filter
Filter/remove characters from a string.

# Install
```
npm install character-filter
```
# Usage
```js
const filter = require('character-filter')
filter('string', 'characters') // If characters is empty, characters will default to 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
```

# Example
```js
const filter = require('character-filter')

console.log(filter('The quick brown fox jumps over the lazy cat.', '')) // The quick brown fox jumps over the lazy cat
console.log(filter('The quick brown fox jumps over the lazy cat.', 'abcdefghijklmnopqrstuvwxyz')) // he quick brown fox jumps over the lazy cat
```