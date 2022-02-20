import React, { useState, useEffect, useRef } from "react";
import ReactDOM from 'react-dom';

import "./graph-container.css";
import "./grid"
import Grid from "./grid";
import { ITableItem, IPoint } from '../pages/graph-page';
import { Point } from "./point";

//chart drawing parameters
const chartParams = {
    ky: 1000, // Y axis scaling factor
    kx: 50, // X scaling factor , number pixels per one %

    oyn: 20, // Y chart offse from 0
    oxn: 50, //X chart offset from 0

    ly: 1900, // length of axis Y
    lx: 1900, // length of axis X

    stepX: 5, //step of grid X %
    stepY: 0.1 //step of grid Y  ped
};


interface Props {

    table: ITableItem[],
    maxPoint: IPoint

}


const GraphContainer = ({ table, maxPoint }: Props) => {

    const [chartState, setChartState] = useState(chartParams);

    const zoomRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        console.log(maxPoint)
        setChartState((chartState) => ({
            ...chartState,
            kx: (chartState.lx - 100 - chartState.oxn) /(maxPoint.x - 100),
            ky: (chartState.oyn + chartState.ly) / maxPoint.y

        }));
        

    },[maxPoint]);

   

    useEffect(() => {

        const scroll = (e: WheelEvent) => {

            const scrollX = zoomRef.current!.scrollLeft;
            const scrollY = zoomRef.current!.scrollTop;

            if (e.deltaY > 0) {

                setChartState((chartState) => ({
                    ...chartState,
                    kx: chartState.kx + (chartState.kx / 100) * 5,
                    ky: chartState.ky + (chartState.ky / 100) * 5,

                }));
                // if cursor point is near 100%  doesnt zoom by x

                if (e.clientX + scrollX! < 350) {
                    zoomRef.current?.scrollTo(scrollX, scrollY - (chartState.ky / 100) * 5);
                }
                else {
                    zoomRef.current?.scrollTo(scrollX + (chartState.kx / 100) * 40, scrollY - (chartState.ky / 100) * 5);
                }


            }
            else if (chartState.kx > 5 && chartState.ky > 5) {
                setChartState((chartState) => ({
                    ...chartState,
                    kx: chartState.kx - (chartState.kx / 100) * 5,
                    ky: chartState.ky - (chartState.ky / 100) * 5

                }));

                if (e.clientX + scrollX! < 350) {

                    zoomRef.current?.scrollTo(scrollX, scrollY + (chartState.ky / 100) * 5);
                }
                else {
                    zoomRef.current?.scrollTo(scrollX - (chartState.kx / 100) * 40, scrollY + (chartState.ky / 100) * 5);
                }
            }

            e.preventDefault();
        };



        const currentZoomRef = zoomRef?.current;
        currentZoomRef?.addEventListener("wheel", scroll);

        return () => {
            currentZoomRef?.removeEventListener("wheel", scroll);
        };
    }, [chartState.kx, chartState.ky]);


    // <!-- GraphConainer -->
    return (
        <div className="graph-container" ref={zoomRef}  >
            <div className="graph" id="graph">


                <div className="horizontal-axis"
                    style={{
                        width: chartState.lx,
                        left: chartState.oxn,
                        top: chartState.oyn + chartParams.ly
                    }}
                ></div>

                <div className="vertical-axis"
                    style={{
                        height: chartState.ly,
                        left: chartState.oxn,
                        top: chartState.oyn
                    }}
                ></div>

                <Grid  {...chartState} />

                {table.map((row) => (

                    <Point tableRow={row} chartParams={chartState} key={"point-" + row.Quantity} />

                ))
                }

            </div>
        </div>
        //  <!-- GraphConainer -->
    )

};
export default GraphContainer;