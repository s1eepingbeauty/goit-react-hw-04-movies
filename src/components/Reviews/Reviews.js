import './styles.scss';

const Reviews = ({ reviewsList }) => {
  return (
    <div>
      <ul className="reviewList">{reviewsList}</ul>
    </div>
  );
};

export default Reviews;
