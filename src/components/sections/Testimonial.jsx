import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: '284_Muhammad Para Agung Bayuaji',
    role: 'Local Guide',
    text: 'UDAH SUSAH NYARI NYARI IP YANG BAGUS TAPI MURAH EH BARU KETEMUNYA DI IZYSTORE, YUYURR GA EKSPEK MANA PELAYANANNYA GA MAIN MAIN PULA POKOKNYA LANGGANAN SINI DEH. BTW SORRY CAPSLOCK JEBOL SOALNYA LAGI PAKE MACBOOK',
    rating: 5,
  },
  {
    id: 2,
    name: 'Dyah Anggun',
    role: 'Pelanggan',
    text: 'masnya informatif dan jujur banget, first time beli iphone dikasih tau semua informasinya. BEST PRICE DAN PELAYANAN. sukses trss izy store!! semoga selalu amanah ya',
    rating: 5,
  },
  {
    id: 3,
    name: 'Antakuna Ghaitsa Zahira S',
    role: 'Pelanggan',
    text: 'mantapp si beli iphone disini, pelayanannya ramah, kakak yg menjelaskan juga informatif dan sabar, toppp dan rekomend👍🏻',
    rating: 5,
  }
];

export const Testimonial = () => {
  return (
    <section id="ulasan" className="py-24 relative overflow-hidden bg-pure-black">
      {/* Background elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-glow/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-semibold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent"
          >
            Apa Kata Mereka?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto"
          >
            Ribuan pelanggan telah mempercayakan kebutuhan Apple mereka kepada izystore.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-md hover:bg-white/10 transition-colors duration-300"
            >
              <Quote className="w-8 h-8 text-blue-glow mb-4 opacity-50" />
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-glow to-purple-500 rounded-full flex items-center justify-center text-white font-semibold text-lg">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-medium text-white">{testimonial.name}</h4>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
