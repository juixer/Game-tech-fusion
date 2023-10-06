import { Helmet } from "react-helmet-async";
import Teams from "./Team/Teams";

const AboutUs = () => {
  return (
    <div className="hero lg:py-10 lg:my-16">
        <Helmet>
            <title>About Us</title>
        </Helmet>
      <div className="hero-content text-center">
        <div className="max-w-5xl">
          <h1 className="text-5xl font-bold">About us</h1>
          <p className="py-6">
          At TechGaming Events, we are passionate about bringing the worlds of technology and gaming together. Our mission is to connect enthusiasts, professionals, and businesses in these dynamic industries by providing a platform for discovering, participating in, and promoting events that shape the future.
          </p>
          <p className="mb-5"><span className="font-bold text-indigo-500">Our Mission</span>: Our mission is to create a vibrant community where tech enthusiasts and gamers can discover, connect, and engage with the latest events, trends, and innovations. We believe in the power of events to inspire, educate, and foster collaboration.</p>
          <p className="mb-10"><span className="font-bold text-indigo-500">Our Vision</span>: We envision a future where technology and gaming events are accessible to all, where innovation thrives, and where connections made at our events lead to groundbreaking discoveries and lifelong friendships.</p>
          <Teams/>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
