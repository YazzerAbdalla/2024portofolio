import Link from "next/link";

import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/YazzerAbdalla" },
  { icon: <FaInstagram />, path: "https://www.instagram.com/yazzerabdo/" },
  {
    icon: <FaLinkedin />,
    path: "https://www.linkedin.com/in/yasser-abdalla-a12113161/",
  },
];

interface SocailProps {
  containerStyles: string;
  iconStyles: string;
}
const Social = ({ containerStyles, iconStyles }: SocailProps) => {
  return (
    <div className={containerStyles}>
      {socials.map(({ path, icon }, index) => {
        return (
          <Link className={iconStyles} key={index} href={path}>
            {icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
