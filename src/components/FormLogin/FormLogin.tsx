import { SIGN_IN } from '../../utils/path';

import { ButtonForm } from '../ButtonForm';
import { Label } from '../Label';
import { Input } from '../Input';
import { Form } from '../Form';
import { Box } from '../Box';

const FormLogin = () => {
  return (
    <Form>
      <Box classStyle='input-main'>
        <Label forLabel='email'>Correo electrónico</Label>
        <Input inputType='email' inputPlacheholder='mathias@gmail.com' inputName='email' />
      </Box>
      <Box classStyle='input-main'>
        <Label forLabel='password'>Contraseña</Label>
        <Input inputType='password' inputPlacheholder='•••••••' inputName='password' />
      </Box>
      <ButtonForm pathButton={SIGN_IN} textButton='¿Aun no tienes una cuenta?' />
    </Form>
  );
};

export default FormLogin;
