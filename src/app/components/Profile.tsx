"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Profile() {
  return (
    <div className="relative w-74 h-74 mx-auto -mt-140 mr-100 [perspective:1000px]">
      <motion.div
        className="relative w-full h-full overflow-hidden"
        style={{ transformStyle: "preserve-3d" }}
        initial={{ opacity: 0, rotateX: 180, scale: 0.9 }}
        whileInView={{ opacity: 1, rotateX: 0, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        viewport={{ once: true, amount: 0.3 }}
        animate={{
          borderRadius: [
            "60% 40% 30% 70% / 60% 30% 70% 40%",
            "30% 60% 70% 40% / 50% 60% 30% 60%",
            "50% 60% 40% 50% / 60% 40% 60% 50%",
            "60% 40% 30% 70% / 60% 30% 70% 40%",
          ],
        }}

        transition={{
          borderRadius: {
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
      >
        <Image
          src="/Assets/Profile1.jpeg"
          alt="Profile"
          fill
          className="object-cover"
          priority
        />
      </motion.div>
    </div>
  );
}
