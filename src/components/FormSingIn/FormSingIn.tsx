import { Formik } from 'formik';
import { LOG_IN } from '../../utils/path';

import { ButtonForm } from '../ButtonForm';
import { Label } from '../Label';
import { Input } from '../Input';
import { Form } from '../Form';
import { Box } from '../Box';

const FormSingIn = (): JSX.Element => {
  return (
    <Formik>
      <Form formSubmit={handleSubmit}>
        <Box classStyle='input-main'>
          <Label forLabel='name'>Nombre</Label>
          <Input inputType='name' inputPlacheholder='Mathias' inputName='email' />
        </Box>
        <Box classStyle='input-main'>
          <Label forLabel='email'>Correo electrónico</Label>
          <Input inputType='email' inputPlacheholder='mathias@gmail.com' inputName='email' />
        </Box>
        <Box classStyle='input-main'>
          <Label forLabel='password'>Contraseña</Label>
          <Input inputType='password' inputPlacheholder='•••••••' inputName='password' />
        </Box>
        <Label forLabel='name'>Avatar</Label>
        <Box classStyle='input-main drop-area'>
          <Input inputType='file' inputName='file' />
        </Box>
        <Box classStyle='input-main'>
          <Label forLabel='name'>Género</Label>
          <Box classStyle='input__main--radio'>
            <Label forLabel='name'>Hombre</Label>
            <Input inputType='radio' inputName='radio' />

            <Label forLabel='name'>Mujer</Label>
            <Input inputType='radio' inputName='radio' />

            <Label forLabel='name'>No definir</Label>
            <Input inputType='radio' inputName='radio' />
          </Box>
        </Box>

        <ButtonForm pathButton={LOG_IN} textButton='¿Tienes una cuenta?' />
      </Form>
    </Formik>
  );
};

export default FormSingIn;
