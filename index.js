import store from './store.js';
import html from './html.js';

function render(str){
    $('main').html(str)
}
//store.tryme();
render (html.expandedView());