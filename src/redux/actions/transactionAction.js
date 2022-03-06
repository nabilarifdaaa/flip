export function allList(data) {
  return {
    type: 'ALL_LIST',
    payload: data,
  };
}

export function listTransaction(data) {
  return {
    type: 'LIST_TRANSACTION',
    payload: data,
  };
}

export function searchTransaction(data) {
  return {
    type: 'SEARCH_TRANSACTION',
    payload: data,
  };
}
