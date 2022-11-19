import { useEffect, useState } from "react";
import { PropTypes } from "prop-types";
import Button from "react-bootstrap/Button";
import BeerItem from "../Items/BeerItem";

import { getAllBeers } from "../../services/Beer.service";
import BeerModal from "../Modals/BeerModal";
import beerImg from "../../assets/beer.png";
import EmptyContainer from "../Containers/EmptyContainer/EmptyContainer";

import "./BeerList.scss";
import downArrowImg from "../../assets/angle-down-solid.svg";

import { ALL_BEERS, BEER_LIST, MY_BEERS } from "../../constants";
import { getValueFromStorage, setValueToStorage } from "../../utils/storage";
import { Image } from "react-bootstrap";

function BeerList(props) {
  // List States
  const [beerList, setBeerList] = useState([]);
  const [pageToLoad, setPageToLoad] = useState(1);
  const [activePage, setActivePage] = useState(pageToLoad);
  const itemsPerPage = 10;
  //   Modal States
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    if (props.type === ALL_BEERS.key) {
      getAllBeers(pageToLoad, itemsPerPage)
        .then((beerListRes) => setBeerList(beerList.concat(beerListRes)))
        .then(() => {
          setActivePage(pageToLoad);
        })
        .catch((e) => {
          console.error("Error", e);
        });
    } else {
      let bList = getValueFromStorage(BEER_LIST);
      if (bList) {
        setBeerList(bList);
      }
    }
  }, [pageToLoad]);

  const handleLoadMore = (event) => {
    event.preventDefault();
    setPageToLoad(activePage + 1);
  };

  const handleSubmit = (beer) => {
    let beerListFromStorage = getValueFromStorage(BEER_LIST);
    beerListFromStorage === null
      ? (beerListFromStorage = [beer])
      : beerListFromStorage.push(beer);
    setValueToStorage(BEER_LIST, beerListFromStorage);
    setBeerList(beerListFromStorage);
    handleClose();
  };

  return (
    <>
      {beerList.length === 0 ? (
        <EmptyContainer addNewBeer={handleShow} />
      ) : (
        <div>
          {props.type === MY_BEERS.key && (
            <div className="d-flex justify-content-end">
              <Button variant="primary" onClick={handleShow}>
                Add a new beer
              </Button>
            </div>
          )}
          <div className="row beer-list d-md-block g-3">
            {beerList.map((beerItem, index) => (
              <BeerItem
                key={beerItem.id || index}
                name={beerItem.name}
                genre={beerItem.genre || beerItem.tagline}
                description={beerItem.description}
                imageUrl={
                  props.type === MY_BEERS.key ? beerImg : beerItem.image_url
                }
                ingredients={beerItem.ingredients}
              />
            ))}
          </div>
          {props.type === ALL_BEERS.key && (
            <div className="d-flex justify-content-center pt-5 pb-5">
              <a href="#" className="load-more" onClick={handleLoadMore}>
                Load More <Image src={downArrowImg} width="16" height="16" />
              </a>
            </div>
          )}
        </div>
      )}
      {props.type === MY_BEERS.key && (
        <BeerModal
          show={show}
          handleClose={handleClose}
          handleSubmit={handleSubmit}
        />
      )}
    </>
  );
}

BeerList.propTypes = {
  type: PropTypes.oneOf([ALL_BEERS.key, MY_BEERS.key]),
};

export default BeerList;
