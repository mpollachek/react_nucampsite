import { useSelector } from 'react-redux';
import { selectAllCampsites } from './campsitesSlice';
import {Col, Row} from 'reactstrap';
import CampsiteCard from "./CampsiteCard";
import Error from '../../components/Error';
import Loading from '../../components/Loading';

const CampsitesList = () => {
  const campsites = useSelector(selectAllCampsites);
  console.log('campsites:', campsites);
  const isLoading = useSelector((state) => state.campsites.isLoading);
  const errMsg = useSelector((state) => state.campsites.errMsg);
  if (isLoading) {
    return (
            <Loading />
    );
}

if (errMsg) {
    return (
            <Error errMsg={errMsg} />
    );
}
  return (
      <Row className='ms-auto'>
          {campsites.map((campsite) => {
              return (
                  <Col md='5' className='m-4' key={campsite.id}>
                      <CampsiteCard campsite={campsite} />
                  </Col>
              );
          })}
      </Row>
  );
};

export default CampsitesList