import layer from './layer.ejs';

function render({ title = 'aaa', btnLabel = 'btnLabel' }) {
    const div = document.createElement('div');
    div.innerHTML = layer({ title, btnLabel });


    document.body.append(div);
    div.querySelector('button').onclick = function() {
        console.log(111);
    };
    return div;
}
export {
    render
};