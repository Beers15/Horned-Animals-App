import HornedBeast from './HornedBeast';
import { hornedBeasts } from '../data';

function Main() {
  let beasts = hornedBeasts.map(beast => {
    return <HornedBeast title={beast.title} description={beast.description} imgUrl={beast.image_url} alt={beast.keyword} />;
  });

  return (
    <>
      {beasts}
    </>
  );
}

export default Main;
