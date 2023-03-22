import { HeaderHTML } from '../../components/HeaderHTML';
import { FormSingIn } from '../../components/FormSingIn';
import { Paragraph } from '../../components/Paragraph';
import { FormMain } from '../../components/FormMain';
import { Title } from '../../components/Title';
import { Box } from '../../components/Box';

const SingIn = (): JSX.Element => {
  return (
    <FormMain>
      <HeaderHTML>
        <Title>
          <h3>Crear una cuenta</h3>
        </Title>
        <Paragraph>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</Paragraph>
      </HeaderHTML>

      <Box classStyle='form__main--item'>
        <FormSingIn />
      </Box>
    </FormMain>
  );
};

export default SingIn;
