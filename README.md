# Crypto Random Hexadecimal

Generate a cryptographically-random hexadecimal string with the given number of bytes of entropy.

## Install

```sh
npm install --save crypto-random-hexadecimal
```

## Usage

```ts
import random from 'crypto-random-hexadecimal';

random ( 8 ); // => '4e8eefd571e21e56'
random ( 16 ); // => '402c59006784a2a55e994589693e907c'
random ( 32 ); // => 'e605724a1b4e9edd78af52687940a25e72e663f92b4c8db079988fe807c951e9'
random ( 64 ); // => 'bd23c22e74d98991bd76380be566f9e984a78b64d352c14cfd02d28363683edd97fcc8881e7d8d707c98d86e768cda107468339c66ff53948eba98f6c7d66b99'
random ( 128 ); // => '546100dc267735ec68a034575bf0aca61f862489d220788425768537b8899e0ff1d1c987eb1235496b135fb17c03720409942a65171ca7767ccf5a084aaa53f1fbfc6d5f40b958856da258335323c111c644012e880e1bb9ddc34bf36090cf1e96ec65d0f5720a6fc1dd6b630281aa15875d0a13343497487b872623affea9bd'
```

## License

MIT © Fabio Spampinato
