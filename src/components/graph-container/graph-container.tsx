import React, { useState, useEffect, useRef } from "react";
import ReactDOM from 'react-dom';

import "./graph-container.css";
import "./grid"
import Grid from "./grid";
import { ITableItem } from "../pages/graph-page";
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

}


const GraphContainer = ({ table }: Props) => {

    const [chartState, setChartState] = useState(chartParams);

    const zoomRef = useRef<HTMLDivElement>(null);

    const scroll = (e: WheelEvent) => {
        console.log(e.deltaY);
        const scrollX = zoomRef.current?.scrollTop;
        const scrollY = zoomRef.current?.scrollTop;
        const kx0 = chartState.kx;
        const ky0 = chartState.ky;

        if (e.deltaY > 0) {

            setChartState((chartState) => ({
                ...chartState,
                kx: chartState.kx + (chartState.kx / 100) * 5,
                ky: chartState.ky + (chartState.ky / 100) * 5,

            }));
        }
        else if (chartState.kx > 5 && chartState.ky > 5) {
            setChartState((chartState) => ({
                ...chartState,
                kx: chartState.kx - (chartState.kx / 100) * 5,
                ky: chartState.ky - (chartState.ky / 100) * 5

            }));
        }

        // отмасштабируем при помощи CSS
        //     if (delta > 0) {
        //         kx0 = item.kx;
        //         ky0 = item.ky;
        //         item.kx = item.kx + (item.kx / 100) * 5;
        //         item.ky = item.ky + (item.ky / 100) * 5;
        //         $(graphContainer)
        //             .scrollLeft(100 + params.oxn + (scrollX - 100 - params.oxn) * item.kx / kx0);

        //         $(graphContainer)
        //             .scrollTop(params.oyn + params.ly + (scrollY - params.oyn - params.ly) * item.ky / ky0);
        //     }
        //     else
        //         if (item.kx > 5 && item.ky > 5) {
        //             kx0 = item.kx;
        //             ky0 = item.ky;
        //             item.kx = item.kx - (item.kx / 100) * 5;
        //             item.ky = item.ky - (item.ky / 100) * 5;

        //             $(graphContainer)
        //              .scrollLeft(100 + params.oxn + (scrollX - 100 - params.oxn) * item.kx / kx0);

        //             $(graphContainer)
        //                 .scrollTop(params.oyn + params.ly + (scrollY - params.oyn - params.ly) * item.ky / ky0);

        //         };
        //     redrawChart();
        //     // отменим прокрутку 
        //     e.preventDefault();
        // });



        e.preventDefault();
    };


    useEffect(() => {
        const currentZoomRef = zoomRef?.current;

        currentZoomRef?.addEventListener("wheel", scroll);

        return () => {
            currentZoomRef?.removeEventListener("wheel", scroll);
        };
    }, []);


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