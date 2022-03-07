export function listTransaction(data) {
  return {
    type: 'LIST_TRANSACTION',
    payload: data,
  };
}

export function filterTransaction(data) {
  return {
    type: 'FILTER_TRANSACTION',
    payload: data,
  };
}

