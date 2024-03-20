import React, { useState } from 'react';
import Icon from 'src/@core/components/icon'
import IconButton, { IconButtonProps } from '@mui/material/IconButton'


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
        <div style={{ position: 'relative' }}>
            <img
                src={url}
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
      <div style={{ position: 'absolute', bottom: 0, right: 0, border: '2px solid gray', backgroundColor:"#F2F3F4 ",alignItems:"center",width:"25px",height:"25px" }}>
        <dfn title='a grandir la photo'><Icon icon='tabler:plus' style={{ color: 'gray' ,cursor:"pointer"}}  /></dfn>
      </div>

        </div>
    );
};

export default ImageComponent;
