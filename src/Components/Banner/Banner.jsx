import "./Banner.css";
const Banner = () => {
  return (
    <div
      className="mx-1 my-10"
      data-aos="flip-up"
      data-aos-offset="300"
      data-aos-easing="ease-in-sine"
      data-aos-duration="800"
    >
      <h1 className="text-center font-bold mb-5 text-3xl">Our Best Events</h1>
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <div id="banner1" className="w-full h-[600px] rounded-xl relative">
            <div className="p-4 bg-black bg-opacity-40 rounded-b-xl absolute w-full bottom-0">
              <h1 className="text-3xl mb-3 text-white">
                GameCon International
              </h1>
              <p className="text-white">
                The ultimate gaming convention where gamers unite to experience
                the latest games, esports tournaments, and cosplay competitions.
              </p>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <div id="banner2" className="w-full h-[600px] relative rounded-xl">
            <div className="p-4 bg-black rounded-b-xl bg-opacity-40 absolute w-full bottom-0">
              <h1 className="text-3xl mb-3 text-white">CodeCraft Hackathon</h1>
              <p className="text-white">
                A 48-hour coding marathon for developers and tech enthusiasts to
                create innovative solutions and win exciting prizes.
              </p>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <div id="banner3" className="w-full h-[600px] relative rounded-xl">
            <div className="p-4 bg-black rounded-b-xl bg-opacity-40 absolute w-full bottom-0">
              <h1 className="text-3xl mb-3 text-white">TechXpo 2023</h1>
              <p className="text-white">
                The premier technology conference of the year featuring top
                industry experts, cutting-edge innovations, and networking
                opportunities.
              </p>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <div id="banner4" className="w-full h-[600px] relative rounded-xl">
            <div className="p-4 bg-black rounded-b-xl bg-opacity-40 absolute w-full bottom-0">
              <h1 className="text-3xl mb-3 text-white">WellnessTech Summit</h1>
              <p className="text-white">
                Explore the intersection of technology and wellness with
                inspiring keynotes, workshops, and the latest health tech
                innovations.
              </p>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
