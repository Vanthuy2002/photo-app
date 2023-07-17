import PropTypes from 'prop-types';
import { FormGroup, Input, Label } from 'reactstrap';

// eslint-disable-next-line no-unused-vars
const InputField = ({ label, placeholder, disabled, form, field }) => {
  const { name } = field;
  return (
    <FormGroup>
      {label && <Label for={name}>{label}</Label>}
      <Input
        id={name}
        {...field}
        placeholder={placeholder}
        disabled={disabled}
      />
    </FormGroup>
  );
};

InputField.defaultProps = {
  label: '',
  placeholder: '',
};

InputField.propTypes = {
  form: PropTypes.object,
  field: PropTypes.object,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
};

export default InputField;
