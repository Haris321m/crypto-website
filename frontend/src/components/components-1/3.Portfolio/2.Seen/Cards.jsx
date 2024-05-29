import React from 'react'

function Card(props){

    return(

        <>
        
            <div className="Cards">
                <img src={props.img} alt="" />
            </div>

        </>

    )

}

export default Card;