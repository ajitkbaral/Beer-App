import "./EmptyContainer.scss";

const EmptyContainer = (props) => {
  const { addNewBeer } = props;
  return (
    <div className="empty-section bg-light position-relative">
      <div className="message position-absolute text-center">
        <span className="d-block">Nothing to see yet.</span>
        <span>
          <a href="/#" className="text-blue" onClick={addNewBeer}>
            Click here
          </a>{" "}
          to add a new beer!
        </span>
      </div>
    </div>
  );
};

export default EmptyContainer;
