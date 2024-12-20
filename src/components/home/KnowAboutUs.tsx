"use client";

import { Button } from "@/components/Button";
import Title from "@/components/Title";
import { motion } from "framer-motion"; // Ensure this import is correct
import Image from "next/image";
import React from "react";

const KnowAboutUs = () => {
  return (
    <div className="md:py-12 py-6 responsive">
      <div className="section grid md:grid-cols-2 gap-6">
        <div className="w-full flex items-center text-brown">
          <div className="flex flex-col gap-6">
            <Title title="Know about us" />
            <p>
              We are dedicated to preserving Kenya's private and community lands
              that are vital to wildlife survival and the well-being of local
              communities.
            </p>
            <div className="flex flex-col gap-2">
              <h6 className="capitalize font-black text-lg">Our Mission</h6>
              <p>
                To support conservation efforts and enhance community
                livelihoods through tailored economic, education, and health
                programs. Backed by Ankaa Africa Safaris Ltd, we ensure that
                100% of donations go directly to our projects. Join us in our
                vision of creating a future where both nature and communities
                thrive together.
              </p>
            </div>
            <div className="self-start">
              <Button
                buttonStyle="bg-yellow capitalize text-brown"
                title="Learn More"
                href="/about"
              />
            </div>
          </div>
        </div>
        <motion.div
          transition={{ duration: 0.5, delay: 0.5 }}
          initial={{ x: 10, opacity: 0 }} // Starts off-screen to the right
          whileInView={{ x: 0, opacity: 1 }} // Animates into view when scrolled into view
          viewport={{ once: true }} // Ensures the animation triggers only once
          className="md:h-full h-[200px] w-auto md:pl-10"
        >
          <Image
            className="h-full object-cover object-bottom rounded-2xl"
            src="/landscape.png"
            alt="A beautiful landscape with lush greenery, supporting wildlife conservation."
            width={500}
            height={500}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default KnowAboutUs;
