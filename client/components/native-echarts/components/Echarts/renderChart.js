import echarts from './echarts.min';
import { Map } from 'immutable'
import toString from '../../util/toString';

export default function renderChart(props) {
  const height = props.height || 400;
  let option = {};
  if(Map.isMap(props.option)){
    option = props.option.toJS();
  }else{
    option = props.option;
  }
  return `
    document.getElementById('main').style.height = "${height}px";
    var myChart = echarts.init(document.getElementById('main'));
    myChart.setOption(${toString(option)});
  `
}
