import x from './module-1' //x是module-1默认导出的fn
import y from './module-2' //y是module-2默认导出的fn
import '../css/style.scss' //scss翻译成css，加载到js中

x()
y()

//app.js 引用并使用了module-1和module-2这两个模块