import React, { useState } from 'react';
import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import './SupportCenter.css';
import customersData from './data/customers.json';
import operatorsData from './data/operators.json';
import type { Customer, Operator } from './types';
import OperatorInfo from './components/OperatorInfo';
import CustomerList from './components/CustomerList';
import CustomerForm from './components/CustomerForm';
import { Button } from '../ui';

const SupportCenter: React.FC = () => {
  const [customers] = useState<Customer[]>(customersData as Customer[]);
  const [selectedCustomer, setSelectedCustomer] = useState<Customer>(customersData[0] as Customer);
  const [currentOperator] = useState<Operator>(operatorsData[0]);

  const handleCustomerSelect = (customer: Customer) => {
    setSelectedCustomer(customer);
  };

  const handleDisconnect = () => {
    alert('通話を終了しました');
  };

  return (
    <MantineProvider>
      <div className="support-center">
      </div>
    </MantineProvider>
  );
};

export default SupportCenter;