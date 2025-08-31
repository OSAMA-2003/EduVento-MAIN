'use client';

import { useState, useRef } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  MessageCircle, 
  Clock, 
  CheckCircle,
  Heart,
} from 'lucide-react';
import { FaWhatsapp } from "react-icons/fa";

const ContactSection = () => {
  const ref = useRef(null);
  const formRef = useRef(null);
  const infoRef = useRef(null);
  

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: '', email: '', message: '' });
      }, 3000);
    }, 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="py-20 bg-gradient-secondary-enhanced relative overflow-hidden" ref={ref}>
      {/* ✅ Enhanced Background Elements */}
      <div className="absolute inset-0">
        {/* Main gradient with mesh overlay */}
        <div className="absolute inset-0 bg-gradient-mesh opacity-90"></div>
        
        {/* Animated background shapes */}
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-primary-yellow/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-secondary-green/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/3 left-1/2 w-64 h-64 bg-logo-blue/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
        
        {/* Pattern overlay */}
        <div className="absolute inset-0 bg-pattern opacity-10"></div>
        
        {/* Floating elements */}
       </div>

      <div className="container mx-auto px-4 relative z-10">
        
        {/* ✅ Enhanced Header Section */}
        <div
          className="text-center mb-16"
          
        >
          

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-2xl">
            <span className="text-primary-yellow">ابدأ</span>{" "}
            <span className="text-white">رحلتك معنا</span>
          </h2>
          
          <div
            className="w-32 h-2 bg-gradient-to-r from-primary-yellow via-secondary-green to-logo-blue mx-auto rounded-full shadow-lg mb-6"
           
          />

          <p
            className="text-xl md:text-2xl text-gray-100 max-w-4xl mx-auto leading-relaxed drop-shadow-lg"
            
          >
            سواء كنت لسه طالب بتدور على طريقك، أو خريج محتار تبدأ منين…
            <br />
            تعالى نساعدك تلاقي الاتجاه الصح، وتبدأ أول خطوة حقيقية ناحية مستقبلك.
          </p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 max-w-7xl mx-auto">
          
          {/* ✅ Enhanced Contact Info */}
          <div
            ref={infoRef}
            className="space-y-8"
           
          >
            {/* Contact Information Cards */}
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-white/20">
              <h3 className="text-2xl font-bold text-primary-dark mb-6 flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-logo-blue to-secondary-green rounded-xl flex items-center justify-center">
                  <MessageCircle className="h-6 w-6 text-primary" />
                </div>
                معلومات التواصل
              </h3>
              
              <div className="space-y-6">
                {[
                  {
                    icon: <FaWhatsapp className="h-6 w-6" />,
                    title: 'واتساب',
                    value: '01201345760',
                    color: 'from-logo-blue to-secondary-green',
                    bgColor: 'bg-logo-blue/10'
                  },
                  {
                    icon: <Mail className="h-6 w-6" />,
                    title: 'البريد الإلكتروني',
                    value: 'support@eduvento.online',
                    color: 'from-secondary-green to-primary-yellow',
                    bgColor: 'bg-secondary-green/10'
                  },
                  {
                    icon: <MapPin className="h-6 w-6" />,
                    title: 'العنوان',
                    value: 'سوهاج، مصر',
                    color: 'from-primary-yellow to-alert-red',
                    bgColor: 'bg-primary-yellow/10'
                  }
                ].map((item, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-4 p-4 rounded-xl hover:shadow-lg transition-all duration-300 group cursor-pointer"
                    style={{ backgroundColor: `var(--${item.bgColor.replace('bg-', '').replace('/10', '')})10` }}
                    
                    
                  >
                    <div className={`w-14 h-14 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center text-primary shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      {item.icon}
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-primary-dark group-hover:text-logo-blue transition-colors duration-300">
                        {item.title}
                      </p>
                      <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                        {item.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Special Message Card */}
            <div
              className="bg-gradient-to-br from-primary-yellow/90 to-secondary-green/90 backdrop-blur-sm p-8 rounded-2xl shadow-2xl text-primary-dark relative overflow-hidden"
              
            >
              {/* Decorative elements */}
              <div className="absolute top-4 right-4 w-20 h-20 bg-white/20 rounded-full -translate-y-10 translate-x-10"></div>
              <div className="absolute bottom-4 left-4 w-16 h-16 bg-white/10 rounded-full translate-y-8 -translate-x-8"></div>
              
              <div className="relative z-10">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                    <Heart className="h-6 w-6 text-red-100" />
                  </div>
                  <h4 className="text-xl font-bold">
                    في Eduvento، مش بنجمع بياناتك وخلاص…
                  </h4>
                </div>
                
                <div className="space-y-3 text-gray-300 leading-relaxed">
                  <p>
                    إحنا فعلاً بنقرا كل رسالة، وبنرد عليك بشكل يناسب حالتك أنت.
                  </p>
                  <p>
                    اكتبلنا إنت فين دلوقتي، بتفكر في إيه، وإيه نفسك توصله...
                    وهنرجع لك برد مفيد وواضح يساعدك بشكل 
                    <span className="font-bold text-primary-yellow px-2 py-1 rounded-lg mx-1">
                          &quot;مجاني تماماً&quot;
                    </span>
                  </p>
                  <p className="font-semibold text-lg">
                    يمكن تكون الرسالة دي هي أول خطوة في أكبر تغيير في حياتك.
                  </p>
                </div>
              </div>
            </div>

            
          </div>

          {/* ✅ Enhanced Contact Form */}
          <div
            ref={formRef}
            className="relative"
              
          >
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-white/20 relative overflow-hidden">
              {/* Decorative gradient */}
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-logo-blue via-secondary-green to-primary-yellow"></div>
              
              {isSubmitted ? (
                /* Success State */
                <div
                  className="text-center py-12"
                  
                >
                  <div className="w-20 h-20 bg-secondary-green rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-secondary-green mb-4">
                    تم الإرسال بنجاح! 🎉
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    شكراً لتواصلك معنا. سنرد عليك في أقرب وقت ممكن.
                  </p>
                </div>
              ) : (
                /* Contact Form */
                <>
                  <div className="mb-8 text-center">
                    <h3 className="text-2xl font-bold text-primary-dark mb-3">
                      أرسل لنا رسالة
                    </h3>
                    <p className="text-gray-600">
                      نحن هنا لمساعدتك في بناء مستقبلك المهني
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name Field */}
                    <div
                      
                    >
                      <label htmlFor="name" className="block text-sm font-semibold text-primary-dark mb-2">
                        الاسم الكامل
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="input-primary w-full"
                        placeholder="اكتب اسمك الكامل"
                      />
                    </div>

                    {/* Email Field */}
                    <div
                      
                    >
                      <label htmlFor="email" className="block text-sm font-semibold text-primary-dark mb-2">
                        البريد الإلكتروني
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="input-primary w-full"
                        placeholder="example@email.com"
                      />
                    </div>

                    {/* Message Field */}
                    <div
                      
                    >
                      <label htmlFor="message" className="block text-sm font-semibold text-primary-dark mb-2">
                        الرسالة
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="input-primary w-full resize-none"
                        placeholder="اكتب رسالتك هنا... حدثنا عن وضعك الحالي وأهدافك"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full btn-gradient-primary relative overflow-hidden group"
                      
                    >
                      {isSubmitting ? (
                        <div className="flex items-center justify-center gap-3">
                          <div className="spinner-primary w-5 h-5"></div>
                          <span>جاري الإرسال...</span>
                        </div>
                      ) : (
                        <div className="flex items-center justify-center gap-3">
                          <span>إرسال الرسالة</span>
                          <Send className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                        </div>
                      )}
                    </button>
                  </form>

                  {/* Additional Info */}
                  <div
                    className="mt-6 pt-6 border-t border-gray-200 text-center"
                   
                  >
                    <div className="flex items-center justify-center gap-4 text-sm text-gray-600">
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4 text-logo-blue" />
                        <span>رد خلال 24 ساعة</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <CheckCircle className="h-4 w-4 text-secondary-green" />
                        <span>استشارة مجانية</span>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>

        
      </div>
    </section>
  );
};

export default ContactSection;
