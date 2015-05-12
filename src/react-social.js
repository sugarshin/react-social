/*!
 * @license @sugarshin/react-social
 * (c) sugarshin
 * Fork on olahol/react-social
 * License: MIT
 */

import FacebookCount from './facebook-count';
import FacebookButton from './facebook-button';
import TwitterCount from './twitter-count';
import TwitterButton from './twitter-button';
import PinterestCount from './pinterest-count';
import PinterestButton from './pinterest-button';

if (typeof document === 'undefined' || typeof window === 'undefined') {
  throw new Error('react-social uses jsonp and requires a browser environment');
}

export default {
  FacebookCount: FacebookCount,
  FacebookButton: FacebookButton,
  TwitterCount: TwitterCount,
  TwitterButton: TwitterButton,
  PinterestCount: PinterestCount,
  PinterestButton: PinterestButton
}
