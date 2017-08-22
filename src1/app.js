import layer from './components/layer/layer';
import "./css/common.css";

$.ajax({
    url: "http://baike.baidu.com/api/openapi/BaikeLemmaCardApi?scope=103&format=json&appid=379020&bk_key=%E9%93%B6%E9%AD%82&bk_length=600",
    type: "get",
    dataType: "jsonp",
    success: function(res) {
        App({
            name: res.abstract
        });
    },
    error: function() {

    }
})

const App = function(obj) {
    let dom = document.getElementById("app");
    // var tpl = new layer().tpl; // html 模板
    let tpl = new layer().tpl;
    dom.innerHTML = tpl(obj);
}