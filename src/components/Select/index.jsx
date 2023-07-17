import Select from 'react-select';
import PropTypes from 'prop-types';
import { FormGroup, Label } from 'reactstrap';

const SelectField = ({ field, label, placeholder, disabled, options }) => {
  const { name, value } = field;
  const selectOptions = options.find((option) => option.label === value);

  const handleSelect = (option) => {
    const selectValues = option ? option.label : option;

    const changeEvent = {
      target: { name: name, value: selectValues },
    };
    field.onChange(changeEvent);
  };

  return (
    <FormGroup>
      {label && <Label for={name}>{label}</Label>}
      <Select
        id={name}
        {...field}
        onChange={handleSelect}
        value={selectOptions}
        placeholder={placeholder}
        options={options}
        disabled={disabled}
      />
    </FormGroup>
  );
};

SelectField.propTypes = {
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,

  label: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  options: PropTypes.array,
};

SelectField.defaultProps = {
  label: '',
  placeholder: '',
  disabled: false,
  options: [],
};

export default SelectField;
