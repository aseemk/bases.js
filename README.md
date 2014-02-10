[![Build Status](https://travis-ci.org/aseemk/bases.js.png?branch=master)](https://travis-ci.org/aseemk/bases.js)

# bases.js

Utility for converting numbers to/from different bases/alphabets.
Common bases have convenience aliases (see below), but arbitrary/custom
alphabets can be used.

## Installation

On the server side w/ Node.js:

```
npm install bases
```

Or in the browser (adds a global `Bases` variable for now):

```html
<script src="bases.js"></script>
```

## Usage

```js
var bases = require('./bases');
  // or window.Bases in the browser

bases.toBase16(200);                // => 'c8'
bases.toBase62(99999);              // => 'q0T'
bases.toAlphabet(300, 'aAbBcC');    // => 'Abba'

bases.fromBase16('c8');               // => 200
bases.fromBase62('q0T');              // => 99999
bases.fromAlphabet('Abba', 'aAbBcC'); // => 300
```

## API

Going from numbers to strings:

- `toAlphabet(num, alphabet)`: returns a string representation of the given
  number for the given alphabet, where the alphabet is an arbitrary string of
  characters. (See known alphabets below for examples.)

- `toBase(num, base)`: convenience helper for known bases (see below).

- `toBaseX(num)`: convenience helpers for known bases (see below), e.g.
  `toBase62(num)`.

Going from strings to numbers:

- `fromAlphabet(str, alphabet)`: returns an integer representation of the given
  string for the given alphabet.

- `fromBase(num, base)`: convenience helper for known bases.

- `fromBaseX(str)`: convenience helpers for known bases.

## Known Bases/Alphabets

Numbers only:

<table>
<tr>
<td><strong>Base-2</strong></td>
<td><code>01</code></td>
</tr>
<tr>
<td><strong>...</strong></td>
<td><code>012...</code></td>
</tr>
<tr>
<td><strong>Base-10</strong></td>
<td><code>0123456789</code></td>
</tr>
</table>

Letters only:

<table>
<tr>
<td><strong>Base-26</strong></td>
<td><code>abcdefghijklmnopqrstuvwxyz</code></td>
</tr>
<tr>
<td><strong>Base-52</strong></td>
<td><code>abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ</code></td>
</tr>
</table>

Alphanumeric:

<table>
<tr>
<td><strong>Base-11</strong></td>
<td><code>0123456789a</code></td>
</tr>
<tr>
<td><strong>...</strong></td>
<td><code>0123456789ab...</code></td>
</tr>
<tr>
<td><strong>Base-16</strong></td>
<td><code>0123456789abcdef</code></td>
</tr>
<tr>
<td><strong>Base-36</strong></td>
<td><code>0123456789abcdefghijklmnopqrstuvwxyz</code></td>
</tr>
<tr>
<td><strong>Base-62</strong></td>
<td><code>0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ</code></td>
</tr>
</table>

Human-friendly:

<table>
<tr>
<td><strong>Base-32</strong> (<a href="http://www.crockford.com/wrmg/base32.html" target="_blank">from Douglas Crockford</a>)</td>
<td><code>0123456789ABCDEFGHJKMNPQRSTVWXYZ</code> (no <code>IOLU</code>)</td>
</tr>
<tr>
<td><strong>Base-58</strong> (<a href="http://www.flickr.com/groups/api/discuss/72157616713786392/" target="_blank">from Flickr</a>)</td>
<td><code>123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ</code> (no <code>0lIO</code>)</td>
</tr>
</table>

Other:

<table>
<tr>
<td><strong>Base-64</strong> (<a href="http://en.wikipedia.org/wiki/Base64" target="_blank">as standardized</a>)</td>
<td><code>ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/</code></td>
</tr>
</table>

Base-64 warning: besides there being several different standards, padding isn't currently added and line lengths aren't tracked. Not recommended for use with APIs that expect formal base-64 strings!

## License

[MIT license](http://aseemk.mit-license.org/). (c) 2012-2014 Aseem Kishore
and [contributors](https://github.com/aseemk/bases.js/graphs/contributors).
