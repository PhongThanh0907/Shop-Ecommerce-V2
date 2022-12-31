const MenuIcon = ({ openMenuMobile }: { openMenuMobile?: boolean }) => {
  return (
    <div className="bg-backgroundColor h-10 w-11 rounded-md relative flex flex-col justify-center items-center">
      <div
        className={`${
          openMenuMobile ? "opacity-0 w-0 h-0" : "opacity-100 w-6 h-[3px]"
        }  bg-white  duration-300`}
      />
      <div
        className={`${
          openMenuMobile ? "absolute rotate-45 top-[14px]" : ""
        } h-[3px] w-6 my-[5px] bg-white opacity-100 duration-300`}
      />
      <div
        className={`${
          openMenuMobile ? " -rotate-45" : ""
        } h-[3px] w-6 bg-white opacity-100 duration-300`}
      />
    </div>
  );
};

export default MenuIcon;
