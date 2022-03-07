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
    case 'FILTER_TRANSACTION':
      let filtered = [];
      if (action.payload === 'sort_a_z') {
        filtered = Object.values(state.listTransaction).sort(function (a, b) {
          if (a.beneficiary_name < b.beneficiary_name) {
            return -1;
          }
          if (a.beneficiary_name > b.beneficiary_name) {
            return 1;
          }
          return 0;
        });
      }
      if (action.payload === 'sort_z_a') {
        filtered = Object.values(state.listTransaction).sort(function (a, b) {
          if (a.beneficiary_name > b.beneficiary_name) {
            return -1;
          }
          if (a.beneficiary_name < b.beneficiary_name) {
            return 1;
          }
          return 0;
        });
      }
      if (action.payload === 'newest_date') {
        filtered = Object.values(state.listTransaction).sort((a, b) => {
          if (a.created_at > b.created_at) {
            return -1;
          }
          if (b.created_at < a.created_at) {
            return 1;
          }
          return 0
        });
      }
      if (action.payload === 'oldest_date') {
        filtered = Object.values(state.listTransaction).sort((a, b) => {
          if (b.created_at > a.created_at) {
            return -1;
          }
          if (a.created_at < b.created_at) {
            return 1;
          }
          return 0
        });
      }
      return {
        ...state,
        listTransaction: {...filtered},
      };
    default:
      return state;
  }
};

export default transactionReducer;
