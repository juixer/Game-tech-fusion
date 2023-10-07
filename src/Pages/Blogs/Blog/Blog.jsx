const Blog = ({ blog }) => {
  const { title, author, date, image_url, excerpt } = blog;
  return (
    <div
      data-aos="fade-up-right"
      data-aos-offset="300"
      data-aos-easing="ease-in-sine"
      data-aos-duration="600"
    >
      <div className="flex rounded-xl flex-col items-center lg:flex-row bg-base-100 shadow-xl border border-black">
        <div>
          <img src={image_url} alt={title} />
        </div>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{date}</p>
          <p>{excerpt}</p>
          <div className="card-actions mt-5 justify-center">
            <button className="btn bg-black text-white hover:text-black">
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
