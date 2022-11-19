import Image from "react-bootstrap/Image";

import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

const BeerImage = (props) => {
  const { ingredients } = props;

  const renderTooltip = (props) => {
    return (
      <Tooltip id="button-tooltip" {...props}>
        Ingredients: {ingredients}
      </Tooltip>
    );
  };

  return (
    <OverlayTrigger
      placement="top"
      delay={{ show: 200, hide: 200 }}
      overlay={renderTooltip}
    >
      <Image className="position-absolute w-100 h-100" src={props.imageUrl} />
    </OverlayTrigger>
  );
};

const BeerItem = (props) => {
  const { name, genre, description, imageUrl, ingredients } = props;
  return (
    <div className="beer-list-item shadow col-md-12 col-6">
      <div className="d-flex py-4 mt-4">
        <div className="image col-2 position-relative">
          {ingredients ? (
            <BeerImage
              imageUrl={imageUrl}
              ingredients={Object.keys(ingredients)?.join(", ")}
            />
          ) : (
            <Image
              className="position-absolute w-100 h-100"
              src={props.imageUrl}
            />
          )}
        </div>
        <div className="details col-9">
          <div className="title">{name}</div>
          <div className="brand text-warning mt-2">{genre}</div>
          <div className="info mt-2">{description}</div>
        </div>
      </div>
    </div>
  );
};

export default BeerItem;
