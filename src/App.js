import { Formik, Form, Field, ErrorMessage } from 'formik'
import TextInput from './components/TextInput'
import Checkbox from './components/Checkbox'
import Select from './components/Select'
import Radio from './components/Radio'
const validate = (values) => {

    const errors = {}
    if (!values.name) {
        errors.name = 'requerido'
    } else if (values.name.length < 5) {
        errors.name = 'el nombre es muy corto '
    }
    if (!values.lastname) {
        errors.lastname = 'requerido'
    } else if (values.lastname.length < 5) {
        errors.lastname = 'El apellido es muy corto '
    }
    if(!values.radio) {
        errors.radio='requerido'
    }

    return errors
}
function App() {

    return (
        <Formik
            initialValues={{ name: '', lastname: '', email: '', chancho: '',radio:'' }}
            validate={validate}

            onSubmit={values => console.log(values)}
        >


            <Form>

                <TextInput name="name" label="Nombre" />
                <br />
                <TextInput name="lastname" label="Apellido" />
                <br />
                <TextInput name="email" label="Email" />
                <br />

                <Select label="tipo de condicion" name="chancho">
                    <option value="">seleccione condicion </option>
                    <option value="adios"> Adios</option>
                    <option value="hasta luego"> Hasta luego</option>
                    <option value="nos vemos"> Nos vemos</option>
                    <option value="como estas"> Como estas</option>
                </Select>
                <br />

                <Checkbox name="accept">
                    Aceptar terminos y condiciones
                </Checkbox>
                <br />
                <Radio name="radio" value="saludo1" label="saludo1" />
                <Radio name="radio" value="saludo2" label="saludo2" />
                <Radio name="radio" value="saludo3" label="saludo3" />
                <ErrorMessage name="radio"/>
                <br />
                <button type="submit"> Enviar</button>

            </Form>
        </Formik>

    );
}

export default App;
