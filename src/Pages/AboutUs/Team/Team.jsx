const Team = ({ team }) => {
  const { name, position } = team;
  return (
    <div className="flex flex-col justify-center items-center bg-black bg-opacity-40 text-white rounded-3xl py-5">
      <img
        className="w-44"
        src="https://i.ibb.co/J2vjmJ4/Family-Values-Avatar.png"
      />
      <h1>{name}</h1>
      <p>{position}</p>
    </div>
  );
};

export default Team;
