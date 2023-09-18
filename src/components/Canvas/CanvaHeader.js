import React from 'react';

function CanvasHeader() {
  return (
    <div id="large-header" className="large-header" style={{ height: '340px' }}>
      <canvas id="demo-canvas" width="1366" height="340"></canvas>
    </div>
  );
}

export default CanvasHeader;