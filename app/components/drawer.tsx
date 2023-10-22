// components/Drawer.tsx
import React from 'react';

interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
  image: string;
  certifications: string[];
}


const Drawer: React.FC<DrawerProps> = ({ isOpen, onClose, certifications }) => {
  return (
    <div className={`drawer ${isOpen ? 'open' : ''}` }>
      <div className="overlay" onClick={onClose} />
      <div className="content">
        <div className='card-Bloc max-h-[90%] overflow-y-auto'>
            {certifications.map((certificationImage, index) => {
                return <img 
                    className="ml-3 my-5 rounded-lg" 
                    key={index} 
                    src={certificationImage} 
                    alt={`Certification ${index + 1}`} 
                    width="450" 
                    height="180" 
                />;
            })}
        </div>
      </div>

      <style jsx>{`
        .drawer {
          position: fixed;
          top: 0;
          right: -30%;
          width: 30%;
          height: 100%;
          transition: right 0.3s;
          z-index: 10;
        }
        .drawer.open {
          right: 0;
        }
        .overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.5);
          visibility: hidden;
          opacity: 0;
          transition: opacity 0.3s, visibility 0.3s;
          z-index: 9;
        }
        .drawer.open + .overlay {
          visibility: visible;
          opacity: 1;
        }
        .content {
            padding: 20px;
            background: black;
            border-left: 0.5px solid white;
            height: 100%;
            box-shadow: -2px 0 5px rgba(0, 0, 0, 0.2);
        }
        .card-Bloc{
            margin-top: 73px;
        }
        .content h2 {
            color: white;
        }
      `}</style>
    </div>
  );
}

export default Drawer;
