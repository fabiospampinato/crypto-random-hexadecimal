
/* IMPORT */

const {describe} = require ( 'fava' );
const {default: random} = require ( '../dist' );

/* MAIN */

describe ( 'Crypto Random Hexadecimal', it => {

  it ( 'generates a random hexadecimal string with the given number of bytes', t => {

    for ( const length of [1, 2, 4, 8, 16, 32, 64, 128] ) {

      for ( let i = 0; i < 25000; i++ ) {

        const hex = random ( length );

        t.is ( hex.length, length * 2 );
        t.true ( /^[a-f0-9]+$/i.test ( hex ) );

      }

    }

  });

});
