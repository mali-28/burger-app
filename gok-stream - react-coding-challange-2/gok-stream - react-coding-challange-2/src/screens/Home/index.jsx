import { Container } from "@material-ui/core";
import React from "react";
import PageTitle from "../../components/PageTitle";
import TilesList from "../../components/TilesList";


const Home = () => {
  const tilesList = [
    {
      title: "Popular Series",
      link: "/series",
    },
    {
      title: "Popular Movies",
      link: "/movies",
    }
  ];

  return (
    <div>
      <PageTitle title={"Home"} />
      <Container maxWidth={"md"}>
        <TilesList list={tilesList} />
      </Container>
    </div>
  );
};

export default Home;
