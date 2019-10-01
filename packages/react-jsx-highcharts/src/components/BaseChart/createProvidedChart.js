import { attempt } from 'lodash-es';
import debounce from '../../utils/debounce-raf';

const createProvidedChart = (chart, type) => ({
  object: chart,
  type,
  get: chart.get.bind(chart),
  setSize: chart.setSize.bind(chart),
  update: chart.update.bind(chart),
  addAxis: chart.addAxis.bind(chart),
  addSeries: chart.addSeries.bind(chart),
  setTitle: chart.setTitle.bind(chart),
  setCaption: chart.setCaption.bind(chart),
  showLoading: chart.showLoading.bind(chart),
  hideLoading: chart.hideLoading.bind(chart),
  addCredits: chart.addCredits.bind(chart),
  addAnnotation: chart.addAnnotation ? chart.addAnnotation.bind(chart) : null,
  removeAnnotation: chart.removeAnnotation
    ? chart.removeAnnotation.bind(chart)
    : null,
  needsRedraw: debounce(() => {
    if (!chart.__destroyed) {
      attempt(chart.redraw.bind(chart));
    }
  })
});

export default createProvidedChart;
