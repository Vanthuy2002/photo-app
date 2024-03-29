import { Layout } from 'src/components';
import { PhotoForm } from '..';

const AddPhoto = () => {
  return (
    <div className='photo-edit'>
      <Layout>
        <div className='photo-edit__form'>
          <PhotoForm
            onSubmit={(values) => console.log('Form submit: ', values)}
          />
        </div>
      </Layout>
    </div>
  );
};

export default AddPhoto;
