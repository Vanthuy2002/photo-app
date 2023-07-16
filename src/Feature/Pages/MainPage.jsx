// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Container } from 'reactstrap';
import { Link } from 'react-router-dom';
import Layout from '../../components/Layout';

const PhotoPages = () => {
  return (
    <>
      <Layout>
        <Container className='text-center'>
          <Link to='/photos/add'>Add new photo</Link>
        </Container>
      </Layout>
    </>
  );
};

export default PhotoPages;
