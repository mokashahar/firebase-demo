import { Box } from '@mui/material';
import React, { useEffect } from "react";
import { remoteConfig } from '../../services/firebase/firebase';
import { fetchAndActivate, getValue } from "firebase/remote-config";

type Props = {};

const RemoteConfig = (props: Props) => {
  useEffect(()=>{
    fetchAndActivate(remoteConfig).then();
  },[])

  const titleSize = getValue(remoteConfig, 'TitleSize').asString();
  const titleColor = getValue(remoteConfig, 'TitleColor').asString();
  const driverMaxWork = getValue(remoteConfig, 'MaxWork').asString();

  return (
    <Box fontSize={titleSize} color={titleColor}>
      Driver max work limit: {driverMaxWork}
    </Box>
  );
};

export default RemoteConfig;
