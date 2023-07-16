import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { useEffect, lazy, Suspense } from 'react';
import { NotFound } from '../components';
import EditPage from '../Feature/Pages/EditPage';
import AddPhoto from '../Feature/Pages/AddPhoto';

const PhotoPages = lazy(() => import('../Feature/Pages/MainPage'));

const Routing = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === '/') {
      navigate('/photos', { replace: true });
    }
  }, [navigate, pathname]);

  return (
    <Suspense fallback={<p>Loading pages...</p>}>
      <Routes>
        <Route path='/photos' element={<PhotoPages />} />
        <Route path='/photos/add' element={<AddPhoto />} />
        <Route path='/photos/edit' element={<EditPage />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};

export default Routing;
