// TASK 7: StatusMessage component using props

import type { StatusMessageProps } from './types';

function StatusMessage({ status }: StatusMessageProps) {
  return <p className="status-message">Status: {status}</p>;
}

export default StatusMessage;
