import React from 'react'

function Qalify(){

    return(

        <div className='my-32'>
        
            <div id="w-80% m-auto text-center">
                <h1 className='m-auto text-center text-4xl font-bold'>What Do You Need to Qualify?</h1>
                <p className='text-center text-xl w-70% m-auto'>Alpha is an exclusive membership club, we only let in the best. Applications are considered case-by-case but these are some of the criteria we look for.</p>
                <div className="flex gap-16 w-80% m-auto mt-10 justify-between">
                    <div className="w-60% border-2 border-light-green p-5 rounded-xl bg-light-green2">
                        <h1 className='text-xl font-bold'>Professional Plan Annual Subscriber</h1>
                        <p className='mt-5'>Annual subscribers of the Professional Plan may apply to join the Alpha Community.</p>
                    </div>
                    <div className="w-60% border-2 border-light-green p-5 rounded-xl bg-light-green2">
                        <h1 className='text-xl font-bold'>Engagement in the Alpha Community</h1>
                        <p className='mt-5'>The Alpha Community values and prioritizes active contributions from engaging, crypto-savvy members.</p>
                    </div>
                </div>
            </div>

        </div>

    )

}

export default Qalify;