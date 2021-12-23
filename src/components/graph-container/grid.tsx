
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

  let xSlug = 0;
  const lines = [];
  // vertical lines
  for (var vLine = 100; vLine < chartProps.lx; vLine += lineStepX) {
    const x = chartProps.oxn + vLine;
    lines.push(<div className="vertical-line" key={"vLine" + vLine} style={{
      height: chartProps.ly,
      left: x,
      top: chartProps.oyn
    }}
    />);
    // X slug
    lines.push(<div className="slug-x"  key={"slug-x" + vLine} style={{
      left: x - 10,
      top: chartProps.oyn + chartProps.ly
    }}  >{100 + xSlug} </div>)
    xSlug += chartProps.stepX;

  }


  // horizontal lines
  let beginY = chartProps.oyn + chartProps.ly;
  let ySlug = 0;

  for (var hLine = 1; (beginY - hLine * lineStepY) > chartProps.oyn; hLine++) {
    const y = beginY - hLine * lineStepY;
    lines.push(<div className="horizontal-line"  key={"hLine" + hLine} style={{
      width: chartProps.lx,
      top: y,
      left: chartProps.oxn
    }} />)



    // slug on y axis
    ySlug += chartProps.stepY;
    lines.push(<div className="slug-y"  key={"slug-y" + hLine} style={{
     
      left: chartProps.oxn - 40,
      top: y - 10
    }}  >{ySlug.toFixed(2)} </div>)


  }


  return (
    < div >
      {lines}
    </div >
  )



}







export default Grid;
