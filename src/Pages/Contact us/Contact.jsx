import { Helmet } from "react-helmet-async";
import { FaPhone, FaFileLines, FaMessage} from "react-icons/fa6";

const Contact = () => {
  return (
    <div className="py-10 mx-3">
      <Helmet>
        <title>Contact Us</title>
      </Helmet>
      <h1 className="text-5xl text-center font-bold">Contact us</h1>
      <div className="flex flex-col max-w-screen-2xl mx-auto lg:flex-row py-24 lg:py-44 gap-10">
        <div className="flex max-w-5xl items-center flex-col">
            <p className="text-8xl mb-5"><FaPhone/></p>
            <h1 className="text-3xl font-bold mb-2">By Phone</h1>
            <p className="mb-2">(Monday to Saturday, 9am to 4pm PST)</p>
            <p>International: 0-999-324-234</p>
        </div>
        <div className="flex max-w-xl mx-auto items-center flex-col">
            <p className="text-8xl mb-5"><FaFileLines/></p>
            <h1 className="text-3xl font-bold mb-2">Start A New Case</h1>
            <p className="mb-5">Just send us your questions or concerns by starting a new case and we will give you the help you need</p>
            <button className="btn bg-black text-white hover:text-black">Start Here</button>
        </div>
        <div className="flex max-w-5xl items-center flex-col">
            <p className="text-8xl mb-5"><FaMessage/></p>
            <h1 className="text-3xl font-bold mb-2">Live Chat</h1>
            <p className="mb-5">Chat with a member of our in-house team</p>
            <button className="btn bg-black text-white hover:text-black">Start Here</button>

        </div>
      </div>
    </div>
  );
};

export default Contact;
