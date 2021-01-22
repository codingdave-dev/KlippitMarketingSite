import React from "react";
import { Grid } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import PressItem from "../ui/PressItem";
import BlogItem from "../ui/BlogItem";

import atlantaPodcastImg from "../assets/press/atlantaPodcast.png";
import cohort8Img from "../assets/press/announcingCohart8.png";
import businessRadioImg from "../assets/press/atlantaBusinessRadio.png";

// BLOG
import willInfluencerMarketingImg from '../assets/press/blog/willInfluencers.png'
import meetupImg from '../assets/press/blog/meetup.png'
import influencerMeetup from '../assets/press/blog/influencerMeet.png'

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
    title: "Will Influencer Marketing work for your business?",
    images: [
      {
        id: 0,
        name: 'Will Influencer',
        source: willInfluencerMarketingImg,
        width: '300px'
      }
    ],
    descriptions: [
      {
        id: 0,
        title: '',
        text: 'Face it: people trust what other people say far more than what corporations or advertisements say. In fact, 92% of consumers say they trust word-of-mouth recommendations more than any other type of advertising. Is anyone really surprised that influencer marketing has become such a prevalent and effective form of advertising?'
      },
      {
        id: 1,
        title: 'So, What is Influencer Marketing?',
        text: 'As social media continues to supersede TV, newspapers, and magazines as a dominant source of entertainment, companies have sought new ways to get their products in front of potential customers’ eyes once again. Of course, businesses could choose the easy route and buy ads that Instagram will casually slip into the applicable users’ photo feeds. But users have become quite adept at simply ignoring these.'
      },
      {
        id: 2,
        title: '',
        text: 'Instead, companies are infiltrating their streams by getting the familiar and trusted voices of “influencers” to share their products and their overall brand message.'
      },
      {
        id: 3,
        title: '',
        text: 'Want to find more marketing ideas that will result in more sales and quality leads? Give Klippit a try.'
      },
      {
        id: 4,
        title: '',
        text: '*credit: https://thisisarray.com/'
      }
    ],
  },
  {
    id: 1,
    date: "SEPTEMBER 2, 2020",
    title: "Influencers: Micro & Macro",
    descriptions: [
      {
        id: 0,
        title: '',
        text: 'Micro influencer’s vs macro influencers? Which works best and what’s worth your while?'
      },
      {
        id: 1,
        title: '',
        text: 'First up, let me just explain the difference between a micro and macro influencer.'
      },
      {
        id: 2,
        title: 'Micro Influencers',
        text: 'Micro influencers are ‘normal’ people, so to speak. Most of the time they have less than 10,000 followers.'
      },
      {
        id: 3,
        title: 'Macro Influencers',
        text: 'Macro influencers are famous, known by the many, a household name. These kinds of people are often celebrities who have followers in the region of tens of thousands or millions.'
      },
      {
        id: 4,
        title: '',
        text: 'So, now you know the difference, let\'s go through the pros and cons of both. These are important to know, especially if your brand only has time (and/or budget) for one.'
      },
      {
        id: 5,
        header: 'The Pros of Micro Influencers',
        title: '',
        text: ''
      },
      {
        id: 6,
        title: `They're authentic`,
        text: 'Micro influencers work in a similar way to word of mouth - when they share a photo on Instagram of them enjoying a nutri-bar snack after a workout, you don’t question it (even if their photos are sometimes a little staged).'
      },
      {
        id: 7,
        title: ``,
        text: `It's often easier to believe a micro influencer has actually bought or used a featured product. They tell you the nutri-bar is delicious and it’s high in protein, so you make a mental note of the brand.`
      },
      {
        id: 8,
        title: ``,
        text: 'This kind of authenticity attracts engagement, awareness and brand recall. So, the next time you go to buy a snack, you remember that extra yummy brand name you saw on Instagram.'
      },
      {
        id: 9,
        title: `A micro influencer campaign is easy to execute`,
        text: 'Easy to use, free online platforms such as Klippit enable in-house marketers to take the lead.'
      },
      {
        id: 10,
        header: 'The Cons of Micro Influencers',
        title: '',
        text: ''
      },
      {
        id: 11,
        title: `Capped visibility and reach`,
        text: `Micro influencers obviously don’t have the vast followings of macro influencers, and with most influencer platforms setting a 10k follower limit, the visibility and reach of content is capped.`
      },
      {
        id: 12,
        title: ``,
        text: `That isn’t to say this kind of content isn’t engaging - HubSpot reports that micro influencers, on average, receive 0.10% higher engagement rates than macro influencers.`
      },


      {
        id: 13,
        header: 'The Pros of Macro Influencers',
        title: '',
        text: ''
      },
      {
        id: 14,
        title: `Brands have more control when running a macro influencer campaign`,
        text: `A brand can often chose the exact celebrity and give them precise instructions on what to post, meaning the outcome can be almost predicted.`
      },
      {
        id: 15,
        title: ``,
        text: `This control also enables brands to build a stigma or reputation around their product - for example, a cast member of Made in Chelsea may support the ‘luxury’ representation of a product, whereas an Olympian may support strong, robust and professional connotations.`
      },
      {
        id: 16,
        title: ``,
        text: `However, this can go wrong - take BooTea for example. The diet brand asked Scott Disick to feature their product on his Instagram.`
      },
      {
        id: 17,
        title: ``,
        text: `A campaign that results in something like this can shatter a brands' authenticity.`
      },

      {
        id: 18,
        header: 'The Cons of Macro Influencers',
        title: '',
        text: ''
      },
      {
        id: 19,
        title: `People don’t believe or trust macro influencers`,
        text: `Product placement is often obvious, and thus unauthentic`
      },
      {
        id: 20,
        title: ``,
        text: `People can see through a devised Instagram post, and therefore trust the content less. While this kind of marketing is great for reach and awareness, people often don’t trust that the influencer really uses the product.`
      },

      {
        id: 21,
        title: `Macro influencer campaigns are more expensive`,
        text: `Celebrities will also generally require much higher payment than micro influencers.`
      },
      {
        id: 22,
        title: ``,
        text: `One piece of content from a celebrity influencer could cost anywhere from $2,000 to a whopping $50,000, depending on their status and follower count. If you’re thinking of getting the Kardashians involved, you better have a spare $500,000 knocking about. Believe it or not, these endorsements now make up around 25% of the Kardashians' income, demonstrating just how expensive they can be.`
      },

      {
        id: 23,
        title: ``,
        text: `Although their audiences might be bigger, and your content will therefore see much a higher reach, you may also be able to get a lot more out of lots of single posts with micro influencers, as opposed to one expensive macro influencer post.`
      },

      {
        id: 24,
        header: '',
        title: 'Macro influencer campaigns are a little harder to execute',
        text: `They'll often take longer to organize, and may require a PR agency. Getting hold of a celebrity or their manager is one thing, but standing out amongst many other requests, is another.`
      },
      {
        id: 25,
        title: ``,
        text: `Celebrities can also be picky with which brands they endorse, so showing them how your product will raise their profile and person brand is also important.`
      },
      {
        id: 26,
        title: `So, Which One Should You Go With?`,
        text: `Both macro and micro influencer campaigns have their pros and cons, but in most instances, I’d choose a micro campaign. Authenticity is so important - Millennials, in particular, crave it.`
      },
    ],
  },
  {
    id: 2,
    date: "SEPTEMBER 2, 2020",
    title: "Influencers Meetup Group",
    images: [
      {
        id: 0,
        name: 'Meet Up Group',
        source: meetupImg,
        width: '300px'
      },
      {
        id: 1,
        name: 'Meet Up Influencers Group',
        source: influencerMeetup,
        width: '300px'
      }
    ],
    descriptions: [
      {
        id: 0,
        title: 'Atlanta Influencers + F Collective',
        text: 'The Atlanta influencers Meetup Group held a joint meetup with the F Collective. Chike, the founder of Klippit, was on the panel alongside: Okey (Founder of the Fashion Tech Collective), Chidiebere (Founder of Looklive Inc), and Olashade (founder of LaShade Designs)'
      },
      {
        id: 1,
        title: '',
        text: 'Influencer marketing has fundamentally changed the balance of power between customer and brands because it enables peer recommendations to play a much greater role in purchasing decisions. Social influenced marketing generates more than twice the sales of paid advertising, and these customers have a 37% higher retention rate.'
      },
      {
        id: 2,
        title: '',
        text: 'Atlanta Influencers Meetup Group focuses on networking with other influencers, Business Owners, Bloggers, and Entrepreneurs with a goal of sharing different ways to grow and build our individual followings to leverage the explosive growth of brands partnering with influencers.'
      },
      {
        id: 3,
        title: '',
        text: '*credit: Atlanta Influencers Meetup Group'
      },
    ],
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
          id={'blog'}
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
              item={item}
            />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default Press;
