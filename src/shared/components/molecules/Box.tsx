import React from "react";
import Title from "../atoms/Title";
import Text from "../atoms/Text";
export default function Box() {
  return (
    <div className="ds-bg-alt w-70 rounded-lg px-8 py-10">
      <Title variant="alt" size="md" isCenter={true} className="mb-2">
        Create Your Survey
      </Title>
      <Text isCenter={true}>
        Choose a template or start from scratch using our easy-to-use builder
      </Text>
     
    </div>
  );
}
