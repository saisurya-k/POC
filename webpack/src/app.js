import 'babel-polyfill';
import cats from './cats';
import $ from 'jquery';
const ul = $('<ul></ul>').appendTo('body');
cats.forEach((cat) => {
    $('<li></li>').text(cat).appendTo(ul);
})
console.log(cats);