# myexcel
一个简单的模拟excel电子表格的插件，兼容ie8

# 使用

var setting = {

    ifEdit: ifEdit,                                   //是否可以编辑
    
    startCols: col.length > 0 ? col.length : 26,      //初始化多少列
    
    colHeaders: col,                                  //表格第一行
    
    data: data === null ? [] : data                   //需要展示的数据
    
};

excel = $.excel("example", setting);                  //绑定id为example的元素

excel.init();                                         //初始化插件

excel.getData();                                      //获取数据
