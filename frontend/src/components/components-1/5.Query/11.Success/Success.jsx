import React from "react";
import { RiArrowRightLine } from "react-icons/ri"; 

function Success(){

    return(

        <>
            <div className="w-80% m-auto text-center">
                <h1 className="text-6xl font-bold">Chart Your Path to Success with Nansen</h1>
                <p className="my-5">Act now to turn onchain data into key business insights.</p>
                <button className="py-5 px-10 text-xl bg-light-green text-black rounded-xl flex gap-1 text-center m-auto my-5 transition hover:gap-5">Contact Sales <RiArrowRightLine className="text-2xl" /></button>
            </div>
        </>

    )

}

export default Success;