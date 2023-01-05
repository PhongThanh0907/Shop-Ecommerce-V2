import React from "react";
import { SocialIcon } from "react-social-icons";

type Props = {};

const StickyLeft = (props: Props) => {
  return (
    <div className="">
      <div className="grid grid-cols-1 gap-y-5 bg-white shadow-2xl px-2 py-3">
        <SocialIcon
          className="styleIcon"
          url="https://www.facebook.com/profile.php?id=100033127445154"
        />
        <SocialIcon className="styleIcon" url="https://www.tiktok.com/" />
        <SocialIcon className="styleIcon" url="https://www.instagram.com/" />
        <SocialIcon className="styleIcon" url="https://www.youtube.com/" />
        <SocialIcon className="styleIcon" url="https://shopee.vn/" />
      </div>
    </div>
  );
};

export default StickyLeft;
