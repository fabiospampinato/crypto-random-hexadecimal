
/* IMPORT */

import randomBigInt from 'crypto-random-bigint';

/* MAIN */

const randomHexadecimal = ( bytes: number ): string => {

  return randomBigInt ( bytes * 8 ).toString ( 16 ).padStart ( bytes * 2, '0' );

};

/* EXPORT */

export default randomHexadecimal;
