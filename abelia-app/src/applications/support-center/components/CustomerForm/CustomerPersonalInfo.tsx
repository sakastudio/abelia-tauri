import React from 'react';
import type { Customer } from '../../types';
import { Input } from '../../../ui';

interface CustomerPersonalInfoProps {
  customer: Customer;
}

const CustomerPersonalInfo: React.FC<CustomerPersonalInfoProps> = ({ customer }) => {
  return (
    <>
      <div className="form-row">
        <div className="form-group">
          <label>職業</label>
          <Input value="管理栄養士" readOnly style={{width: '200px'}} />
        </div>
        <div className="form-group">
          <label>役職</label>
          <Input value="-" readOnly style={{width: '150px'}} />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label>性別</label>
          <Input value={customer.gender} readOnly style={{width: '60px'}} />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label>生年月日</label>
          <Input value={customer.birthDate} readOnly style={{width: '100px'}} />
        </div>
        <div className="form-group">
          <Input value={`${customer.age}`} readOnly style={{width: '30px'}} />
          <span>歳</span>
        </div>
      </div>
    </>
  );
};

export default CustomerPersonalInfo;