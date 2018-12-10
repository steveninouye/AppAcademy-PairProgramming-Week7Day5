import * as BenchAjaxUtils from '../util/bench_api_util';

export const RECEIVE_BENCHES = 'RECEIVE_BENCHES';

export const fetchBenches = () => (dispatch) =>
   BenchAjaxUtils.fetchBenches().then((benches) =>
      dispatch({
         type: RECEIVE_BENCHES,
         benches
      })
   );
