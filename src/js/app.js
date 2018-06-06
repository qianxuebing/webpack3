import '../css/common.css';
import '../css/style.less';

const a = "webpack3";
alert(a);

//生成一个整数随机值，数值大于4则返回成功的Promise对象，否则返回错误的promise对象 
function getData() { 
    let promise = new Promise((resolve, reject) => { 
        let key = ~~(Math.random() * 10); 
        let temp = ['es6', 'babel'] 
        if (key >= 5) { 
            let obj = { msg: "ok", data: [key, ...temp] }; 
            resolve.call(this, obj); 
        } else { 
            let obj = { msg: "error", data: [key, ...temp] }; 
            reject.call(this, obj); 
        } 
    }) 
    return promise
} //找到页面中的Dom 
let container = document.querySelector('#app'); 
//获取返回的结果并打印到界面 
getData().then((data) => { 
    container.innerHTML = JSON.stringify(data) }, 
    (err) => { 
        container.innerHTML = JSON.stringify(err) 
    }
)
