import React from 'react';
import type { Customer } from '../../types';
import { Input } from '../../../ui';

interface CustomerAddressInfoProps {
  customer: Customer;
}

const CustomerAddressInfo: React.FC<CustomerAddressInfoProps> = ({ customer }) => {
  const formatPostalCode = (code: string) => {
    if (code.length >= 7) {
      return code.slice(0, 3) + '-' + code.slice(3, 7) + '-' + code.slice(7);
    }
    return code;
  };

  return (
    <>
      <div className="form-row">
        <div className="form-group">
          <label>住所1</label>
          <span className="postal-symbol">〒</span>
          <Input value={formatPostalCode(customer.postalCode)} readOnly style={{width: '100px'}} />
          <Input value={customer.address1} readOnly style={{width: '420px'}} />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group full-width">
          <label>住所2</label>
          <Input value={customer.address2} readOnly />
        </div>
      </div>
    </>
  );
};

export default CustomerAddressInfo;