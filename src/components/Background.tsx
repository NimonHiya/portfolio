import React from 'react';

const getRandomPosition = (max: number, offset: number) => {
    let position = Math.floor(Math.random() * max);
    while (position > (max / 2 - offset) && position < (max / 2 + offset)) {
        position = Math.floor(Math.random() * max);
    }
    return position;
};

const Background = () => {
    const shapes = [
        { bg: 'bg-purple-700', size: 'w-[350px] h-[350px]', opacity: 'opacity-20', animation: 'animate-pulse-slow' },
        { bg: 'bg-pink-400', size: 'w-[250px] h-[250px]', opacity: 'opacity-25', animation: 'animate-pulse' },
        { bg: 'bg-green-500', size: 'w-[300px] h-[300px]', opacity: 'opacity-15', animation: 'animate-pulse' },
        { bg: 'bg-blue-500/10', size: 'w-32 h-32', opacity: '', animation: 'animate-pulse' },
        { bg: 'bg-purple-500/20', size: 'w-36 h-36', opacity: '', animation: 'animate-pulse-slow' },
        { bg: 'bg-indigo-500/15', size: 'w-28 h-28', opacity: '', animation: 'animate-pulse' },
        { bg: 'bg-yellow-500/20', size: 'w-40 h-40', opacity: '', animation: 'animate-pulse' },
        { bg: 'bg-red-500/15', size: 'w-24 h-24', opacity: '', animation: 'animate-pulse-slow' },
        { bg: 'bg-teal-500/10', size: 'w-48 h-48', opacity: '', animation: 'animate-pulse' },
        { bg: 'bg-orange-500/25', size: 'w-20 h-20', opacity: '', animation: 'animate-pulse-slow' },
    ];

    return (
        <div className="absolute inset-0 z-0 overflow-hidden">
            {shapes.map((shape, index) => (
                <div
                    key={index}
                    className={`shape ${shape.bg} ${shape.size} ${shape.opacity} absolute ${shape.animation} blur-2xl`}
                    style={{
                        top: `${getRandomPosition(100, 10)}%`,
                        left: `${getRandomPosition(100, 10)}%`,
                        transform: `translate(-${getRandomPosition(50, 5)}%, -${getRandomPosition(50, 5)}%)`,
                    }}
                ></div>
            ))}
        </div>
    );
};

export default Background;
