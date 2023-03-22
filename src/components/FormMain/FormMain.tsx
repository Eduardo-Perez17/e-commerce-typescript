import './_formMain.scss';

import { SectionHTML } from '../SectionHTML';
import { Paragraph } from '../Paragraph';
import { Image } from '../Image';
import { Title } from '../Title';
import { Logo } from '../Logo';
import { Box } from '../Box';

const FormMain = ({ children }: IChildrenProp): JSX.Element => {
  return (
    <Box classStyle='container-app-father form__father grid-father'>
      <Box classStyle='container-app form__son grid-son'>
        <Box classStyle='form-main'>
          <Box classStyle='form__content'>
            <Logo />
            <SectionHTML>
              <Title>
                <h2>Empieza a caminar con estilo.</h2>
              </Title>
              <Paragraph>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore soluta quasi vel autem velit atque sapiente</Paragraph>
            </SectionHTML>
            <SectionHTML>
              <Box classStyle='form__profile'>
                <Image srcImg='https://i.pravatar.cc/150?u=sergio_serrano' altImg='avatar' />
                <Paragraph>Mathias Apolo</Paragraph>
              </Box>
              <Paragraph>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus</Paragraph>
            </SectionHTML>
          </Box>
          <Box classStyle='form_form--father'>{children}</Box>
        </Box>
      </Box>
    </Box>
  );
};

export default FormMain;
