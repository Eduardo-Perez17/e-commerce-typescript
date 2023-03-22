import { HeaderHTML } from '../../components/HeaderHTML';
import { Paragraph } from '../../components/Paragraph';
import { FormLogin } from '../../components/FormLogin';
import { FormMain } from '../../components/FormMain';
import { Title } from '../../components/Title';
import { Box } from '../../components/Box';

const login = () => {
  return (
    <FormMain>
      <HeaderHTML>
        <Title>
          <h3>Iniciar sesion</h3>
        </Title>
        <Paragraph>Lorem ipsum dolor sit amet consectetur, Lorem,sicing elit. Quibusdam explicabo, mollitia, iste enim iure optio vot.</Paragraph>
      </HeaderHTML>

      <Box classStyle='form__main--item'>
        <FormLogin />
      </Box>
    </FormMain>
  );
};

export default login;
