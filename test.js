var bmapChart = echarts.init(document.getElementById('main'));

var myData = [
  	{name: '上海铁路公安局', value: [121.459689,31.256142]},
  	{name: '杭州公安处', value: [120.193898,30.251371]},
  	{name: '徐州公安处', value: [117.213226,34.267349]},
    {name: '合肥公安处', value: [117.270906,31.839507]},
    {name: '南京公安处', value: [118.807512,32.089453]},
];
var option = {
	
	bmap: {
      	center: [116.013413,32.032953], // 中心位置坐标
      	zoom: 8, // 地图缩放比例
      	roam: true ,// 开启用户缩放
      	enableMapClick: false,
      	mapStyle: {
        	styleJson: [
          	{"featureType": "all","elementType": "all","stylers": {"lightness": 0,}}, 
          	{"featureType": "highway","elementType": "geometry.fill", "stylers": {"color": "#ffffff"}}, 
          	{"featureType": "poi","elementType": "labels.icon","stylers": {"visibility": "off"}}, 
        		{'featureType': 'land', 'elementType': 'geometry','stylers': {'color': '#135cb5'}},//土地   
        		{'featureType': 'building', 'elementType': 'geometry','stylers': {'visibility': 'off','color': '#04406F'}},//建筑物
        		{'featureType': 'building', 'elementType': 'labels','stylers': {'visibility': 'off'}}, //建筑物标签
        		{'featureType': 'highway', 'elementType': 'geometry','stylers': {'visibility': 'off','color': '#092C4A'}},//高速道路
        		{'featureType': 'highway', 'elementType': 'labels','stylers': {'visibility': 'off','visibility': 'off'}},//高速标签
         		{'featureType': 'arterial',  'elementType': 'geometry','stylers': {'visibility': 'off','color': '#092C4A'}},//干道
        		{'featureType': 'arterial','elementType': 'labels','stylers': {'visibility': 'off','visibility': 'off'}}, //干道标签
        		{'featureType': 'green','elementType': 'geometry','stylers': {'visibility': 'off' }},//绿地
        		{'featureType': 'water','elementType': 'geometry','stylers': {'visibility': 'off','color': '#044161'}}, //水
        		{'featureType': 'subway', 'elementType': 'geometry.stroke','stylers': {'visibility': 'off','color': '#092C4A','lightness': -65}},//地铁
        		{'featureType': 'subway','elementType': 'labels', 'stylers': {'visibility': 'off','visibility': 'off'}}, //地铁标签
        		{'featureType': 'railway','elementType': 'geometry','stylers': {'visibility': 'on'}},//铁路
        		{'featureType': 'railway','elementType': 'labels','stylers': {'visibility': 'on',} }, //铁路标签
        		{'featureType': 'all','elementType': 'labels.text.stroke','stylers': {'color': '#135cb5'}}, //所有标签（边缘）
        		{'featureType': 'all', 'elementType': 'labels.text.fill', 'stylers': {'color': '#cccccc'} },//所有标签（填充）
        		{'featureType': 'manmade','elementType': 'geometry','stylers': {'visibility': 'off' }},//自定义
        		{'featureType': 'manmade','elementType': 'labels', 'stylers': {'visibility': 'off'}},//自定义标签
        		{'featureType': 'local','elementType': 'geometry','stylers': {'visibility': 'off'}}, 
        		{'featureType': 'local','elementType': 'labels','stylers': {'visibility': 'off'}},
        		{'featureType': 'boundary', 'elementType': 'geometry','stylers': {'color': '#8b8787','weight': '1','lightness': -29}},//边框
            ]
        }
  	},
  	visualMap: {	// 视觉映射组件
		type: 'piecewise',
        show: false,
        bottom: '10',
        left:"10",
        orient: 'vertical',
        min: 1000,
        max: 20000,
        seriesIndex: 0,
        calculable: true,
        pieces: [{max: 5000,}, {max: 8000,},{max: 12000,},{max: 15000,}, {max: 20000,}, {min: 20000,}],
        inRange: {color: ['#fff'],symbolSize: [25],opacity:[0.5],align:["center"]},
        hoverLink:true,

    },
    series: [
		{
			
			type: 'scatter',

			coordinateSystem: 'bmap', // 坐标系使用bmap

			data: myData,
			 minOpacity: 0.5,
	        pointSize: 120,
	        blurSize: 20
		}
	]
}

bmapChart.setOption(option);
var bmap = bmapChart.getModel().getComponent('bmap').getBMap();
bmap.addControl(new BMap.NavigationControl()); // 缩放控件
bmap.addControl(new BMap.ScaleControl()); // 比例尺 
bmap.addControl(new BMap.MapTypeControl());                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
