import { Link } from 'react-router-dom';

import { Box } from '../Box';
import { Button } from '../Button';

const ButtonForm = ({ pathButton, textButton }) => {
  return (
    <Box classStyle='button-singIn'>
      <Button typeBtn='button' classStyle='button button-blue'>
        Iniciar sesión
      </Button>

      <Link to={pathButton.path}>
        <Button typeBtn='submit' classStyle='button button-withe'>
          {textButton}
        </Button>
      </Link>
    </Box>
  );
};

export default ButtonForm;
