import React from "react";
import { motion } from "framer-motion";

const Middle = () => {
  const cards = [
    {
      img: "https://api.army.mil/e2/c/images/2022/07/21/51a8e39f/original.jpg",
      text: "Life-Saving Mission\nEvery donation has the power to save up to 3 lives",
    },
    {
      img: "https://media.gettyimages.com/id/974072142/photo/an-indian-boy-holds-a-placard-during-a-rally-to-raise-awareness-of-blood-donation-on-the.jpg?s=612x612&w=0&k=20&c=sTyEHNUi_lhI5lXwmBpmWUtZMnZbiACJeNxw0YtJ9Lk=",
      text: "Join our community of heroes making a difference",
    },
    {
      img: "https://media.gettyimages.com/id/536304054/photo/an-indian-medical-assistant-arranges-packs-of-donated-blood-at-a-blood-transfusion-clinic-in.jpg?s=612x612&w=0&k=20&c=KODJKTFUFdQKblRq099KmHZCdC6_WNMEgqZqCdH4DHI=",
      text: "Helps maintain healthy heart & liver",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Heading with scroll fade-in */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: false, amount: 0.2 }}
          className="text-4xl font-bold text-gray-900 mb-4"
        >
          Making <span className="text-red-700"> a Difference</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: false, amount: 0.2 }}
          className="text-gray-600 mb-10"
        >
          Every drop counts — your donation can save lives and inspire hope.
        </motion.p>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: idx * 0.3 }}
              viewport={{ once: false, amount: 0.2 }}
              className="relative group overflow-hidden rounded-xl shadow-lg cursor-pointer"
            >
              <img
                src={card.img}
                alt={`Blood donation: ${card.text}`}
                loading="lazy"
                className="w-full h-64 object-cover transform transition duration-700 ease-in-out group-hover:scale-110 group-hover:opacity-40"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out">
                <p className="text-center text-black text-lg px-4 py-3 shadow-lg">
                  {card.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Middle;
