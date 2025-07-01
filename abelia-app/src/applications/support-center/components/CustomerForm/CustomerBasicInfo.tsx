import React from 'react';
import type { Customer } from '../../types';
import { Input, RadioButton } from '../../../ui';

interface CustomerBasicInfoProps {
  customer: Customer;
}

const CustomerBasicInfo: React.FC<CustomerBasicInfoProps> = ({ customer }) => {
  return (
    <>
      <div className="form-row">
        <div className="form-group">
          <label>フリガナ</label>
          <Input value={customer.furiganaSei} readOnly style={{width: '85px'}} />
          <Input value={customer.furiganaMei} readOnly style={{width: '110px'}} />
        </div>
        <div className="form-group">
          <label>カエデ</label>
          <Input value="" readOnly style={{width: '120px'}} />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label>顧客氏名</label>
          <Input value={customer.nameSei} readOnly style={{width: '85px'}} />
          <Input value={customer.nameMei} readOnly style={{width: '85px'}} />
          <span style={{marginLeft: '5px', fontSize: '11px'}}>様</span>
        </div>
      </div>

      <div className="form-row">
        <div className="radio-group">
          <RadioButton
            name="customerType"
            value="個人"
            checked={customer.type === '個人'}
            readOnly
            label="個人"
          />
          <RadioButton
            name="customerType"
            value="法人"
            checked={customer.type === '法人'}
            readOnly
            label="法人"
          />
        </div>
      </div>
    </>
  );
};

export default CustomerBasicInfo;