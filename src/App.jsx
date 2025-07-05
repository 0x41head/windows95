import { useState } from 'react';
import { Button, Cursor, List, TaskBar } from '@react95/core';
import { ReaderClosed, WindowsExplorer } from '@react95/icons';
import viteLogo from '/vite.svg';
import './App.css';

import '@react95/core/GlobalStyle';
import '@react95/core/themes/win95.css';

function App() {

  return (
    <>

      <TaskBar
        list={
          <List>
            <List.Item icon={<ReaderClosed variant="32x32_4" />}>
              Local Disk (C:)
            </List.Item>
            <List.Item icon={<WindowsExplorer variant="32x32_4" />}>
              Windows Explorer
            </List.Item>
          </List>
        }
      />
    </>
  );
}

export default App;
