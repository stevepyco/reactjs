const showLoading = (state) => ({
  ...state,
  loading: true
});

const hideLoading = (state) => ({
  ...state,
  loading: false
});

export { showLoading, hideLoading };
