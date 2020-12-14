import React from 'react';
import styled from 'styled-components';

// export default () => {

//   return (
//     <div>
//       <h1>Page swap</h1>
//     </div>
//   );
// };

interface Props {
  children?: React.ReactNode;
  className?: string;
}

function Swap ({ children, className = '' }: Props): React.ReactElement<Props> | null {

  return (
    <div className={`ui--Swap padded ${className}`}>
      <div className='ui--Swap-page'>
        <div className='text'>
          <h1>Page swap</h1>
        </div>
      </div>
    </div>
  );
}

export default React.memo(styled(Swap)`
  text-align: left;
  &.padded {
    display: inline-block;
    padding: 20px 60px;
  }
  .ui--Swap-page {
    .text {
      background: red;
    }
  }
`);
