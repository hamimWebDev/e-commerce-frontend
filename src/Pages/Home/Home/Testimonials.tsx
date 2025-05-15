
import { FaStar } from "react-icons/fa";
import { motion } from "framer-motion";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      text: "The quality of products on this site is exceptional. I'm particularly impressed with the fast shipping and excellent customer service. Will definitely shop here again!",
      rating: 5,
      badge: "SJ",
    },
    {
      id: 2,
      name: "Michael Chen",
      text: "Found exactly what I was looking for at a great price. The detailed product descriptions and reviews helped me make an informed decision. Very satisfied with my purchase.",
      rating: 5,
      badge: "MC",
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      text: "The website is so easy to navigate and the checkout process was smooth. My order arrived earlier than expected and was exactly as described. Highly recommend!",
      rating: 5,
      badge: "ER",
    },
    {
      id: 4,
      name: "David Thompson",
      text: "Outstanding selection of electronics. The product recommendations were spot-on and helped me find the perfect laptop for my needs. Great experience overall.",
      rating: 5,
      badge: "DT",
    },
    {
      id: 5,
      name: "Lisa Anderson",
      text: "The customer support team went above and beyond to help me with my purchase. The product quality is fantastic and the prices are very competitive.",
      rating: 5,
      badge: "LA",
    },
  ];

  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-extrabold mb-14 text-center text-gray-800 tracking-tight">
          What Our Customers Say
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              viewport={{ once: true }}
            >
              <div className="bg-white rounded-3xl shadow-xl h-full p-10 flex flex-col justify-between border border-gray-100 hover:shadow-2xl transition-all duration-300">
                <div>
                  <div className="flex items-center mb-4">
                    {Array(testimonial.rating)
                      .fill(0)
                      .map((_, j) => (
                        <FaStar key={j} className="text-yellow-400 w-5 h-5" />
                      ))}
                  </div>
                  <p className="text-gray-600 mb-8 leading-relaxed italic text-lg">
                    “{testimonial.text}”
                  </p>
                </div>
                <div className="flex items-center mt-6">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold text-lg shadow-lg mr-5 border-4 border-white">
                    {testimonial.badge}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">
                      {testimonial.name}
                    </h4>
                    <p className="text-xs text-gray-400 mt-1">
                      Verified Buyer
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
