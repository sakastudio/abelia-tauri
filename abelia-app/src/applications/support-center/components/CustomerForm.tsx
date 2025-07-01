import React from 'react';
import type { Customer } from '../types';
import {
  CustomerHeader,
  CustomerBasicInfo,
  CustomerPersonalInfo,
  CustomerContactInfo,
  CustomerAddressInfo,
  CustomerNotes,
  CustomerImportantInfo
} from './CustomerForm/index';

interface CustomerFormProps {
  customer: Customer;
  onDisconnect: () => void;
}

const CustomerForm: React.FC<CustomerFormProps> = ({ customer, onDisconnect }) => {
  return (
    <div className="customer-form">
      <CustomerHeader customer={customer} onDisconnect={onDisconnect} />
      <CustomerBasicInfo customer={customer} />
      <CustomerPersonalInfo customer={customer} />
      <CustomerContactInfo customer={customer} />
      <CustomerAddressInfo customer={customer} />
      <CustomerNotes customer={customer} />
      <CustomerImportantInfo customer={customer} />
    </div>
  );
};

export default CustomerForm;