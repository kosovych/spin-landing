import { useState } from 'react';
import Button from "../../shared/Button";

const sectors = [
    {score: '100', prefix: '$', currency: "USDT" },
    {score: '60', prefix: '$', currency: "USDT" },
    {score: '200', prefix: '$', currency: "USDT" },
    {score: '150', prefix: '$', currency: "USDT" },
    {score: '10', prefix: '$', currency: "USDT" },
    {score: '300', prefix: '$', currency: "USDT" },
    {score: '90', prefix: '$', currency: "USDT" },
    {score: '145', prefix: '$', currency: "USDT" },
    {score: '95', prefix: '$', currency: "USDT" },
    {score: '105', prefix: '$', currency: "USDT" },
];

const Wheel = () => {
    const deg = 360 / sectors.length;
    const w = 2 * 620 * Math.sin((deg / 2) * (3.14 / 180));
    const [spinDeg, setSpinDeg] = useState(0);

    const onClick = () => {
        const _spinDeg = Math.ceil(Math.random() * 3600) + spinDeg;
        setSpinDeg(_spinDeg);
    };

    return (
        <>
            <Button
                onCLick={onClick}
                text="FREE SPIN"
                className="lg wheel-btn"
                arrow={null}
            />
            <div className="wheel-wrap">
                    <div className="wheel-inner-0" />
                    <div className="wheel-inner-1" />
                    <div className="wheel-inner-2" />
                    <div className="wheel-inner-3" />
                    <div className="wheel-inner-4" />
                    <div className="wheel-inner-5" />
                    <div className="wheel-arrow">
                        <img src="assets/icons/wheel-arrow.svg" alt="" />
                    </div>
                <div
                    className="wheel"
                    style={{ 'transform': `rotate(${spinDeg}deg)` }}
                >
                    {sectors.map(({score, prefix, currency}, i) => {
                        return (
                            <div
                                key={`sector-${i}`}
                                className="wheel__sector"
                                style={{
                                    '--rDeg': `${(i * deg)}deg`,
                                    'width': `${w}px`,
                                }}
                            >
                                <div>{score}</div>
                                <div>
                                    <span className="wheel__sector-prefix">{prefix}</span>
                                    {currency}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    );
}

export default Wheel;