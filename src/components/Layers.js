import { ScatterplotLayer, HexagonLayer } from "deck.gl";

const convertStats = {
  normal: "通常",
  restriction: "制限",
  stop: "停止",
  nobeds: "設置なし",
  unanswered: "未回答"
};

const convertType = {
  ambulatoryCare_weekdays: "外来（平日）",
  ambulatoryCare_holiday: "外来（土日）",
  admission: "入院",
  emergency: "救急",
  dialysis: "透析",
  chemotherapy: "化学療法"
};

const scatterColor = {
  通常: [23, 190, 187],
  制限: [255, 165, 0],
  停止: [214, 34, 70],
  設置なし: [192, 192, 192],
  未回答: [137, 137, 137]
};

const colorRange = [
  [1, 152, 189],
  [73, 227, 206],
  [216, 254, 181],
  [254, 237, 177],
  [254, 173, 84],
  [209, 55, 78]
];

export default props => {
  const {
    data,
    layerType,
    hospitalState,
    hospitalType,
    onHover,
    onClick
  } = props;

  if (!data) return;

  const statefilter = Object.keys(hospitalState)
    .filter(key => hospitalState[key])
    .map(key => convertStats[key]);

  const typefilter = Object.keys(hospitalType)
    .filter(key => hospitalType[key])
    .map(key => convertType[key]);

  const plotdata = data.filter(
    d =>
      statefilter.some(v => d["医療区分回答"] === v) &&
      typefilter.some(v => d["医療区分"] === v)
  );

  const scatter = new ScatterplotLayer({
    id: "scatterplot-layer",
    data: plotdata,
    pickable: true,
    opacity: 0.5,
    stroked: true,
    filled: true,
    radiusScale: 1,
    radiusMinPixels: 6,
    lineWidthMinPixels: 1,
    getPosition: d => [d["経度"], d["緯度"]],
    getRadius: 0,
    getFillColor: d => scatterColor[d["医療区分回答"]],
    getLineColor: d => scatterColor[d["医療区分回答"]],
    onClick: onClick,
    onHover: onHover
  });

  const hex = new HexagonLayer({
    id: "hexagon-layer",
    data: plotdata,
    colorDomain: [0, 50],
    colorRange,
    opacity: 0.8,
    radius: 10000,
    pickable: true,
    extruded: true,
    elevationScale: 60,
    elevationRange: [0, 3000],
    getPosition: d => [d["経度"], d["緯度"]],
    getColorValue: d => {
      const alllength = d.length;
      let count = 0;
      for (let i = 0; i < d.length; i++) {
        if (d[i]["医療区分回答"] === "停止" || d[i]["医療区分回答"] === "制限")
          count++;
      }
      const percent = ~~((count / alllength) * 100);
      return percent;
    },
    onClick: onClick,
    onHover: onHover
  });

  const ramify = {
    point: scatter,
    hex: hex
  };

  const layers = [ramify[layerType]];

  return layers;
};
