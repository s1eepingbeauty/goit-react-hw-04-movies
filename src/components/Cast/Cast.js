import './styles.scss';

const Cast = ({ castList }) => {
  return (
    <div>
      <ul className="castList">{castList}</ul>
    </div>
  );
};

export default Cast;
