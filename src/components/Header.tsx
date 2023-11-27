const Header = () => {
  return (
    <div className="w-full h-20 text-black flex py-12 bg-white items-center justify-between">
      <div className="text-2xl">Dashboard</div>
      <div className="flex justify-center items-center">
        <img
          width="60"
          height="60"
          src="https://img.icons8.com/bubbles/60/user.png"
          alt="user"
        />
        <p className="px-4">Shivam Pawar</p>
        <img
          width="40"
          height="40"
          src="https://img.icons8.com/stencil/40/exit.png"
          alt="exit"
        />
      </div>
    </div>
  );
};

export default Header;
