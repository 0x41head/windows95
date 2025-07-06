import { useState } from 'react';
import { Button, Cursor, List, TaskBar } from '@react95/core';
import { ReaderClosed, WindowsExplorer } from '@react95/icons';
import '@react95/core/GlobalStyle';
import '@react95/core/themes/win95.css';
import WindowSizeProvider from './components/WindowSizeContext';
import PaintComp from './components/PaintComp';
import TaskBarComp from './components/TaskBarComponent';
import Desktop from './components/DesktopComponent';

function App() {
  const [showWindows, setShowWindows] = useState({
    paint: false,
    help: false,
    recycleBin: false
  });

  const toggleWindow = (windowName, isVisible) => {
    setShowWindows((prev) => ({
      ...prev,
      [windowName]: isVisible,
    }));
  };

  const handleOpenWindow = (windowName) => toggleWindow(windowName, true);
  
  return (
    <>
    <WindowSizeProvider>
      <TaskBarComp
          openPaint={() => handleOpenWindow("paint")}
      />
      <Desktop
        openPaint={() => handleOpenWindow("paint")}
        openRecycleBin={() => handleOpenWindow("recycleBin")}
      />
       <PaintComp
          show={showWindows.paint}
          toggle={() => toggleWindow("paint", !showWindows.paint)}
          onHelp={() => toggleWindow("help", true)}
        />
    </WindowSizeProvider>
    </>
  );
}

export default App;
