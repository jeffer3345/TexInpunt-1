
import { useField } from 'formik'

const Checkbox = ({ children, ...props }) => {
    const [field, meta] = useField({ ...props, type: 'Checkbox' })
    
    return (
        <div>
            <label>
                <input type="Checkbox"{...field} {...props} />
                {children}
            </label>
            {meta.touched && meta.error ?
                <div>{meta.error} </div> : null}

        </div>


    )
}
export default Checkbox
