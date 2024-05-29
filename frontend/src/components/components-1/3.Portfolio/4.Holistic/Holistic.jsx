import React,{useState} from 'react'
import './Holistic.css'
import Portfolio from './components/portfolio'
import Transaction from './components/Transaction'
import Analytics from './components/Analytics'

function Holistic(){

    const [activeSection, setActiveSection] = useState('Portfolio')

    const renderSection = () => {

        switch(activeSection){
            case 'Portfolio':
                return <Portfolio />
            case 'Transaction':
                return <Transaction />
            case 'Analytics':
                return <Analytics />
        }

    }

    return(

        <>
            <div className="Holistic-top">
                <h1>A Holistic View of Your Wallet</h1>
                <p>Uncover transaction history, historical performance, and comprehensive analytics for your tokens, DeFi positions, and NFTs</p>
            </div>
            <div className="Holistic-bottom">
                <ul>
                    <li onClick={() => setActiveSection('Portfolio')} style={{ borderBottom: activeSection === 'Portfolio' ? '8px solid #00da74' : 'none' }}>Portfolio</li>
                    <li onClick={() => setActiveSection('Transaction')} style={{ borderBottom: activeSection === 'Transaction' ? '8px solid #00da74' : 'none' }}>Transaction</li>
                    <li onClick={() => setActiveSection('Analytics')} style={{ borderBottom: activeSection === 'Analytics' ? '8px solid #00da74' : 'none' }}>Analytics</li>
                </ul>
            </div>
            <div>
                {renderSection()}
            </div>
        </>

    )

}

export default Holistic;