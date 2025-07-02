import React from 'react';
import type { Operator } from '../types';

interface OperatorInfoProps {
  operator: Operator;
}

const OperatorInfo: React.FC<OperatorInfoProps> = ({ operator }) => {
  return (
    <div className="operator-info">
      <div className="operator-avatar">
        <img src="/assets/support-center/operator-placeholder.png" alt={operator.name} />
      </div>
      <div className="operator-details">
        <h3>{operator.name}</h3>
        <p>社員 ID: {operator.id}</p>
      </div>
    </div>
  );
};

export default OperatorInfo;