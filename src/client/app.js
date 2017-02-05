/**
 * Created by miguel on 5/02/17.
 */
// import 'babel-polyfill';
import Dog from '../shared/dog';

const browserToby = new Dog('Browser Toby');

document.querySelector('.app').innerText = browserToby.bark();
