import { Link } from 'react-router-dom';

import { Props } from '../../interface/interface.mapCompontents';

import { Box } from '../Box';
import { Image } from '../Image';
import { Paragraph } from '../Paragraph';

const MapComponents = ({ mapComponent }: Props) => {
  return (
    <>
      {mapComponent.map(
        (items): Object => (
          <Box classStyle='menu_item' key={items.name}>
            <Link to={items.path}>
              <Image srcImg={items.image.img} altImg={items.image.alt} />
              <Paragraph>{items.name}</Paragraph>
            </Link>
          </Box>
        )
      )}
    </>
  );
};

export default MapComponents;
