// 博文类型
const TYPE_MAP = {
    '经典之家1': '经典之家1',
    '经典之家2': '经典之家2',
    '经典之家3': '经典之家3',
    '雪夜古堡1': '雪夜古堡1',
    '雪夜古堡2': '雪夜古堡2',
    '雪夜古堡1&2': '雪夜古堡1&2',
    '雪夜古堡3': '雪夜古堡3',
    '夏日游轮1': '夏日游轮1',
    '夏日游轮2': '夏日游轮2',
    '夏日游轮3': '夏日游轮3',
    '太空堡垒1': '太空堡垒1',
    '太空堡垒2': '太空堡垒2',
    '太空堡垒3': '太空堡垒3',
    '游乐场': '游乐场',
    '森林牧场':'森林牧场',
    '熊猫馆': '熊猫馆',
    '大都会':'大都会',
    '御门酒店':'御门酒店',
    '疯狂奶酪赛':'疯狂奶酪赛'
};
document.querySelector('#table-demo-filterCode').GM({
    gridManagerName: 'demo-filterCode',
    ajaxData: 'https://api.myjson.online/v1/records/e5f41d11-76f9-4727-a557-fe5aaceb970d',
    ajaxType: 'GET',
    weight:'1000px', 
    height: '900px',
    columnData: [
        {
            key: 'person',
            text: '速通人',
            align: 'left',
            width: '150px'
        }, {
            key: 'character',
            width: '75px',
            align: 'center',
            text: '角色',
            disableMoveRow: true
        },  {
            key: 'map',
            text: '地图',
            align: 'left',
            width: '100px',
            disableMoveRow: true,
            // 表头筛选条件, 该值由用户操作后会将选中的值以{key: value}的形式覆盖至query参数内。非必设项
            filter: {
                // 筛选条件列表, 数组对象。格式: [{value: '1', text: 'HTML/CSS'}],在使用filter时该参数为必设项。
                option: [
                    {value: '经典之家1', text: '经典之家1'},
                    {value: '经典之家2', text: '经典之家2'},
                    {value: '经典之家3', text: '经典之家3'},
                    {value: '雪夜古堡1', text: '雪夜古堡1'},
                    {value: '雪夜古堡2', text: '雪夜古堡2'},
                    {value: '雪夜古堡1&2', text: '雪夜古堡1&2'},
                    {value: '雪夜古堡3', text: '雪夜古堡3'},
                    {value: '夏日游轮1', text: '夏日游轮1'},
                    {value: '夏日游轮2', text: '夏日游轮2'},
                    {value: '夏日游轮3', text: '夏日游轮3'},
                    {value: '太空堡垒1', text: '太空堡垒1'},
                    {value: '太空堡垒2', text: '太空堡垒2'},
                    {value: '太空堡垒3', text: '太空堡垒3'},
                    {value: '游乐场', text: '游乐场'},
                    {value: '森林牧场', text: '森林牧场'},
                    {value: '熊猫馆', text: '熊猫馆'},
                    {value: '大都会', text: '大都会'},
                    {value: '疯狂奶酪赛', text: '疯狂奶酪赛'},
                    {value: '御门酒店', text: '御门酒店'}
                ],
                // 筛选选中项，字符串, 未存在选中项时设置为''。 在此设置的选中的过滤条件将会覆盖query
                selected: '10',
                // 否为多选, 布尔值, 默认为false。非必设项
                isMultiple: true
            },
            template: function (type, row) {
                return TYPE_MAP[type];
            }
        }, {
            key: 'time',
            width: '130px',  
            text: '速通时间',
            sorting: '',

  // 添加模板函数
            template: function(time) {
            if(!time || time === "cancelled" ||time==="?" || time === "Cancelled")  {
                return 'N/A'; 
            }
    // value是原始excel时间值
            let totalMilliseconds = time * 86400000;
            let minutes = Math.floor(totalMilliseconds / 60000);
            let seconds = Math.floor((totalMilliseconds % 60000) / 1000);
            let milliseconds = Math.round(totalMilliseconds % 1000);
            return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}.${milliseconds.toString().padStart(3, '0')}`;}
              }
              ,
            {
            key: 'date',
            align: 'center',
            width: '200px',
            remind: '如果是经由小程序投稿，显示为投稿时间。如果非小程序投稿，显示为对应平台的视频投稿时间。',
            text: '速通时间/投稿时间',
            template: function(date) {
             // 1. 处理为时间毫秒数 
            const milliseconds = (date - 25569) * 86400 * 1000;
            // 2. 生成 Date 对象
            const DaTE = new Date(milliseconds);

            // 3. 获取日期时间元素
            const year = DaTE.getFullYear();
            const month = DaTE.getMonth() + 1; 
            const day = DaTE.getDate();

            const hours = DaTE.getHours();
            const minutes = DaTE.getMinutes();
            const seconds = DaTE.getSeconds();


            // 4. 拼接返回日期时间格式
            return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
            
            }}
    ]
});