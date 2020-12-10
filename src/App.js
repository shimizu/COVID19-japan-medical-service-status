import React, { useEffect, useState, useRef } from "react";
import AppBar from "@material-ui/core/AppBar";

import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

import MapGL from "react-map-gl";
import DeckGL, { MapController } from "deck.gl";
import layers from "./components/Layers";

import CheckBoxs from "./components/CheckBoxs";
import CheckBoxs2 from "./components/CheckBoxs2";
import BottomBtn from "./components/BottomBtn";
import SimpleModal from "./components/modal";

import { parse, fetchFile } from "@loaders.gl/core";
import { ZipLoader } from "@loaders.gl/zip";
import decodeText from "./components/DecodeText.js";
import { csvParse } from "d3-dsv";

import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const TITLE = "医療提供体制の状況(2020/12/9 時点)";

//mapboxのトークンは自分で取得したものに変更してください。
//このトークンは突然使えなくなる可能性があります。
const MAPBOX_TOKEN =
  "pk.eyJ1Ijoic2hpbWl6dSIsImEiOiJjam95MDBhamYxMjA1M2tyemk2aHMwenp5In0.i2kMIJulhyPLwp3jiLlpsA";
const MAPBOX_STYLE = "mapbox://styles/shimizu/ckaa9wckx31kw1it9kdk7lg0x";

const DATA_URL = "data/covid-19_daily_survey.zip?" + new Date().getDate();

const data_order = {
  通常: 3,
  制限: 2,
  停止: 1,
  設置なし: 4,
  未回答: 5
};
const tableFontColor = {
  通常: "#17bebb",
  制限: "#FFA500",
  停止: "#d62246",
  設置なし: "#c0c0c0",
  未回答: "#898989"
};

//data convert fnction
const csvcast = (d, i) => {
  d.id = d.code;
  Object.keys(d).forEach(key => {
    if (!isNaN(+d[key]) && key !== "id") d[key] = +d[key];
  });
  return d;
};

const tableStyles = makeStyles({
  table: {
    maxHeight: 400,
    overflow: "auto",
    "& th": {
      fontWeight: "bold",
      whiteSpace: "nowrap"
    },
    "& td": {
      whiteSpace: "nowrap"
    }
  }
});

function App() {
  const mapRef = useRef(null);
  const bbtnRef = useRef(null);

  const tableClass = tableStyles();

  const [data, setData] = useState(null);

  const [cursor, setCursor] = useState("move");

  const [hospitalState, setHospitalState] = useState({
    normal: true,
    restriction: true,
    stop: true,
    nobeds: true,
    unanswered: true
  });

  const [hospitalType, setHospitalType] = useState({
    ambulatoryCare_weekdays: true,
    ambulatoryCare_holiday: true,
    admission: true,
    emergency: true,
    dialysis: true,
    chemotherapy: true
  });

  const [layerType, setLayerType] = useState("point");

  const [viewport, setViewport] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
    longitude: 139.0110974,
    latitude: 36.3226885,
    zoom: 6,
    maxZoom: 20
  });

  const [modalBody, setModalbody] = useState(null);
  const [modalOpen, setModalOpen] = React.useState(false);

  const getMapsize = () => {
    const width = mapRef.current ? mapRef.current.offsetWidth : 0;
    const height = mapRef.current ? mapRef.current.offsetHeight : 0;
    const bbtnHeight = bbtnRef.current ? bbtnRef.current.offsetHeight : 0;

    setViewport(v => {
      return {
        ...v,
        width: width,
        height: height - bbtnHeight
      };
    });
  };

  //ロード時にコンポネーントのwidth,heightを取得
  useEffect(getMapsize, []);

  useEffect(() => {
    //地価データ取得
    const fetchData = async url => {
      const buff = await parse(fetchFile(url), ZipLoader);
      const key = Object.keys(buff)[0];
      decodeText(buff[key]).then(text => {
        const loadData = csvParse(text, csvcast);
        loadData.sort(
          (a, b) =>
            data_order[b["医療区分回答"]] - data_order[a["医療区分回答"]]
        );
        setData(loadData);
      });
    };
    fetchData(DATA_URL);
  }, []);

  //resize
  useEffect(() => {
    window.addEventListener("resize", getMapsize);
    return () => window.removeEventListener("resize", getMapsize);
  }, []);

  const handlerOnHover = e => {
    const cur = e.object ? "pointer" : "move";
    setCursor(cur);
  };

  const createTable = data => {
    const rows = data
      .sort((a, b) => a["医療機関ID"] - b["医療機関ID"])
      .map((d, i) => {
        return {
          key: i,
          a: d["医療機関名"],
          b: d["医療区分"],
          c: d["医療区分回答"],
          d: d["医療機関住所"],
          e: d["提出日"]
        };
      });

    return (
      <TableContainer className={tableClass.table} component={Paper}>
        <Table size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell align="left">医療機関名</TableCell>
              <TableCell align="left">医療区分回答</TableCell>
              <TableCell align="left">医療区分</TableCell>
              <TableCell align="left">医療機関住所</TableCell>
              <TableCell align="left">提出日</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <TableRow key={row.key}>
                <TableCell align="left">{row.a}</TableCell>
                <TableCell
                  style={{ fontWeight: "bold", color: tableFontColor[row.c] }}
                  align="left"
                >
                  {row.c}
                </TableCell>
                <TableCell align="left">{row.b}</TableCell>
                <TableCell align="left">{row.d}</TableCell>
                <TableCell align="left">{row.e}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  };

  const handlerOnClickLayer = e => {
    const data = e.object.points || [e.object];
    if (!data) return;
    const body = createTable(data);
    setModalbody(body);
    setModalOpen(true);
  };

  const handlerOnColse = () => {
    setModalOpen(false);
  };

  return (
    <>
      <div id="header">
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6">{TITLE}</Typography>
          </Toolbar>
        </AppBar>
        <CheckBoxs value={hospitalState} onChange={setHospitalState} />
        <CheckBoxs2 value={hospitalType} onChange={setHospitalType} />
        <SimpleModal
          body={modalBody}
          open={modalOpen}
          onClose={handlerOnColse}
        />
      </div>
      <div id="panel"></div>
      <div id="map" ref={mapRef}>
        <MapGL
          style={{}}
          {...viewport}
          mapboxApiAccessToken={MAPBOX_TOKEN}
          mapStyle={MAPBOX_STYLE}
          onViewportChange={v => setViewport(v)}
        >
          <DeckGL
            getCursor={() => cursor}
            layers={layers({
              data,
              layerType: layerType,
              hospitalState: hospitalState,
              hospitalType: hospitalType,
              onHover: handlerOnHover,
              onClick: handlerOnClickLayer
            })}
            controller={{ type: MapController, dragRotate: false }}
            initialViewState={viewport}
          />
        </MapGL>
      </div>

      <div id="bottom" ref={bbtnRef}>
        <BottomBtn value={layerType} onChange={setLayerType} />
      </div>
    </>
  );
}

export default App;

/*


        */
