import React from 'react';
import type { Customer } from '../../types';
import { Input } from '../../../ui';

interface CustomerNotesProps {
  customer: Customer;
}

const CustomerNotes: React.FC<CustomerNotesProps> = ({ customer }) => {
  return (
    <div className="notes-section">
      <div className="form-group full-width">
        <label>備考1</label>
        <Input value={customer.note1} readOnly />
      </div>
      <div className="form-group full-width">
        <label>備考2</label>
        <Input value={customer.note2} readOnly />
      </div>
      <div className="form-group full-width">
        <label>備考3</label>
        <Input value={customer.note3} readOnly />
      </div>
      <div className="form-group full-width">
        <label>備考4</label>
        <Input value={customer.note4} readOnly />
      </div>
      <div className="form-group full-width">
        <label>備考5</label>
        <Input value={customer.note5} readOnly />
      </div>
    </div>
  );
};

export default CustomerNotes;