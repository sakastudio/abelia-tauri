import React from 'react';
import type { Customer } from '../../types';
import { Input } from '../../../ui';

interface CustomerContactInfoProps {
  customer: Customer;
}

const CustomerContactInfo: React.FC<CustomerContactInfoProps> = ({ customer }) => {
  return (
    <>
      <div className="form-row">
        <div className="form-group full-width">
          <label>E-Mail</label>
          <Input type="email" value={customer.email} readOnly />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label>電話番号</label>
          <Input type="tel" value={customer.phone} readOnly />
        </div>
        <div className="form-group">
          <label>FAX</label>
          <Input type="tel" value={customer.fax} readOnly />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group full-width">
          <label>会社名</label>
          <Input value={customer.company} readOnly />
        </div>
      </div>
    </>
  );
};

export default CustomerContactInfo;