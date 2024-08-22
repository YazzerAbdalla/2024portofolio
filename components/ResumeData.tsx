import { client } from "@/lib/sanityClient";
import { Education, Experience, ResumeState } from "@/types/resumeTypes";
import React, { useEffect, useState } from "react";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNodeJs,
  FaFigma,
} from "react-icons/fa";

import { SiMongodb, SiTailwindcss, SiNextdotjs } from "react-icons/si";

const useResumeData = () => {
  const [resumeData, setResumeData] = useState<ResumeState>({
    title: "",
    description: "",
    info: [{ fieldName: "", fieldValue: "" }],
  });
  const [expData, setExpData] = useState<Experience>();
  const [eduData, setEduData] = useState<Education>();

  useEffect(() => {
    // Fetch resume data
    const fetchResumeData = async () => {
      try {
        const resumeQuery = `*[_type == "resume"]`;
        const resumeResult = await client.fetch(resumeQuery);
        setResumeData(resumeResult[0]);
      } catch (error) {
        console.error("Failed to fetch resume data:", error);
      }
    };

    // Fetch experience data
    const fetchExpData = async () => {
      try {
        const expQuery = `*[_type == "experience"]`;
        const expResult = await client.fetch(expQuery);
        setExpData(expResult[0]);
      } catch (error) {
        console.error("Failed to fetch experience data:", error);
      }
    };

    // Fetch education data
    const fetchEduData = async () => {
      try {
        const eduQuery = `*[_type == "education"]`;
        const eduResult = await client.fetch(eduQuery);
        setEduData(eduResult[0]);
      } catch (error) {
        console.error("Failed to fetch education data:", error);
      }
    };

    // Call the fetch functions
    fetchResumeData();
    fetchExpData();
    fetchEduData();
  }, []);

  const skills = {
    title: "Skills",
    description: "Showcasing the technical skills that power my projects.",
    skillList: [
      {
        icon: <FaHtml5 />,
        name: "html 5",
      },
      {
        icon: <FaCss3 />,
        name: "css 3",
      },
      {
        icon: <FaJs />,
        name: "javascript",
      },
      {
        icon: <FaNodeJs />,
        name: "nodejs",
      },
      {
        icon: <FaReact />,
        name: "react.js",
      },
      {
        icon: <SiMongodb />,
        name: "mongodb",
      },
      {
        icon: <SiNextdotjs />,
        name: "next.js",
      },
      {
        icon: <SiTailwindcss />,
        name: "tailwind.css",
      },
      {
        icon: <FaFigma />,
        name: "figma",
      },
    ],
  };

  return { resumeData, expData, eduData, skills };
};

export default useResumeData;
