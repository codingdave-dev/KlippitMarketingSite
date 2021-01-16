import React from "react";
import { Grid } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import PressItem from "../ui/PressItem";
import BlogItem from "../ui/BlogItem";

import atlantaPodcastImg from "../assets/press/atlantaPodcast.png";
import cohort8Img from "../assets/press/announcingCohart8.png";
import businessRadioImg from "../assets/press/atlantaBusinessRadio.png";

const press = [
  {
    id: 0,
    date: "January 1, 2021",
    title: "Atlanta Startup Podcast",
    description:
      "Atlanta Startup Podcast interview with our very own Chike Nwoke.",
    link:
      "https://atlantastartuppodcast.com/ep-34-chike-nwoke-founder-klippit/",
    image: atlantaPodcastImg,
  },
  {
    id: 1,
    date: "December 1, 2020",
    title: "Startup Runway",
    description:
      "Chike Nwoke explaining how Klippit allows influencers to turn their selfies into savings.",
    link: "https://startuprunway.org/company/klippit/",
    image: cohort8Img,
  },
  {
    id: 2,
    date: "November 1, 2020",
    title: "Atlanta Business Radio Interview",
    description: "Chike Nwoke talking to Atlanta Business Radio X",
    link: "https://businessradiox.com/podcast/atlantabusinessradio/klippit/",
    image: businessRadioImg,
  },
];

const blog = [
  {
    id: 0,
    date: "SEPTEMBER 2, 2020",
    title: "Blog Title goes here",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto ea eius facere facilis fugit iusto, molestias nam non tenetur velit.",
    link: "",
  },
];

const Press = () => {
  return (
    <Grid container justify={"center"} direction={"column"}>
      <Grid item style={{ marginTop: "4em" }}>
        <Typography
          variant={"h1"}
          style={{ fontSize: "45px", fontWeight: 400, textAlign: "center" }}
        >
          Press
        </Typography>
      </Grid>

      {press.map((item) => (
        <Grid item key={item.id}>
          <PressItem
            img={item.image}
            date={item.date}
            title={item.title}
            description={item.description}
            link={item.link}
          />
        </Grid>
      ))}

      {/*BLOG*/}
      <Grid
        item
        container
        style={{
          backgroundColor: "#8AC5CC",
          paddingTop: "40px",
        }}
        direction={"column"}
      >
        <Grid item style={{ marginTop: "4em" }}>
          <Typography
            variant={"h1"}
            style={{ fontSize: "45px", fontWeight: 400, textAlign: "center" }}
          >
            Blog
          </Typography>
        </Grid>

        {blog.map((item) => (
          <Grid item key={item.id}>
            <BlogItem
              date={item.date}
              title={item.title}
              description={item.description}
              link={item.link}
            />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default Press;
