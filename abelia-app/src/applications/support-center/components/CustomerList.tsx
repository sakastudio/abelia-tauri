import React from 'react';
import type { Customer } from '../types';

interface CustomerListProps {
  customers: Customer[];
  selectedCustomer: Customer;
  onCustomerSelect: (customer: Customer) => void;
}

const CustomerList: React.FC<CustomerListProps> = ({ customers, selectedCustomer, onCustomerSelect }) => {
  return (
    <div className="customer-list">
      <table>
        <thead>
          <tr>
            <th>コード</th>
            <th>分類</th>
            <th>フリガナ</th>
            <th>名前</th>
            <th>敬称</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer) => (
            <tr
              key={customer.code}
              className={selectedCustomer.code === customer.code ? 'selected' : ''}
              onClick={() => onCustomerSelect(customer)}
            >
              <td>{customer.code}</td>
              <td>{customer.type}</td>
              <td>{customer.furiganaSei + customer.furiganaMei}</td>
              <td>{customer.nameSei + customer.nameMei}</td>
              <td>様</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CustomerList;