import React from 'react';
import type { Customer } from '../../types';
import { Input } from '../../../ui';

interface CustomerImportantInfoProps {
  customer: Customer;
}

const CustomerImportantInfo: React.FC<CustomerImportantInfoProps> = ({ customer }) => {
  return (
    <div className="important-info">
      <span>※重要情報</span>
      <Input
        value={customer.lastImportantInfo} 
        readOnly 
        style={{
          flex: 1, 
          border: 'none', 
          backgroundColor: 'transparent', 
          fontSize: '11px', 
          fontFamily: 'MS UI Gothic, sans-serif'
        }} 
      />
    </div>
  );
};

export default CustomerImportantInfo;