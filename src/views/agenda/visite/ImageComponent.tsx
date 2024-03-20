import React, { useState } from 'react';

interface ImageComponentProps {
  url: string;
  setUrl: (url: string) => void;
}


const ImageComponent: React.FC<ImageComponentProps> = ({ url, setUrl })  => {
    const [zoom, setZoom] = useState<number>(1);
    const [x, setX] = useState<number>(0);
    const [y, setY] = useState<number>(0);

    const handleMouseEnter = (e: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const offsetX = (e.clientX - rect.left) / rect.width;
        const offsetY = (e.clientY - rect.top) / rect.height;
        setX(offsetX);
        setY(offsetY);
        setZoom(3);
    };

    const handleMouseMove = (e: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const offsetX = (e.clientX - rect.left) / rect.width;
        const offsetY = (e.clientY - rect.top) / rect.height;
        setX(offsetX);
        setY(offsetY);
    };

    const handleMouseLeave = () => {
        setZoom(1);
    };

    return (
        <img
            src={url}
            alt='Image Après'
            className='image'
            style={{
                width: '280px',
                height: '250px',
                objectFit: 'cover',
                OObjectFit: 'cover',
                transform: `scale(${zoom})`,
                transformOrigin: `${x * 100}% ${y * 100}%`, // Convert coordinates to percentage
                transition: 'transform 0.3s',
            }}
            onMouseEnter={handleMouseEnter}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        />
    );
};

export default ImageComponent;
