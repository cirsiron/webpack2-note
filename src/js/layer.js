import layerTpl from '../ejs/layer.ejs';

const moduleExport = {
    tpl(content) {
        return layerTpl(content);
    }
}
export default moduleExport;