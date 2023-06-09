import { ReactNode } from 'react';
import { inspect } from 'util';

const hyphenate = (str: string) => str.replaceAll(' ', '-');
const slugify = (str: string, id: string) =>
  `${hyphenate(str).toLowerCase()}-${id}`;
const log = (label: string, target: any) =>
  console.log(
    label,
    inspect(target, {
      showHidden: true,
      colors: true,
      depth: null,
    }),
  );
const formatter = new Intl.NumberFormat('en-GB', {
  style: 'currency',
  currency: 'GBP',
});
const formatPrice = (p: any) => {
  return formatter.format(p);
};
export { hyphenate, slugify, log, formatPrice };
