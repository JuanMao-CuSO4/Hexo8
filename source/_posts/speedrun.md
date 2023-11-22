---
description: >-
title: 速通
date: 2021.4.5
categories: 猫鼠意识养成课
updated: 2023.10.19
tag: [猫鼠意识养成课,强度]

---

# 速通

<link rel="stylesheet" type="text/css" href="./gridmanager/index.css"/> 

<script type="text/javascript" src="./gridmanager/index.js">
const TYPE_MAP = {
    '1': 'HTML/CSS',
    '2': 'nodeJS',
    '3': 'javaScript',
    '4': '前端鸡汤',
    '5': 'PM Coffee',
    '6': '前端框架',
    '7': '前端相关'
};
document.querySelector('#table-demo-filterCode').GM({
    gridManagerName: 'demo-filterCode',
    ajaxData: 'https://www.lovejavascript.com/blogManager/getBlogList',
    ajaxType: 'POST',
    columnData: [
        {
            key: 'title',
            text: '标题'
        }, {
            key: 'info',
            width: '100px',
            text: '简介',
            disableMoveRow: true
        }, {
            key: 'username',
            align: 'center',
            width: '100px',
            text: '作者',
            disableMoveRow: true
        }
        , {
            key: 'type',
            text: '博文分类',
            align: 'left',
            width: '150px',
            disableMoveRow: true,
            // 表头筛选条件, 该值由用户操作后会将选中的值以{key: value}的形式覆盖至query参数内。非必设项
            filter: {
                // 筛选条件列表, 数组对象。格式: [{value: '1', text: 'HTML/CSS'}],在使用filter时该参数为必设项。
                option: [
                    {value: '1', text: 'HTML/CSS'},
                    {value: '2', text: 'nodeJS'},
                    {value: '3', text: 'javaScript'},
                    {value: '4', text: '前端鸡汤'},
                    {value: '5', text: 'PM Coffee'},
                    {value: '6', text: '前端框架'},
                    {value: '7', text: '前端相关'}
                ],
                // 筛选选中项，字符串, 未存在选中项时设置为''。 在此设置的选中的过滤条件将会覆盖query
                selected: '3',
                // 否为多选, 布尔值, 默认为false。非必设项
                isMultiple: false
            },
            template: function (type, row) {
                return TYPE_MAP[type];
            }
        }, {
            key: 'lastDate',
            width: '130px',
            text: '最后修改时间',
            merge: 'text',
            sorting: '',
            // 使用函数返回 htmlString
            template: function (lastDate, row) {
                return new Date(lastDate).toLocaleDateString();
            }
        }
    ]
});


</script>



<table id='table-demo-baseCode'></table>

```html
// 导入
import 'gridmanager/index.css';
import GridManager from 'gridmanager'; 

// 初始化表格
const grid = new GridManager(document.getElementById('table'), {
  // 配置选项
});

// 渲染数据
grid.setDataSource([
  // 表格数据
]); 

// 其他操作,如排序、筛选等
```

{% gridmanager %}  

var grid = new GridManager(document.getElementById('table'), {   *// 表格数据源* 

const TYPE_MAP = {

  '1': 'HTML/CSS',

  '2': 'nodeJS',

  '3': 'javaScript',

  '4': '前端鸡汤',

  '5': 'PM Coffee',

  '6': '前端框架',

  '7': '前端相关'

};

document.querySelector('#table-demo-filterCode').GM({

  gridManagerName: 'demo-filterCode',

  ajaxData: 'https://www.lovejavascript.com/blogManager/getBlogList',

  ajaxType: 'POST',

  columnData: [

​    {

​      key: 'title',

​      text: '标题'

​    }, {

​      key: 'info',

​      width: '100px',

​      text: '简介',

​      disableMoveRow: true

​    }, {

​      key: 'username',

​      align: 'center',

​      width: '100px',

​      text: '作者',

​      disableMoveRow: true

​    }

​    , {

​      key: 'type',

​      text: '博文分类',

​      align: 'left',

​      width: '150px',

​      disableMoveRow: true,

​      // 表头筛选条件, 该值由用户操作后会将选中的值以{key: value}的形式覆盖至query参数内。非必设项

​      filter: {

​        // 筛选条件列表, 数组对象。格式: [{value: '1', text: 'HTML/CSS'}],在使用filter时该参数为必设项。

​        option: [

​          {value: '1', text: 'HTML/CSS'},

​          {value: '2', text: 'nodeJS'},

​          {value: '3', text: 'javaScript'},

​          {value: '4', text: '前端鸡汤'},

​          {value: '5', text: 'PM Coffee'},

​          {value: '6', text: '前端框架'},

​          {value: '7', text: '前端相关'}

​        ],

​        // 筛选选中项，字符串, 未存在选中项时设置为''。 在此设置的选中的过滤条件将会覆盖query

​        selected: '3',

​        // 否为多选, 布尔值, 默认为false。非必设项

​        isMultiple: false

​      },

​      template: function (type, row) {

​        return TYPE_MAP[type];

​      }

​    }, {

​      key: 'lastDate',

​      width: '130px',

​      text: '最后修改时间',

​      merge: 'text',

​      sorting: '',

​      // 使用函数返回 htmlString

​      template: function (lastDate, row) {

​        return new Date(lastDate).toLocaleDateString();

​      }

​    }

  ]

});

endgridmanager %}