import { useState } from "react";
import { Modal, TaskBar, List } from "@react95/core";
import {
  Gcdef100,
  FolderExe2,
  MsawtAwtIcon,
  Mspaint,
  Wordpad,
  HelpBook,
  Computer3
} from "@react95/icons";

function TaskBarComp(props) {
  const handleOpenPaint = props.openPaint;
  return (
    <>

      <TaskBar
        list={
          <List>
            <List.Item icon={<FolderExe2 variant="32x32_4" />}>
              Programs
              <List width={"200px"}>
                
                <List.Item
                  icon={<Mspaint variant="16x16_4"/>}
                  onClick={handleOpenPaint}
                >
                  Paint
                </List.Item>
              </List>
            </List.Item>

            {/* <List.Item icon={<FolderFile variant="32x32_4" />}>
              Documents
            </List.Item> */}
            {/* <List.Item icon={<Settings variant="32x32_4" />}>
              Settings
              <List width={"200px"}>
                <List.Item icon={<FolderSettings variant="16x16_4" />}>
                  Control Panel
                </List.Item>
                <List.Item icon={<FolderPrint variant="16x16_4" />}>
                  Printers
                </List.Item>
              </List>
            </List.Item> */}
            {/* <List.Item icon={<FileFind variant="32x32_4" />}>Find</List.Item> */}
            <List.Item icon={<HelpBook variant="32x32_4" />}>Help</List.Item>

            {/* <List.Item icon={<LoaderBat variant="32x32_4" />}>Run...</List.Item> */}
            <List.Divider />
            <List.Item icon={<Computer3 variant="32x32_4" />}>
              Shut Down...
            </List.Item>
          </List>
        }
      />
    </>
  );
}

export default TaskBarComp;
