import React from "react";
import img from '../img/bar-2.png'
import CountUp from "react-countup";

function Faster() {

    return (

        <>
            <div className="Faster text-center w-80% m-auto my-32">
                <h1 className="text-6xl w-60% m-auto font-bold">Run Faster. Up to 60X Faster</h1>
                <p className="m-auto my-5 w-56 ">More than 2M queries. Run fast without breaking.</p>
                <img src={img} alt="" className="m-auto" />

                <div className="flex justify-around my-20">
                    <div className="text-left">
                        <h2 className="text-4xl font-bold"><CountUp start={0} end={95} duration={5} suffix="%" /></h2>
                        <p className="my-4 w-56">Coverage of All Onchain TVL</p>
                    </div>
                    <div className="text-left">
                        <h2 className="text-4xl font-bold"><CountUp start={0} end={99} duration={5} suffix="%" /></h2>
                        <p className="my-4 w-56">Coverage of All Stablecoins Issued</p>
                    </div>
                    <div className="text-left">
                        <h2 className="text-4xl font-bold"><CountUp start={0} end={500} duration={5} suffix="TB" /></h2>
                        <p className="my-4 w-56">Data Processed Daily</p>
                    </div>
                </div>
            </div>
        </>

    )

}

export default Faster;