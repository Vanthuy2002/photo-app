import { Formik, Form, FastField } from 'formik';
import PropTypes from 'prop-types';
import { Button, FormGroup, Label } from 'reactstrap';
import InputField from 'src/components/Input';
import SelectField from 'src/components/Select';
import { PHOTO_CATEGORY_OPTIONS } from 'src/utils/contants';

function PhotoForm() {
  const initialValues = {
    title: '',
    category: '',
  };
  return (
    <Formik initialValues={initialValues}>
      {(formikprops) => {
        const { errors, values } = formikprops;
        console.log('🚀', values, errors);
        return (
          <Form>
            <FastField
              name='title'
              component={InputField}
              label='TitleId'
              placeholder='Eg: Wow nature ...'
            />

            <FastField
              name='category'
              component={SelectField}
              label='CategoryId'
              placeholder="What's your photo category?"
              options={PHOTO_CATEGORY_OPTIONS}
            />

            <FormGroup>
              <Label for='categoryId'>Photo</Label>
              <div>
                <Button type='button' className='mb-3' outline color='primary'>
                  Random a photo
                </Button>
              </div>
              <div>
                <img
                  width='200px'
                  height='200px'
                  src='/white-bg.jpg'
                  alt='colorful background'
                />
              </div>
            </FormGroup>

            <FormGroup>
              <Button color='primary'>Add to album</Button>
            </FormGroup>
          </Form>
        );
      }}
    </Formik>
  );
}

PhotoForm.propTypes = {
  onSubmit: PropTypes.func,
};

PhotoForm.defaultProps = {
  onSubmit: null,
};

export default PhotoForm;
