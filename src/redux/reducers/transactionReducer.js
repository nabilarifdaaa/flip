const initialState = {
  listTransaction: {},
  allList: {},
};

const transactionReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LIST_TRANSACTION':
      return {
        ...state,
        listTransaction: {...action.payload},
      };
    case 'ALL_LIST':
      return {
        ...state,
        allList: {...action.payload},
      };
    case 'SEARCH_TRANSACTION':
      let newArr = [];
      const newData = Object.keys(state.listTransaction).filter(key => {
        return state.listTransaction[key].beneficiary_name.toLowerCase().includes(action.payload) ||
        state.listTransaction[key].beneficiary_bank.toLowerCase().includes(action.payload) ||
        state.listTransaction[key].sender_bank.toLowerCase().includes(action.payload) ||
        `${state.listTransaction[key].amount}`.includes(action.payload)
      });
      newData.map(i => {
        newArr.push(state.listTransaction[i]);
      });
      return {
        ...state,
        listTransaction: {...newArr},
      };
    default:
      return state;
  }
};

export default transactionReducer;
