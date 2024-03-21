import React, { useEffect, useRef, useState } from 'react';
// import './ImageComponent.module.css';
import Icon from 'src/@core/components/icon';

interface ImageComponentProps {
  url: string;
  setUrl: (url: string) => void;
}

const ImageComponent: React.FC<ImageComponentProps> = ({ url, setUrl }) => {
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const ImageRef = useRef<HTMLImageElement>(null);
  const [zoom, setZoom] = useState<number>(1);
    const [x, setX] = useState<number>(0);
    const [y, setY] = useState<number>(0);

  useEffect(() => {
    const image = ImageRef.current;
    let isDragging = false;
    let prevPosition = { x: 0, y: 0 };

    const handleMouseDown = (e: MouseEvent) => {
      isDragging = true;
      prevPosition = { x: e.clientX, y: e.clientY };
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      const handleMouseMove = (e: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const offsetX = e.clientX - rect.left;
        const offsetY = e.clientY - rect.top;
        setX(offsetX);
        setY(offsetY);
    };
    };

    const handleMouseUp = () => {
      isDragging = false;
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };

    image?.addEventListener('mousedown', handleMouseDown);

    return () => {
      image?.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [ImageRef, scale]);

  // zoom in Function
  const handleZoomIn = () => {
    setScale((scale) => scale + 0.1);
  };

  // zoom out function
  const handleZoomOut = () => {
    setScale((scale) => scale - 0.1);
  };



    const handleMouseEnter = (e: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const offsetX = e.clientX - rect.left;
        const offsetY = e.clientY - rect.top;
        setX(offsetX);
        setY(offsetY);
        setZoom(3);
    };

    const handleMouseMove = (e: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const offsetX = e.clientX - rect.left;
        const offsetY = e.clientY - rect.top;
        setX(offsetX);
        setY(offsetY);
    };

    const handleMouseLeave = () => {
        setZoom(1);
    };

  return (
    <div
      style={{
        position: 'relative',
        backgroundColor: '#ffffff',
        borderRadius: '10px',
        overflow: 'hidden',
      }}
    >
      <img
        ref={ImageRef}
        src={url}
        alt=''
        style={{
          width: '20vw',
          height: 'auto',
          cursor: 'move',
          transform: `scale(${scale}) translate(${position.x}px, ${position.y}px)`,
        }}
        draggable={false}
        onMouseEnter={handleMouseEnter}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}


      />
      <div className='btn-container' style={{ position: 'absolute', top: '91%', right: 0, transform: 'translateY(-50%)', display: 'flex', flexDirection: 'column', }}>
        {/* Boutons de zoom */}
        <button className='zoom-in-btn' onClick={handleZoomIn} style={{  fontSize: '2px' }}>
          <Icon icon='tabler:plus' />
        </button>
        <button className='zoom-out-btn' onClick={handleZoomOut} style={{ fontSize: '2px' }}>
          <Icon icon='tabler:minus' />
        </button>
      </div>
    </div>
  );
};
export default ImageComponent;
