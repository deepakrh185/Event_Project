import { getFeaturedEvents } from "../helper/helper-api";
import EventList from "../Components/EventList";
import Head from "next/head";
import NewsletterRegistration from "../Components/input/newsletter-registration";

export default function Home({ events }) {
  return (
    <div>
      <Head>
        <title>Home Page</title>
        <meta
          title="Home page"
          content="Find  alot of great events that allow you to evolve...."
        />
      </Head>
      <NewsletterRegistration />
      <EventList items={events} />
    </div>
  );
}

export async function getStaticProps() {
  const featuredEvents = await getFeaturedEvents();
  return {
    props: {
      events: featuredEvents,
    },
    revalidate: 50,
  };
}
