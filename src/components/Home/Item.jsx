const Item = ({ data }) => {
  const { login, avatar_url, html_url } = data;

  return (
    <div>
      <a href={html_url} target="_blank" rel="noopener noreferrer">
        <div className="flex flex-col w-full items-center bg-navbar_bg rounded-xl py-[24px] border border-gray-600 hover:bg-hover p-[20px] cursor-pointer transition duration-300 ease-in-out">
          {avatar_url && (
            <img
              src={avatar_url}
              alt={login}
              className="w-20 h-20 rounded-full mx-auto"
            />
          )}
          <h3 className="mt-4 font-mont text-center text-lg font-[500] text-white">
            {login || "Unknown User"}
          </h3>
          <a
            href={html_url}
            className="block text-center text-blue-500 mt-2 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Profile
          </a>
        </div>
      </a>
    </div>
  );
};

export default Item;
