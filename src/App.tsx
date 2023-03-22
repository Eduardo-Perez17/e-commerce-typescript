import { BrowserRouter } from 'react-router-dom';

import { Aplication } from './Aplication';

const App = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Aplication />
    </BrowserRouter>
  );
};

export default App;
