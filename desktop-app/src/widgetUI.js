```javascript
import React, { useState, useEffect } from 'react';
import { remote } from 'electron';
import Draggable from 'react-draggable';

const WidgetUI = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const win = remote.getCurrentWindow();
    const { x, y } = win.getPosition();
    setPosition({ x, y });
  }, []);

  const handleDrag = (e, data) => {
    setPosition({ x: data.x, y: data.y });
  };

  return (
    <Draggable position={position} onDrag={handleDrag}>
      <div className="widget-ui">
        {/* Your widget UI components go here */}
      </div>
    </Draggable>
  );
};

export default WidgetUI;
```