import React from 'react';
import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import './SupportCenter.css';

const SupportCenter: React.FC = () => {

  return (
    <MantineProvider>
      <div className="support-center">
      </div>
    </MantineProvider>
  );
};

export default SupportCenter;