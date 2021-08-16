function HornedBeast({title, imgUrl, description, alt}) {
  return (
    <>
      <h2>{title}</h2>
      <img src={imgUrl} alt={alt} title={title} />
      <p>{description}</p>
    </>
  );
}

export default HornedBeast;
