import { createClient } from '@urql/core';
import 'isomorphic-unfetch';

export const client = createClient({
  url: 'https://api-mumbai.lens.dev',
});
