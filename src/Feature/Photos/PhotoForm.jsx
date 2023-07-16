import PropTypes from 'prop-types';
import Select from 'react-select';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import { PHOTO_CATEGORY_OPTIONS } from 'src/utils/contants';

function PhotoForm({ onSubmit }) {
  return (
    <Form>
      <FormGroup>
        <Label for='titleId'>Title</Label>
        <Input name='title' id='titleId' placeholder='Eg: Wow nature ...' />
      </FormGroup>

      <FormGroup>
        <Label for='categoryId'>Category</Label>
        <Select
          id='categoryId'
          name='categoryId'
          placeholder="What's your photo category?"
          options={PHOTO_CATEGORY_OPTIONS}
        />
      </FormGroup>

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
}

PhotoForm.propTypes = {
  onSubmit: PropTypes.func,
};

PhotoForm.defaultProps = {
  onSubmit: null,
};

export default PhotoForm;
