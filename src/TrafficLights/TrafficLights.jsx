import { useState } from 'react'
import './TrafficLights.css'

function TrafficLights() {
    const [currentLight, setCurrentLight] = useState('');

    const handleClick = () => {
        setCurrentLight(prevState => {
            if (prevState === '' || prevState === 'yellow') {
                return 'red';
            }
            if (prevState === 'red') {
                return 'red yellow';
            }
            if (prevState === 'red yellow') {
                return 'green';
            }
            if (prevState === 'green') {
                return 'yellow';
            }
        });
    }

    return (
        <div className='traffic-lights-container'>
            <h1>Traffic Lights</h1>
            <div className='traffic-lights'>
                <div className={`circle ${(currentLight === 'red' || currentLight === 'red yellow') ? 'red' : ''}`}></div>
                <div className={`circle ${(currentLight === 'yellow' || currentLight === 'red yellow') ? 'yellow' : ''}`}></div>
                <div className={`circle ${currentLight === 'green' ? 'green' : ''}`}></div>
            </div>
                <button onClick={handleClick}>Switch</button>
        </div>

    )

}

export default TrafficLights