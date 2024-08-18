"use client";

import { client } from "@/lib/sanityClient";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface heroImagesTypes {
  heroImage: {
    asset: { url: string };
  };
}

const Photo = () => {
  const [heroImages, setHeroImages] = useState<heroImagesTypes>({
    heroImage: { asset: { url: "" } },
  });

  useEffect(() => {
    // Define your GROQ query
    const query = `*[_type == "heroImage"]{heroImage{asset->{url}}}`;

    // Fetch data from Sanity
    client
      .fetch(query)
      .then((data) => {
        setHeroImages(data[0]);
      })
      .catch(console.error);
  }, []);

  return (
    <div className="w-full h-full relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2, duration: 0.4, ease: "easeIn" },
        }}
      >
        {/* image */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeInOut" },
          }}
          className="w-[298px] h-[298px] xl:w-[498px] xl:h-[498px] mix-blend-lighten absolute"
        >
          <Image
            src={heroImages.heroImage.asset.url}
            priority
            quality={100}
            layout="fill"
            alt="heroImage"
            className="object-contain brightness-90"
          />
        </motion.div>

        {/* circle */}
        <motion.svg
          className={"w-[300px] xl:w-[506px] h-[300px] xl:h-[506px]"}
          fill={"transparent"}
          viewBox={"0 0 506 506"}
          xmlns={"http://www.w3.org/2000/svg"}
        >
          <motion.circle
            cx="253"
            cy="253"
            r="250"
            stroke={"#00ff99"}
            strokeWidth={"4"}
            strokeLinecap={"round"}
            strokeLinejoin={"round"}
            initial={{ strokeDasharray: " 24 10 0 0" }}
            animate={{
              strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
              rotate: [120, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </motion.svg>
      </motion.div>
    </div>
  );
};

export default Photo;
