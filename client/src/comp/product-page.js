import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import GitHubIcon from "@material-ui/icons/GitHub";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import Header from "./header";
import MainFeaturedPost from "./main-feature-post";
import FeaturedPost from "./featured-post";
import Main from "./main";
import Sidebar from "./sidebar";
//import Footer from "./Footer";
import post1 from "./post1.md";
//import post2 from "./blog-post.2.md";
//import post3 from "./blog-post.3.md";

const useStyles = makeStyles(theme => ({
  mainGrid: {
    marginTop: theme.spacing(3)
  }
}));

const sections = [
  { title: "Technology", url: "#" },
  { title: "Design", url: "#" },
  { title: "Culture", url: "#" },
  { title: "Business", url: "#" },
  { title: "Politics", url: "#" },
  { title: "Opinion", url: "#" },
  { title: "Science", url: "#" },
  { title: "Health", url: "#" },
  { title: "Style", url: "#" },
  { title: "Travel", url: "#" }
];

const mainFeaturedPost = {
  title: "Product Name - Guitar",
  description:
    "I love this guitar and I would love to buy it but it has to have this price",
  image: "https://source.unsplash.com/random",
  imgText: "main image description"
  //linkText: "Continue reading…"
};

const featuredPosts = [
  {
    title: "Product Name - Fender Guitar - $1,000",
    date: "Nov 12",
    description:
      "Looking for a black American Fender Jazz bass guitar. Year - not older than 2007 ",
    image: "https://source.unsplash.com/random",
    imageText: "Image Text"
  },
  {
    title: "Sales Offer",
    date: "Nov 11",
    description:
      "Hey Dude, I got this guitar but I am asking for $1,100. Let me know if you want it. ",
    image: "https://source.unsplash.com/random",
    imageText: "Image Text"
  }
];

const posts = [post1];

const sidebar = {
  title: "About",
  description:
    "Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.",
  archives: [
    { title: "March 2020", url: "#" },
    { title: "February 2020", url: "#" },
    { title: "January 2020", url: "#" },
    { title: "November 1999", url: "#" },
    { title: "October 1999", url: "#" },
    { title: "September 1999", url: "#" },
    { title: "August 1999", url: "#" },
    { title: "July 1999", url: "#" },
    { title: "June 1999", url: "#" },
    { title: "May 1999", url: "#" },
    { title: "April 1999", url: "#" }
  ],
  social: [
    { name: "GitHub", icon: GitHubIcon },
    { name: "Twitter", icon: TwitterIcon },
    { name: "Facebook", icon: FacebookIcon }
  ]
};

export default function Blog() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="Blog" sections={sections} />
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container spacing={4}>
            {featuredPosts.map(post => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid>
          <Grid container spacing={5} className={classes.mainGrid}>
            <Main title="From the firehose" posts={posts} />
            <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              archives={sidebar.archives}
              social={sidebar.social}
            />
          </Grid>
        </main>
      </Container>
      {/* <Footer
        title="Footer"
        description="Something here to give the footer a purpose!"
      /> */}
    </React.Fragment>
  );
}
