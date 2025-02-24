import React from "react";
import Plot from "react-plotly.js";
import styled from "styled-components";
import { useRef } from "react";

const PlotWrapper = styled.section`
  height: 100%;
`;

function EnergyPlot({ generalData }) {
  const plot_data = useRef({
    data: null,
    layout: {
      title: { text: "Drive Mechanism Plot (Energy Plot) (PET 516 GROUP 3)" },
      xaxis: {
        title: {
          text: "Year",
          font: { color: "#000" },
        },
        tickfont: { color: "#000" },
      },
      yaxis: {
        title: { text: "Drive Index", font: { color: "#000" } },
        tickfont: { color: "#000" },
        range: [0, 1],
      },
      legend: { x: 1, y: 1 },
      autosize: true,
      paper_bgcolor: "#c9c3c3",
    },
  });
  const DriveIndex = useRef({
    DDI: 0,
    WDI: 0,
    EDI: 0,
    SDI: 0,
  });

  function AddPlot() {
    const drive_data = generalData.data;
    const Rp = drive_data.Gp / drive_data.Np;
    const We =
      drive_data.Np *
        Math.pow(10, 6) *
        (drive_data.Bt + (Rp - drive_data.Rsi) * drive_data.Bg) -
      drive_data.N*Math.pow(10, 6) *
        (drive_data.Bt -
          drive_data.Bti +
          drive_data.M *
            drive_data.Bti *
            (drive_data.Bg / drive_data.Bgi - 1)) +
            drive_data.N*Math.pow(10, 6) *
        (drive_data.Bti *
          (1 + drive_data.M) *
          (((drive_data.Swi * drive_data.Cw + drive_data.Cf) /
            (1 - drive_data.Swi)) *
            (drive_data.Pi - drive_data.P))) +
      drive_data.Wp * drive_data.Bw;
    const A =
      Math.pow(10, 6) *
      drive_data.Np *
      (drive_data.Bt + (Rp - drive_data.Rsi) * drive_data.Bg);
    const WDI = (We - drive_data.Wp * drive_data.Bw) / A;
    const DDI =
      (Math.pow(10, 6) * drive_data.N * (drive_data.Bt - drive_data.Bti)) / A;
    const SDI =
      (Math.pow(10, 6) *
        drive_data.N *
        drive_data.M *
        drive_data.Bti *
        (drive_data.Bg - drive_data.Bgi)) /
      drive_data.Bgi /
      A;
    const EDI = 1 - (WDI + DDI + SDI)<=0? 0:1 - (WDI + DDI + SDI);
    DriveIndex.current = {
        DDI: DDI.toFixed(4)*100 +'%',
        WDI: WDI.toFixed(4)*100 +'%',
        EDI: EDI.toFixed(4)*100 +'%',
        SDI: SDI.toFixed(4)*100 +'%',
      }
    const WDI_Index = [...new Array(5)].map(v=>WDI);
    const DDI_Index = [...new Array(5)].map(v=>WDI+DDI);
    const EDI_Index = [...new Array(5)].map(v=>WDI+DDI+EDI);
    const SDI_Index = [...new Array(5)].map(v=>WDI+DDI+EDI+SDI);  
    const data = [
      {
        x: [
          "1978-06-30",
          "1980-11-28",
          "1983-04-30",
          "1985-09-29",
          "1988-02-29",
        ],
        y: WDI_Index, // Water Influx
        fill: "tonexty",
        type: "scatter",
        mode: "none",
        name: "Water Drive (WDI): " + DriveIndex.current.WDI,
        marker: { color: "blue" },
      },
      {
        x: [
          "1978-06-30",
          "1980-11-28",
          "1983-04-30",
          "1985-09-29",
          "1988-02-29",
        ],
        y: DDI_Index, // Fluid Expansion
        fill: "tonexty",
        type: "scatter",
        mode: "none",
        name: "Solution Gas Drive (DDI): " + DriveIndex.current.DDI,
        marker: { color: "magenta" },
      },
      {
        x: [
          "1978-06-30",
          "1980-11-28",
          "1983-04-30",
          "1985-09-29",
          "1988-02-29",
        ],
        y: EDI_Index, // PV Compressibility
        fill: "tonexty",
        type: "scatter",
        mode: "none",
        name: "Rock & Fluid Expansion Drive (EDI): " + DriveIndex.current.EDI,
        marker: { color: "red" },
      },
      {
        x: [
          "1978-06-30",
          "1980-11-28",
          "1983-04-30",
          "1985-09-29",
          "1988-02-29",
        ],
        y: SDI_Index, // Gas Cap Expansion
        fill: "tonexty",
        type: "scatter",
        mode: "none",
        name: "Gas Cap Expansion Drive (SDI): " + DriveIndex.current.SDI,
        marker: { color: "green" },
      },
    ];
    plot_data.current.data = data;
  }

  if (generalData.plot) {
    AddPlot();
  }
  return (
    <PlotWrapper>
      <Plot
        data={plot_data.current.data}
        layout={plot_data.current.layout}
        style={{ width: "100%", height: "100%" }}
      />
    </PlotWrapper>
  );
}

export default EnergyPlot;
