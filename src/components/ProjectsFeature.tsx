"use client";

import React from "react";
import { Button } from "./Button";
import { motion } from "framer-motion";

interface ProjectsFeatureProps {
  bg: string;
  title: string;
  p: string;
}

const ProjectFeature = ({ bg, title, p }: ProjectsFeatureProps) => {
  return (
    <motion.div
      transition={{ duration: 0.5, delay: 0.5 }}
      initial={{ y: -100, opacity: 0 }} // Starts off-screen to the right
      whileInView={{ y: 0, opacity: 1 }} // Animates into view when scrolled into view
      viewport={{ once: true }}
      className={`text-white ${bg} object-cover rounded-2xl bg-no-repeat h-full`}
    >
      <div className="md:bg-brown/50 bg-brown/65 rounded-2xl md:py-12 py-6 px-6 flex flex-col justify-between h-full">
        <h6 className="text-xl font-bold uppercase py-2">{title}</h6>
        <div className="flex flex-col gap-6">
          <p className="text-sm font-semibold">{p}</p>
          <div className="self-start">
            <Button
              buttonStyle="bg-yellow capitalize text-brown"
              title="Learn More"
              href="/work"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectFeature;
