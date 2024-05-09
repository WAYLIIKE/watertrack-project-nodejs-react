import { Helmet } from 'react-helmet-async';
import { WaterModal } from '../../components/WaterModal/WaterModal';

export default function TrackerPage() {
  return (
    <div>
      <p>Tracker page...</p>
      <Helmet>
        <title>Tracker</title>
      </Helmet>
      <WaterModal title={'Add water'} />
    </div>
  );
}
