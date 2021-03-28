import React, { useState } from "react";
import LockToggle from "../reusable/LockToggle";

export default function BasicLock({ capabilities, id, status }) {
  const [isLocked, setLocked] = useState(true);

  const capitalize = (string) => string.charAt(0).toUpperCase() + string.slice(1);
  const label = isLocked ? "Locked" : "Unlocked";

  const handleChange = () => {
    setLocked(!isLocked);
  };

  return (
    <div className="basic-lock">
      {capabilities.map((capability, index) => (
        <div key={index}>{`${capitalize(capability)}: ${capitalize(status)}`}</div>
      ))}
      <LockToggle
        isLocked={isLocked}
        disabled={status === "unavailable"}
        handleChange={handleChange}
        label={label}
      />
    </div>
  );
}
