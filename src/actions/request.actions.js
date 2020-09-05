import RequestActionTypes from './request.types';

const requestApiStart = () => ({
  type: RequestActionTypes.REQUEST_API_START,
});

const requestApiFailure = (error) => ({
  type: RequestActionTypes.REQEUEST_API_FAILURE,
  payload: error,
});

export {requestApiStart, requestApiFailure};
