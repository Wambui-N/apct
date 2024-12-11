"use client";

import React from "react";
import { Button } from "./Button";
import { motion } from "framer-motion";

interface ProjectsFeatureProps {
  style: string;
  title: string;
  p: string;
}

const Involvement = ({ style, title, p }: ProjectsFeatureProps) => {
  return (
    <motion.div
      transition={{ duration: 0.5, delay: 0.5 }}
      initial={{ y: -50, opacity: 0 }} // Starts off-screen to the right
      whileInView={{ y: 0, opacity: 1 }} // Animates into view when scrolled into view
      viewport={{ once: true }}
      className={`text-brown ${style} object-cover rounded-2xl bg-no-repeat h-full`}
    >
      <div className="rounded-2xl py-12 px-6 flex flex-col gap-2 justify-between h-full">
        <h6 className="text-xl font-bold uppercase">{title}</h6>
        <div className="flex flex-col gap-6 font-semibold">
          <p className="text-sm">{p}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default Involvement;
