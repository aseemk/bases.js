var assert = require('assert');
var bases = require('./bases');

// for convenience, bases that begin with zero:
BASES_BEGINNING_WITH_ZERO = [2, 8, 10, 16, 32, 36, 62];

// test zero across those bases:
BASES_BEGINNING_WITH_ZERO.forEach(function (base) {
    assert.equal(bases.toBase(0, base), '0');
});

// test base-10 with random numbers (fuzzy/smokescreen tests):
// note that extremely large numbers (e.g. 39415337704122060) cause bugs due
// to precision (e.g. that % 10 == 4 somehow), so we limit the digits to 16.
for (var i = 0; i < 20; i++) {
    var num = Math.floor(10000000000000000 * Math.random());
    assert.equal(bases.toBase10(num), num.toString());
}

// the test data below is a map from base to lists of [input, exp]:
var DATA =
    { 2:
        [ [1, '1']
        , [2, '10']
        , [3, '11']
        , [4, '100']
        , [20, '10100']
        ]
    , 16:
        [ [1, '1']
        , [2, '2']
        , [9, '9']
        , [10, 'a']
        , [11, 'b']
        , [15, 'f']
        , [16, '10']
        , [17, '11']
        , [31, '1f']
        , [32, '20']
        , [33, '21']
        , [255, 'ff']
        , [256, '100']
        , [257, '101']
        ]
    , 36:
        [ [1, '1']
        , [9, '9']
        , [10, 'a']
        , [35, 'z']
        , [36, '10']
        , [37, '11']
        , [71, '1z']
        , [72, '20']
        , [73, '21']
        , [1295, 'zz']
        , [1296, '100']
        , [1297, '101']
        ]
    , 62:
        [ [1, '1']
        , [9, '9']
        , [10, 'a']
        , [35, 'z']
        , [36, 'A']
        , [61, 'Z']
        , [62, '10']
        , [63, '11']
        , [123, '1Z']
        , [124, '20']
        , [125, '21']
        , [3843, 'ZZ']
        , [3844, '100']
        , [3845, '101']
        ]
    , 26:
        [ [0, 'a']
        , [1, 'b']
        , [25, 'z']
        , [26, 'ba']
        , [27, 'bb']
        , [51, 'bz']
        , [52, 'ca']
        , [53, 'cb']
        , [675, 'zz']
        , [676, 'baa']
        , [677, 'bab']
        ]
    , 52:
        [ [0, 'a']
        , [25, 'z']
        , [26, 'A']
        , [51, 'Z']
        , [52, 'ba']
        , [53, 'bb']
        , [103, 'bZ']
        , [104, 'ca']
        , [105, 'cb']
        , [2703, 'ZZ']
        , [2704, 'baa']
        , [2705, 'bab']
        ]
    , 52:
        [ [0, 'a']
        , [25, 'z']
        , [26, 'A']
        , [51, 'Z']
        , [52, 'ba']
        , [53, 'bb']
        , [103, 'bZ']
        , [104, 'ca']
        , [105, 'cb']
        , [2703, 'ZZ']
        , [2704, 'baa']
        , [2705, 'bab']
        ]
    };

// go through and test all of the above data:
for (var base in DATA) {
    var data = DATA[base];
    for (var i = 0; i < data.length; i++) {
        var num = data[i][0];
        var exp = data[i][1];
        assert.equal(bases.toBase(num, base), exp);
        assert.equal(bases.fromBase(exp, base), num);
    }
}

// finally...
console.log('All tests passed.');
