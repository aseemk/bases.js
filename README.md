# bases.js

Utility for converting numbers to different bases/alphabets. Common bases have
convenience aliases (see below), but arbitrary/custom alphabets can be used.


E.g. base-2 uses an alphabet of `01`, base-16 `0123456789abcdef` (notice the
letters are lowercase), base-36 continues to `z`, base-62 adds the uppercase
letters

## Installation

```
npm install bases
```

## Usage

```js
var bases = require('./bases');

bases.toBase16(200);                // => 'c8'
bases.toBase62(99999);              // => 'q0T'
bases.toAlphabet(300, 'aAbBcC');    // => 'Abba'
```

## API

- `toAlphabet(num, alphabet)`: returns a string representation of the given
  number for the given alphabet, where the alphabet is an arbitrary string of
  characters. (See known alphabets below for examples.)

- `toBase(num, base)`: convenience helper for known bases (see below).

- `toBaseX(num)`: convenience helpers for known bases (see below), e.g.
  `toBase62(num)`.

## Known Bases/Alphabets

- Numbers: **base-2** (`01`) through **base-10** (`0123456789`).

- Letters: **base-26** (`abcdefghijklmnopqrstuvwxyz`, notice lowercase only)
  and **base-52** (adds uppercase, i.e. `abc...xyzABC...XYZ`).

- Numbers and letters: base-11 (base-10 + `a`) through **base-16**
  (base-10 + `abcdef`), **base-36** (base-10 + base-26) and **base-62**
  (base-10 + base-52).

- Human-friendly: **base-32** as specified by
  [Douglas Crockford](http://www.crockford.com/wrmg/base32.html) (base-10 +
  uppercase base-26 - `IOLU`) and **base-58** as specified
  by [Flickr](http://www.flickr.com/groups/api/discuss/72157616713786392/)
  (base-62 - `0lIO`).

- **Base-64** <del>[as standardized](http://en.wikipedia.org/wiki/Base64)</del>
  (`ABC...XYZabc...xyz012...789+/`). Besides there being many different
  standards, padding isn't currently added and line lengths aren't tracked.
  Not recommended for use with APIs that expect formal base-64 strings!
  
## License

[MIT license](http://aseemk.mit-license.org/). (c) 2012 Aseem Kishore.

