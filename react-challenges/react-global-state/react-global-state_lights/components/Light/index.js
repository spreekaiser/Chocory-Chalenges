import { useState } from "react";
import { LightButton, Icon, Text, Name, State } from "./Light.styled";

export default function Light({ id, name, isOn, handleToggle }) {
  console.log("Light isOn: ", isOn);
  return (
    <LightButton
      type="button"
      onClick={() => {
        console.log("ID of lights: ", id);
        handleToggle(id);
      }}
      isOn={isOn}
    >
      <Icon isOn={isOn}>💡</Icon>
      <Text>
        <Name>{name}</Name>
        <State>{isOn ? "On" : "Off"}</State>
      </Text>
    </LightButton>
  );
}
