import React from "react";
import styled from "styled-components";

import basket from '../images/basket.jpg';
import breakfast from '../images/breakfast.jpg';
import cocktail from '../images/cocktail.jpg';
import coffee from '../images/coffee.jpg';
import passport from '../images/passport.jpg';
import waffle from '../images/waffle.jpg';
import wine from '../images/wine.jpg';

const images = [
  basket, breakfast, cocktail, coffee, passport, waffle, wine
]

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

const GridItem = styled.div`
  flex: auto;
  width: 700px;
  height: 700px;

  img {
    min-width: 100%;
    max-height: 100%;
    object-fit: cover;
  }
`;

function Gallery() {
  const gridItems = images.map((image, index) => {
    return (
      <GridItem key={index}>
        <img src={image} alt="" />
      </GridItem>
    )

  })

  return (
    <div>
      <h2>Photo Gallery</h2>
      <Grid>
        {gridItems}
      </Grid>
    </div>
  )
}

export default Gallery;
