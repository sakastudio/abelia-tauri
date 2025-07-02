import React from 'react';
import type { Customer } from '../types';

interface CustomerFormProps {
  customer: Customer;
  onDisconnect: () => void;
}

const CustomerForm: React.FC<CustomerFormProps> = ({ customer, onDisconnect }) => {
  return (
    <div className="customer-form">

    </div>
  );
};

export default CustomerForm;