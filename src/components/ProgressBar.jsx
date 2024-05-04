import React from 'react';

function ProgressBar({ progress }) {
  return (
    <div style={{
      backgroundColor: '#ddd', 
      margin: '0.5em 0', 
      borderRadius: '1em', 
      position: 'relative',
      height: '12px',
      opacity: progress > 0 ? 1 : 0,
      transition: 'opacity 0.5s ease-in-out'
    }}>
      <div style={{
        height: '100%',
        borderRadius: '1em',
        width: `${progress}%`,
        backgroundColor: 'cyan',
        transition: 'width 0.5s ease-in-out'
      }}></div>
      <span style={{
        position: 'absolute',
        width: '100%',
        textAlign: 'center',
        color: 'black',
        fontSize: '10px',
        lineHeight: '12px'
      }}>
        {progress}%
      </span>
    </div>
  );
}

export default ProgressBar;