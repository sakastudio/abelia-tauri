import React, { useState } from 'react';
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
    <div className="support-center">
      <div className="left-panel">
        <OperatorInfo operator={currentOperator} />

        <div className="action-buttons">
          <Button className="btn-connect">連絡先</Button>
          <Button className="btn-reservation">留守番電話</Button>
        </div>

        <CustomerList 
          customers={customers}
          selectedCustomer={selectedCustomer}
          onCustomerSelect={handleCustomerSelect}
        />

        <Button className="btn-close">終了</Button>
      </div>

      <div className="right-panel">
        <CustomerForm 
          customer={selectedCustomer}
          onDisconnect={handleDisconnect}
        />
      </div>
    </div>
  );
};

export default SupportCenter;