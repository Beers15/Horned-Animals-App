import HornedBeast from './HornedBeast';
import animalData from '../data';

function Main() {
  let beasts = animalData.map((beast, index) => {
    return (
      <HornedBeast
        key={index} //Not rearrangin items in array
        title={beast.title}
        description={beast.description}
        imgUrl={beast.image_url}
        alt={beast.keyword}
      />
    );
  });

  return (
    <>
      {beasts}
    </>
  );
}

export default Main;
