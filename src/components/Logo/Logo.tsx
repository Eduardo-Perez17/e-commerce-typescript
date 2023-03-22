import { LOGO_IMAGE } from '../../utils/image';

import './_logo.scss';

import { Box } from '../Box';
import { Image } from '../Image';
import { Title } from '../Title';

const Logo = (): JSX.Element => {
  return (
    <Box classStyle='logo'>
      <Image srcImg={LOGO_IMAGE.img} altImg={LOGO_IMAGE.alt} />
      <Title>
        <h1>Shopping</h1>
      </Title>
    </Box>
  );
};

export default Logo;
