import React, { useState, useEffect, useRef } from "react";
import ReactDOM from 'react-dom';
import "./graph.css";
import "./grid"
import Grid from "./grid";
import { ITableRow, IPoint } from "../../context/graph-context";
import { DataContext } from "../../context/graph-context"
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

const Graph = () => {

    const graphContext = React.useContext(DataContext);
    const [chartState, setChartState] = useState(chartParams);
    const zoomRef = useRef<HTMLDivElement>(null);
    // console.log("maxpoint", maxPoint);

    // useEffect(() => {
    //     //console.log(maxPoint)
    //     if (maxPoint.x !== 0 && maxPoint.y !== 0) {

    //         setChartState((chartState) => ({
    //             ...chartState,
    //             kx: (chartState.lx - 100 - chartState.oxn) / (maxPoint.x - 100),
    //             ky: (chartState.oyn + chartState.ly) / maxPoint.y



    //         }));

    //         console.log("chartState", chartState)



    //     }
    //     //     setChartState((chartState) => ({
    //     //         ...chartState,
    //     //         kx: (chartState.lx - 100 - chartState.oxn) /(maxPoint.x - 100),
    //     //         ky: (chartState.oyn + chartState.ly) / maxPoint.y

    //     //     }));


    // }, [maxPoint]);



    useEffect(() => {

        const scroll = (e: WheelEvent) => {

            const scrollX = zoomRef.current!.scrollLeft;
            const scrollY = zoomRef.current!.scrollTop;
            // zoom in
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
            //zoom out
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

    //scroll to selected point   
    useEffect(() => {
        let x, y: number;
        const selectedPoint = graphContext?.table.filter((tableRow: ITableRow) => {
            if (tableRow.IsSelected === true)
                return tableRow;
        })[0];

        if (graphContext?.scrollTo === "point") {

            x = 100 + chartState.oxn + (selectedPoint!.Markup - 100) * chartState.kx;
            y = chartState.oyn + chartState.ly - selectedPoint!.Profit * chartState.ky;

            // if point in the visible are of chart

            if (x <= chartState.oxn + chartState.lx && y >= 0) {

                const centerX = zoomRef.current?.offsetWidth;
                const centerY = zoomRef.current?.offsetHeight;

                zoomRef.current?.scrollTo({
                    left: x - centerX! / 2,
                    top: y - centerY! / 2,
                    behavior: "smooth"
                })
            }
            else {

                // todo If point in the invisible area, show inscription "Out of range"

                // x = graphContainer.scrollLeft() + 100;
                // y = graphContainer.scrollTop() + 100;

                // $('#graph').append('<div class = "out-of-range"' +
                //     'style="left:' + x + 'px; top:' + y + 'px;">' +
                //     'Out of range </div>');
            }


            // zoomRef.current?.scrollTo();      
            graphContext?.setScrollTo("");
        }

    }, [graphContext?.table])


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

                {/* filter table points , if profit of point <0 skip */}

                {graphContext!.table.filter((row: ITableRow) => {
                    if (row.Profit < 0) return false;
                    else return true;
                }).map((row) => (

                    <Point tableRow={row} chartParams={chartState} key={"point-" + row.Quantity} />

                ))
                }

            </div>
        </div>
        //  <!-- GraphConainer -->
    )

};
export default Graph;