"use client";
import React from "react";
import { ConfigProvider, Input } from "antd";

export default () => {
  const { TextArea } = Input;
  const onChange = (e) => {
    console.log("Change:", e.target.value);
  };
  return (
    <div className="">
      <ConfigProvider
        theme={{
          token: {
            borderRadius: 1,
            
            
          },
        }}
      >
        <TextArea
          showCount
          maxLength={100}
          style={{
            height: 60,
            
          }}
          onChange={onChange}
          placeholder=" پاسخ سوال خود را اینجا واردکنید. "
          
          
        />
      </ConfigProvider>
    </div>
  );
};
