import React from 'react';

import { render, cleanup, fireEvent } from '@testing-library/react';

import BidBox from './BidBox';

afterEach(cleanup);

// it('does not increment pass the max number if the up arrow is pressed', () => {
//   const { getByText, getByLabelText } = render(
//     <NumberSelector min={0} max={3}></NumberSelector>
//   );
//   const upButton = getByLabelText('upButton');

//   fireEvent.click(upButton);
//   fireEvent.click(upButton);
//   fireEvent.click(upButton);
//   fireEvent.click(upButton);

//   expect(getByText('3')).toBeInTheDocument();
// });

// it('does not decrement pass the min number if the up arrow is pressed', () => {
//   const { getByText, getByLabelText } = render(
//     <NumberSelector min={1} max={3}></NumberSelector>
//   );
//   const upButton = getByLabelText('upButton');
//   const downButton = getByLabelText('downButton');

//   fireEvent.click(upButton);
//   fireEvent.click(upButton);
//   fireEvent.click(downButton);
//   fireEvent.click(downButton);
//   fireEvent.click(downButton);

//   expect(getByText('1')).toBeInTheDocument();
// });