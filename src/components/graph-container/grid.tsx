
import React from 'react';
import ReactElement from 'react'


interface Props {

  ky: number, // Y axis scaling factor
  kx: number, // X scaling factor , number pixels per one %

  oyn: number, // Y chart offse from 0
  oxn: number, //X chart offset from 0

  ly: number, // length of axis Y
  lx: number, // length of axis X

  stepX: number, //step of grid X %
  stepY: number //step of grid Y  ped
}
const Grid = (chartProps: Props) => {

  const lineStepX = chartProps.stepX * chartProps.kx;
  const lineStepY = chartProps.stepY * chartProps.ky;

  // vertical lines

  const xSlug = 0;
  const vLines = [];

  for (var vLine = 100; vLine < chartProps.lx; vLine += lineStepX) {
    const x = chartProps.oxn + vLine;
    vLines.push(<div className="vertical-line" style={{
      height: chartProps.ly,
      left: x,
      top: chartProps.oyn
    }} />);
  }


  return (
    < div >
      {vLines}
    </div >
  )




}







export default Grid;
