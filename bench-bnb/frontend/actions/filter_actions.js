import * as BenchAjaxUtils from '../util/bench_api_util';
export const UPDATE_BOUNDS = 'UPDATE_BOUNDS';

export const updateBounds = (bounds) => (dispatch) =>
   BenchAjaxUtils.newFetchBenches(bounds).then((benches) =>
      dispatch({ type: UPDATE_BOUNDS, benches })
   );
