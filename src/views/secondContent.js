import { Calendar } from 'antd';
import React from 'react';

const SecondContent = () => {
  const onPanelChange = (value, mode) => {
    console.log(value.format('YYYY-MM-DD'), mode);
  };

  return <Calendar onPanelChange={onPanelChange} size="small"/>;
};

export default SecondContent;