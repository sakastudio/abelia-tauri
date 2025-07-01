import React from 'react';
import type { Customer } from '../../types';
import { Input, Button } from '../../../ui';

interface CustomerHeaderProps {
  customer: Customer;
  onDisconnect: () => void;
}

const CustomerHeader: React.FC<CustomerHeaderProps> = ({ customer, onDisconnect }) => {
  return (
    <div className="form-header">
      <div className="customer-photo">
        <img src="/assets/support-center/customer-placeholder.png" alt={customer.nameSei + customer.nameMei} />
      </div>
      <div className="form-header-fields">
        <div className="form-row">
          <div className="form-group">
            <label>顧客コード</label>
            <Input value={customer.code} readOnly />
          </div>
        </div>
      </div>
      <Button variant="danger" size="large" onClick={onDisconnect}>
        切断
      </Button>
    </div>
  );
};

export default CustomerHeader;