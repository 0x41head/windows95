import React, { useState } from "react";
import {
  Pbrush1,
  MsawtAwtIcon,
  Explorer108,
  Gcdef100,
  Progman11,
  Wordpad,
  Awfxcg321304,
} from "@react95/icons";

export default function Desktop(props) {
  const [activeIcon, setActiveIcon] = useState(null);

  const handleOpenRecycleBin = props.openRecycleBin;
  const handleOpenPaint = props.openPaint;


  const handleToggleIcon = (iconId) => {
    setActiveIcon((prev) => (prev === iconId ? null : iconId));
  };

  return (
    <div className="desktop-icons">
      <div
        className={activeIcon === 1 ? "active-icon" : "inactive-icon"}
        onClick={() => handleToggleIcon(1)}
        onDoubleClick={handleOpenRecycleBin}
      >
        <Explorer108 variant="32x32_4" />
        <p>Recycle Bin</p>
      </div>
      <div
        className={activeIcon === 2 ? "active-icon" : "inactive-icon"}
        onClick={() => handleToggleIcon(2)}
        onDoubleClick={handleOpenPaint}
      >
        <Pbrush1 variant="32x32_4" />
        <p>Paint</p>
      </div>
    </div>
  );
}