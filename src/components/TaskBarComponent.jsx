import { TaskBar, List } from "@react95/core";
import {
  FolderExe2,
  Mspaint,
  HelpBook,
  Computer3,
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
            <List.Item icon={<HelpBook variant="32x32_4" />}>Help</List.Item>
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
