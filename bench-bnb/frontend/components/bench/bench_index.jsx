import React from 'react';
import BenchIndexItem from './bench_index_item';

class BenchIndex extends React.Component {
   componentDidMount() {
      this.props.fetchBenches();
   }

   render() {
      return (
         <ul>
            {this.props.benches.map((bench, i) => (
               <BenchIndexItem key={`bench${i}`} bench={bench} />
            ))}
         </ul>
      );
   }
}

export default BenchIndex;
