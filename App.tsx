import React, { useState, useEffect } from 'react';
import { 
  Truck, 
  Wallet, 
  RotateCcw, 
  Flame, 
  Wind, 
  Settings, 
  ShieldCheck, 
  Move, 
  VolumeX, 
  Star,
  ChevronDown,
  ChevronUp,
  MessageCircle,
  Timer,
  CheckCircle2,
  XCircle,
  Zap,
  Phone,
  X,
  Mail,
  Globe,
  AlertCircle,
  Lock,
  Loader2
} from 'lucide-react';

import { UAE_CITIES } from './types';

// --- CONFIGURATION ---
const GOOGLE_SHEET_URL: string = "https://script.google.com/macros/s/AKfycbwNhKOUGdQKIraYpsoXig6SMYOAIez4_PqC7BM0Y_JDu5cDaRqmZvpTfWvwkkNQkap_/exec"; 
const MERCHANT_WHATSAPP = "923703730897"; // For order fulfillment
const SUPPORT_WHATSAPP = "971568472271"; // For general support in footer

// --- Utility Components ---

const Button = ({ 
  children, 
  onClick, 
  className = "", 
  primary = true,
  disabled = false,
  type = "button"
}: { 
  children?: React.ReactNode; 
  onClick?: () => void; 
  className?: string;
  primary?: boolean;
  disabled?: boolean;
  type?: "button" | "submit";
}) => {
  const baseClasses = "w-full py-4 px-6 rounded-xl font-bold text-lg transition-all active:scale-95 shadow-lg flex items-center justify-center disabled:opacity-70 disabled:scale-100 disabled:cursor-not-allowed";
  const themeClasses = primary 
    ? "bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white shadow-red-200" 
    : "bg-white border-2 border-red-600 text-red-600 hover:bg-red-50";
  
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`${baseClasses} ${className} ${!className.includes('bg-') && !className.includes('text-') ? themeClasses : ''}`}
    >
      {children}
    </button>
  );
};

const Badge = ({ icon: Icon, text }: { icon: any, text: string }) => (
  <div className="flex items-center gap-2 bg-white/80 backdrop-blur px-3 py-1.5 rounded-full border border-gray-100 shadow-sm">
    <Icon className="w-4 h-4 text-red-600" />
    <span className="text-xs font-semibold text-slate-700 whitespace-nowrap">{text}</span>
  </div>
);

const Modal = ({ isOpen, onClose, title, children }: { isOpen: boolean, onClose: () => void, title: string, children?: React.ReactNode }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-[2rem] shadow-2xl relative">
        <div className="sticky top-0 bg-white px-8 py-6 border-b border-gray-100 flex justify-between items-center z-10">
          <h3 className="text-2xl font-bold text-slate-900">{title}</h3>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <X className="w-6 h-6 text-slate-500" />
          </button>
        </div>
        <div className="p-8 text-slate-600 leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  );
};

// --- Sections ---

const Hero = () => {
  const scrollToForm = () => document.getElementById('order-form')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section className="relative bg-gradient-to-b from-red-50 to-white pt-20 pb-12 overflow-hidden">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 text-center md:text-left space-y-6">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-slate-900">
              One Heater for <span className="text-red-600">Every Season</span> – Cool, Warm & Hot Air
            </h1>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-xl">
              ThermoPro Fan Heater delivers fast warmth in winter and refreshing airflow in warmer months — compact, powerful, and easy to use.
            </p>
            
            <div className="flex flex-wrap justify-center md:justify-start gap-3">
              <Badge icon={Truck} text="Fast UAE Delivery (1-2 Days)" />
              <Badge icon={Wallet} text="Cash on Delivery" />
              <Badge icon={RotateCcw} text="30 Days Replacement Warranty" />
            </div>

            <Button onClick={scrollToForm} className="md:max-w-xs uppercase tracking-wider">
              Order Now – Pay on Delivery
            </Button>
          </div>
          
          <div className="md:w-1/2 relative">
            <div className="relative z-10 animate-float">
              <img 
                src="https://images.localbossmarketing.com/wp-content/uploads/2026/01/nova-fan-heater-216053.avif" 
                alt="ThermoPro Fan Heater" 
                className="w-full h-auto rounded-3xl shadow-2xl border-4 border-white bg-white"
              />
              <div className="absolute -top-4 -right-4 bg-red-600 text-white p-4 rounded-2xl shadow-xl flex items-center gap-2 font-bold">
                <Zap className="w-6 h-6" /> 2000W Power
              </div>
              <div className="absolute -bottom-4 -left-4 bg-blue-600 text-white p-4 rounded-2xl shadow-xl flex items-center gap-2 font-bold border-2 border-white/20">
                <ShieldCheck className="w-6 h-6" /> Built-in Safety System
              </div>
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-red-200 rounded-full blur-3xl opacity-50 -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

const ProblemSolution = () => (
  <section className="py-16 bg-white">
    <div className="container mx-auto px-4 max-w-4xl">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-slate-900">Stop Struggling with Inconsistent Comfort</h2>
          <ul className="space-y-4">
            {[
              "Winter mornings feeling freezing cold?",
              "AC heating driving up your electricity bills?",
              "Bulky heaters taking up too much floor space?",
              "Regular fans just circulating cold air?"
            ].map((text, i) => (
              <li key={i} className="flex items-start gap-3">
                <div className="bg-red-50 p-1 rounded-full mt-1">
                  <span className="text-red-500 font-bold">✕</span>
                </div>
                <p className="text-slate-600">{text}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 shadow-sm space-y-4">
          <div className="bg-red-600 w-12 h-12 rounded-xl flex items-center justify-center text-white mb-4">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h3 className="text-2xl font-bold text-slate-900">The Ultimate Solution</h3>
          <p className="text-lg text-red-600 font-semibold italic">“ThermoPro – One Device, Multiple Comfort Modes.”</p>
          <p className="text-slate-600">
            A versatile, 2-in-1 device designed for the unique UAE climate. Stay cozy in the brief winter and stay refreshed throughout the rest of the year.
          </p>
        </div>
      </div>
    </div>
  </section>
);

const Benefits = () => {
  const benefits = [
    { icon: Flame, title: "2000W Powerful Heating", desc: "Fast and efficient warmth for any room size.", color: "red" },
    { icon: Settings, title: "Adjustable Thermostat", desc: "Control the temperature exactly how you like it.", color: "red" },
    { icon: Wind, title: "Dual Heat + Cool Modes", desc: "1000W (save power) or 2000W (fast heat) + Cool fan mode.", color: "blue" },
    { icon: ShieldCheck, title: "Overheat Protection", desc: "Safety first with built-in auto shut-off system.", color: "red" },
    { icon: Move, title: "Compact & Portable", desc: "Lightweight design with integrated carry handle.", color: "red" },
    { icon: VolumeX, title: "Low Noise Operation", desc: "Quiet enough for deep sleep and focused work.", color: "red" },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-red-50/30">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <span className="text-red-600 font-bold tracking-widest uppercase text-xs mb-2 block">Premium Features</span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">Why Everyone Loves ThermoPro</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-red-400 to-red-600 mx-auto rounded-full" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((b, i) => (
            <div 
              key={i} 
              className="relative bg-white p-10 rounded-[2.5rem] shadow-xl shadow-slate-200/40 border border-slate-100 hover:border-red-200 hover:-translate-y-2 transition-all duration-300 group overflow-hidden"
            >
              <div className={`absolute top-0 right-0 w-32 h-32 ${b.color === 'blue' ? 'bg-blue-50' : 'bg-red-50'} rounded-full -mr-16 -mt-16 group-hover:scale-125 transition-transform duration-500 opacity-50`} />
              
              <div className={`relative z-10 w-16 h-16 rounded-2xl flex items-center justify-center mb-8 shadow-xl ${b.color === 'blue' ? 'bg-blue-600 shadow-blue-200' : 'bg-red-600 shadow-red-200'} transition-transform group-hover:scale-110`}>
                <b.icon className="w-8 h-8 text-white" />
              </div>
              
              <h4 className="relative z-10 text-2xl font-bold text-slate-900 mb-3 group-hover:text-red-600 transition-colors">
                {b.title}
              </h4>
              <p className="relative z-10 text-slate-600 leading-relaxed text-lg">
                {b.desc}
              </p>
              
              <div className={`absolute bottom-0 left-0 h-1.5 w-0 group-hover:w-full transition-all duration-500 ${b.color === 'blue' ? 'bg-blue-500' : 'bg-red-600'}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const VisualUsage = () => {
  const usages = [
    { 
      img: "https://images.localbossmarketing.com/wp-content/uploads/2026/01/nova-fan-heater-245981.avif", 
      title: "Bedroom", 
      desc: "Perfect for cozy winter nights" 
    },
    { 
      img: "https://images.localbossmarketing.com/wp-content/uploads/2026/01/built-in-auto-shut-off-system.-6.webp", 
      title: "Living Room", 
      desc: "Gather the family in comfort" 
    },
    { 
      img: "https://images.localbossmarketing.com/wp-content/uploads/2026/01/built-in-auto-shut-off-system.-2.webp", 
      title: "Home Office", 
      desc: "Focus better with ideal temperature" 
    },
    { 
      img: "https://images.localbossmarketing.com/wp-content/uploads/2026/01/nova-fan-heater-923579.avif", 
      title: "Cool Fan Mode", 
      desc: "Refreshing airflow for warmer days" 
    },
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">Comfort in Every Corner</h2>
          <p className="text-slate-600 text-lg">Designed to fit seamlessly into your lifestyle and home.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {usages.map((u, i) => (
            <div key={i} className="relative group overflow-hidden rounded-[2.5rem] shadow-2xl shadow-slate-200/50 aspect-[4/3] md:aspect-auto md:h-[450px]">
              <img 
                src={u.img} 
                alt={u.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/95 via-slate-900/20 to-transparent flex flex-col justify-end p-8 md:p-12 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <h4 className="text-white text-3xl font-bold mb-2">{u.title}</h4>
                <p className="text-gray-200 text-lg opacity-90 leading-relaxed">{u.desc}</p>
              </div>
              <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                 <div className="bg-white/20 backdrop-blur-md p-4 rounded-full border border-white/30">
                    <CheckCircle2 className="w-6 h-6 text-white" />
                 </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Comparison = () => {
  const comparisonData = [
    {
      competitor: "Oil Heaters",
      bad: "Takes 20+ mins to heat, very heavy to move.",
      good: "Heats faster, lightweight & portable.",
    },
    {
      competitor: "Split AC",
      bad: "High electricity bills, air feels very dry.",
      good: "Energy efficient, targeted comfort & better airflow.",
    },
    {
      competitor: "Traditional Heaters",
      bad: "Bulky design, takes up too much floor space.",
      good: "Compact, sleek design fits anywhere.",
    },
    {
      competitor: "Normal Fans",
      bad: "Useless in winter, just moves cold air.",
      good: "Dual purpose (Heat & Cool) for year-round value.",
    },
  ];

  return (
    <section className="py-24 bg-slate-900 text-white overflow-hidden">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Why ThermoPro is the <span className="text-red-500">Smart Choice</span></h2>
          <p className="text-slate-400 text-lg">Compare ThermoPro with traditional methods and see the difference.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {comparisonData.map((item, i) => (
            <div key={i} className="bg-slate-800/50 border border-slate-700 rounded-3xl overflow-hidden p-1 flex flex-col sm:flex-row shadow-2xl">
              <div className="flex-1 p-6 space-y-4">
                <h4 className="text-xl font-bold text-slate-300">Traditional {item.competitor}</h4>
                <div className="flex items-start gap-3 text-red-400 bg-red-400/10 p-4 rounded-2xl border border-red-400/20">
                  <XCircle className="w-6 h-6 shrink-0" />
                  <p className="text-sm font-medium">{item.bad}</p>
                </div>
              </div>
              
              <div className="bg-slate-700/50 w-full sm:w-px h-px sm:h-auto" />

              <div className="flex-1 p-6 space-y-4 bg-red-600/5">
                <h4 className="text-xl font-bold text-red-500">ThermoPro Advantage</h4>
                <div className="flex items-start gap-3 text-green-400 bg-green-400/10 p-4 rounded-2xl border border-green-400/20">
                  <CheckCircle2 className="w-6 h-6 shrink-0" />
                  <p className="text-sm font-medium">{item.good}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-wrap justify-center gap-4 md:gap-8">
          {["No Installation", "Plug & Play", "Ultra Lightweight", "Budget-friendly"].map((tag, i) => (
            <div key={i} className="flex items-center gap-3 bg-slate-800 px-6 py-3 rounded-full border border-slate-700 text-slate-200 font-semibold shadow-inner">
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
              {tag}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Reviews = () => {
  const reviews = [
    { name: "Ahmed K.", rating: 5, comment: "Very useful in winter and works as a fan too. Small but powerful.", date: "2 days ago" },
    { name: "Fatima S.", rating: 5, comment: "Good heating power for the price. I use it in my baby's room, it's very quiet.", date: "1 week ago" },
    { name: "Rajesh M.", rating: 4, comment: "Compact and easy to move around the apartment. Fast delivery in Dubai.", date: "3 days ago" },
    { name: "Omar J.", rating: 5, comment: "Excellent for cold mornings. The COD option made me trust this store.", date: "5 days ago" },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-3xl font-bold text-center mb-12">What UAE Buyers Are Saying</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reviews.map((r, i) => (
            <div key={i} className="bg-gray-50 p-8 rounded-2xl border border-gray-100 flex flex-col gap-4">
              <div className="flex justify-between items-center">
                <span className="font-bold text-slate-900">{r.name}</span>
                <span className="text-xs text-slate-400">{r.date}</span>
              </div>
              <div className="flex gap-1">
                {[...Array(5)].map((_, idx) => (
                  <Star key={idx} className={`w-4 h-4 ${idx < r.rating ? 'fill-red-400 text-red-400' : 'text-gray-300'}`} />
                ))}
              </div>
              <p className="text-slate-600 italic">"{r.comment}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const OrderForm = () => {
  const [qty, setQty] = useState(1);
  const [formData, setFormData] = useState({ 
    name: '', 
    phone: '+971 ', 
    city: UAE_CITIES.DUBAI, 
    address: '' 
  });
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const price = 199;
  const originalPrice = 266;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const cleanPhone = formData.phone.replace('+971', '').trim();
    if (!cleanPhone || cleanPhone.length < 7) {
      alert("Please enter a valid phone number.");
      return;
    }

    setSubmitting(true);

    const orderData = {
      ...formData,
      qty,
      total: qty * price,
      product: "ThermoPro Fan Heater 2000W"
    };

    try {
      // 1. Send to Google Sheets (Optional but recommended for records)
      if (GOOGLE_SHEET_URL) {
        await fetch(GOOGLE_SHEET_URL, {
          method: 'POST',
          mode: 'no-cors', 
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(orderData)
        });
      }

      // 2. Prepare WhatsApp message
      const message = `*NEW ORDER FROM FUNNEL*%0A%0A` +
        `*Product:* ${orderData.product}%0A` +
        `*Name:* ${orderData.name}%0A` +
        `*Phone:* ${orderData.phone}%0A` +
        `*City:* ${orderData.city}%0A` +
        `*Address:* ${orderData.address}%0A` +
        `*Quantity:* ${orderData.qty}%0A` +
        `*Total:* AED ${orderData.total}%0A%0A` +
        `Please confirm my delivery!`;

      // 3. Success UI
      setSuccess(true);
      setSubmitting(false);

      // 4. Redirect to WhatsApp (Merchant side for order notification)
      window.open(`https://wa.me/${MERCHANT_WHATSAPP}?text=${message}`, '_blank');
      
    } catch (error) {
      console.error("Submission error:", error);
      alert("Something went wrong. Please try again or contact us via WhatsApp.");
      setSubmitting(false);
    }
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    if (!value.startsWith('+971 ')) {
      value = '+971 ' + value.replace('+971', '').trim();
    }
    setFormData({...formData, phone: value});
  };

  if (success) {
    return (
      <section id="order-form" className="py-20 bg-red-50">
        <div className="container mx-auto px-4 max-w-xl text-center space-y-6">
          <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center text-white mx-auto shadow-xl">
            <CheckCircle2 className="w-12 h-12" />
          </div>
          <h2 className="text-3xl font-bold">Thank You!</h2>
          <p className="text-lg text-slate-600">Your order has been recorded. We have redirected you to WhatsApp to confirm your delivery details instantly.</p>
          <div className="bg-white p-6 rounded-2xl border border-green-100 shadow-sm">
            <p className="text-sm text-slate-500 font-bold mb-2">Order Summary for {formData.name}</p>
            <p className="text-sm text-slate-500">Location: {formData.city}</p>
            <p className="text-sm text-slate-500">Total Amount: AED {qty * price}</p>
          </div>
          <Button 
            onClick={() => window.open(`https://wa.me/${SUPPORT_WHATSAPP}`, '_blank')}
            className="bg-green-600 hover:bg-green-700 shadow-green-200 border-none"
          >
            <MessageCircle className="w-5 h-5 mr-2" /> Chat for Support
          </Button>
        </div>
      </section>
    );
  }

  return (
    <section id="order-form" className="py-20 bg-red-50">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="bg-red-600 text-white p-8 rounded-3xl shadow-2xl shadow-red-200 transform md:-rotate-2 border-4 border-white">
              <h3 className="text-2xl font-bold mb-2 text-center md:text-left">Limited-Time UAE Winter Offer</h3>
              <div className="flex items-baseline justify-center md:justify-start gap-4 mb-4">
                <span className="text-5xl font-black">AED {price}</span>
                <span className="text-xl line-through opacity-70">AED {originalPrice}</span>
              </div>
              <div className="bg-white/20 p-3 rounded-xl flex items-center justify-center md:justify-start gap-2">
                <Timer className="w-5 h-5 animate-pulse" />
                <span className="font-bold text-sm">Hurry! Offer ends very soon</span>
              </div>
            </div>

            <ul className="grid grid-cols-1 gap-4">
              {[
                { icon: Truck, text: "Free UAE Shipping" },
                { icon: Wallet, text: "Cash on Delivery" },
                { icon: RotateCcw, text: "30 Days Replacement Warranty" }
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-4 bg-white p-5 rounded-2xl border border-red-100 shadow-sm">
                  <div className="bg-red-50 p-3 rounded-full">
                    <item.icon className="w-6 h-6 text-red-600" />
                  </div>
                  <span className="font-bold text-slate-700 text-lg">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-2xl border border-gray-100">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="text-center mb-6">
                <h3 className="text-3xl font-extrabold text-slate-900 mb-1">Place Your Order</h3>
                <p className="text-slate-500 text-sm font-medium italic">UAE delivery in 24-48 hours</p>
              </div>
              
              <div className="space-y-2">
                <label className="block text-sm font-bold text-slate-700">Full Name</label>
                <input 
                  required
                  type="text" 
                  placeholder="Enter your full name" 
                  className="w-full px-5 py-4 rounded-xl border border-gray-200 bg-white text-slate-900 focus:border-red-600 focus:ring-4 focus:ring-red-50 outline-none transition-all placeholder:text-gray-400 shadow-sm"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-bold text-slate-700">Phone Number (UAE)</label>
                <div className="relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-red-600">
                    <Phone className="w-5 h-5" />
                  </div>
                  <input 
                    required
                    type="tel" 
                    placeholder="5X XXX XXXX" 
                    className="w-full pl-12 pr-5 py-4 rounded-xl border border-gray-200 bg-white text-slate-900 focus:border-red-600 focus:ring-4 focus:ring-red-50 outline-none transition-all font-medium placeholder:text-gray-400 shadow-sm"
                    value={formData.phone}
                    onChange={handlePhoneChange}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-sm font-bold text-slate-700">City / Area</label>
                  <select 
                    className="w-full px-5 py-4 rounded-xl border border-gray-200 bg-white text-slate-900 focus:border-red-600 focus:ring-4 focus:ring-red-50 outline-none transition-all font-medium cursor-pointer shadow-sm appearance-none"
                    value={formData.city}
                    onChange={(e) => setFormData({...formData, city: e.target.value as UAE_CITIES})}
                  >
                    {Object.values(UAE_CITIES).map(city => (
                      <option key={city} value={city}>{city}</option>
                    ))}
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-bold text-slate-700">Quantity</label>
                  <div className="flex items-center border border-gray-200 rounded-xl overflow-hidden h-[58px] bg-white shadow-sm">
                    <button type="button" onClick={() => setQty(Math.max(1, qty-1))} className="flex-1 h-full bg-white hover:bg-gray-50 transition-colors text-xl font-black text-red-600 border-r border-gray-100">-</button>
                    <span className="flex-1 text-center font-bold text-lg text-slate-900">{qty}</span>
                    <button type="button" onClick={() => setQty(qty+1)} className="flex-1 h-full bg-white hover:bg-gray-50 transition-colors text-xl font-black text-red-600 border-l border-gray-100">+</button>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-bold text-slate-700">Delivery Address</label>
                <textarea 
                  required
                  rows={2}
                  placeholder="Street name, Villa/Apartment number, Landmark..." 
                  className="w-full px-5 py-4 rounded-xl border border-gray-200 bg-white text-slate-900 focus:border-red-600 focus:ring-4 focus:ring-red-50 outline-none transition-all resize-none placeholder:text-gray-400 shadow-sm"
                  value={formData.address}
                  onChange={(e) => setFormData({...formData, address: e.target.value})}
                ></textarea>
              </div>

              <div className="pt-4">
                <Button 
                  type="submit"
                  disabled={submitting}
                  className="py-6 text-xl uppercase tracking-widest bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 shadow-xl shadow-red-200 border-none scale-100 hover:scale-[1.02]" 
                  primary
                >
                  {submitting ? (
                    <>
                      <Loader2 className="w-6 h-6 mr-2 animate-spin" />
                      Connecting...
                    </>
                  ) : `Complete Order - AED ${qty * price}`}
                </Button>
                <div className="flex items-center justify-center gap-2 mt-6">
                  <ShieldCheck className="w-5 h-5 text-green-500" />
                  <span className="text-sm font-bold text-slate-600 uppercase tracking-tighter">🔒 Pay Cash on Delivery</span>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Faq = () => {
  const faqs = [
    { q: "Is this safe to use at home?", a: "Yes, it features built-in overheat protection and an automatic shut-off system if it tips over." },
    { q: "Can I use it as a fan in summer?", a: "Absolutely! The ThermoPro Fan Heater has a dedicated 'Cool Air' mode for year-round utility." },
    { q: "Does it make noise while sleeping?", a: "It is designed for low-noise operation, making it ideal for bedrooms and home offices." },
    { q: "How long does delivery take?", a: "We deliver within 1-2 working days across the UAE (Dubai, Abu Dhabi, Sharjah, etc.)." },
    { q: "Is Cash on Delivery available?", a: "Yes, COD is available for all cities in the UAE. No advance payment required!" },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((f, i) => (
            <div key={i} className="border border-gray-100 rounded-2xl overflow-hidden shadow-sm">
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full p-6 text-left flex justify-between items-center bg-gray-50 hover:bg-gray-100 transition-colors"
              >
                <span className="font-bold text-slate-900">{f.q}</span>
                {openIndex === i ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
              </button>
              {openIndex === i && (
                <div className="p-6 bg-white text-slate-600 leading-relaxed border-t border-gray-100">
                  {f.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = ({ 
  onOpenShipping, 
  onOpenRefund,
  onOpenPrivacy
}: { 
  onOpenShipping: () => void;
  onOpenRefund: () => void;
  onOpenPrivacy: () => void;
}) => (
  <footer className="bg-slate-900 text-white py-16 border-t border-slate-800">
    <div className="container mx-auto px-4 max-w-6xl">
      <div className="grid md:grid-cols-3 gap-12 text-center md:text-left">
        <div className="space-y-4">
          <h3 className="text-2xl font-black italic tracking-tighter">THERMO<span className="text-red-600">PRO</span></h3>
          <p className="text-slate-400">One compact heater. Multiple comfort modes. Everyday value for UAE homes.</p>
        </div>
        <div className="space-y-4">
          <h4 className="font-bold uppercase tracking-wider text-sm text-slate-200">Policies & Support</h4>
          <ul className="text-slate-400 space-y-3 text-sm">
            <li className="flex flex-col items-center md:items-start gap-2">
              <button 
                onClick={onOpenShipping}
                className="text-red-500 font-bold hover:text-red-400 underline underline-offset-4 decoration-red-500/30 transition-colors text-left"
              >
                Full Shipping Policy
              </button>
              <button 
                onClick={onOpenRefund}
                className="text-red-500 font-bold hover:text-red-400 underline underline-offset-4 decoration-red-500/30 transition-colors text-left"
              >
                Refund & Replacement Policy
              </button>
              <button 
                onClick={onOpenPrivacy}
                className="text-red-500 font-bold hover:text-red-400 underline underline-offset-4 decoration-red-500/30 transition-colors text-left"
              >
                Privacy Policy
              </button>
            </li>
          </ul>
        </div>
        <div className="space-y-4">
          <h4 className="font-bold uppercase tracking-wider text-sm text-slate-200">Company</h4>
          <p className="text-slate-400 text-sm">Authorized partner store specializing in premium home comfort solutions across UAE.</p>
          <div className="flex justify-center md:justify-start">
            <a href={`https://wa.me/${SUPPORT_WHATSAPP}`} target="_blank" rel="noopener noreferrer" className="hover:scale-105 transition-transform active:scale-95">
              <Badge icon={MessageCircle} text="WhatsApp Support" />
            </a>
          </div>
        </div>
      </div>
      <div className="mt-16 pt-8 border-t border-slate-800 text-center text-slate-500 text-xs">
        &copy; {new Date().getFullYear()} ThermoPro UAE Official Store. All rights reserved.
      </div>
    </div>
  </footer>
);

const StickyCTA = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsVisible(scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 bg-white/90 backdrop-blur-md border-t border-gray-200 animate-in slide-in-from-bottom flex items-center justify-center">
      <div className="max-w-xl w-full flex items-center gap-4">
        <div className="hidden sm:block text-center pr-4 border-r border-gray-200">
           <p className="text-xs text-slate-400 line-through">AED 266</p>
           <p className="text-lg font-bold text-red-600">AED 199</p>
        </div>
        <Button 
          onClick={() => document.getElementById('order-form')?.scrollIntoView({ behavior: 'smooth' })}
          className="py-3 text-base shadow-red-500/20 bg-red-600 hover:bg-red-700"
        >
          🔥 ORDER NOW (AED 199)
        </Button>
      </div>
    </div>
  );
};

const WhatsAppButton = () => (
  <a 
    href={`https://wa.me/${SUPPORT_WHATSAPP}`} 
    target="_blank" 
    rel="noopener noreferrer"
    className="fixed bottom-24 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition-all hover:scale-110 active:scale-90"
  >
    <MessageCircle className="w-8 h-8" />
  </a>
);

// --- Main App ---

export default function App() {
  const [isShippingOpen, setIsShippingOpen] = useState(false);
  const [isRefundOpen, setIsRefundOpen] = useState(false);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Hero />
      <ProblemSolution />
      <Benefits />
      <VisualUsage />
      <Comparison />
      <Reviews />
      <OrderForm />
      <Faq />
      
      <section className="py-20 bg-red-600 text-white text-center">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 leading-tight uppercase tracking-tight">One compact heater. Multiple comfort modes. Everyday value.</h2>
          <div className="flex justify-center">
            <Button 
              className="bg-white text-red-600 hover:bg-slate-900 hover:text-white max-w-sm border-none shadow-2xl py-6 text-xl scale-100 hover:scale-105"
              onClick={() => document.getElementById('order-form')?.scrollIntoView({ behavior: 'smooth' })}
            >
              🔥 Order ThermoPro Fan Heater Now
            </Button>
          </div>
        </div>
      </section>

      <Footer 
        onOpenShipping={() => setIsShippingOpen(true)} 
        onOpenRefund={() => setIsRefundOpen(true)}
        onOpenPrivacy={() => setIsPrivacyOpen(true)}
      />
      
      <StickyCTA />
      <WhatsAppButton />

      {/* Shipping Policy Modal */}
      <Modal 
        isOpen={isShippingOpen} 
        onClose={() => setIsShippingOpen(false)} 
        title="Shipping Policy – THERMOPRO"
      >
        <div className="space-y-6">
          <p className="font-semibold text-slate-900">THERMOPRO (MyZambeel, authorized partner store) is committed to delivering your orders quickly and safely.</p>
          
          <div className="space-y-3">
            <h4 className="font-bold text-slate-800 flex items-center gap-2">
              <span className="w-6 h-6 bg-red-50 text-red-600 flex items-center justify-center rounded-full text-xs">1</span>
              Delivery Areas
            </h4>
            <p className="pl-8">We currently deliver across: <strong>United Arab Emirates (UAE)</strong></p>
          </div>

          <div className="space-y-3">
            <h4 className="font-bold text-slate-800 flex items-center gap-2">
              <span className="w-6 h-6 bg-red-50 text-red-600 flex items-center justify-center rounded-full text-xs">2</span>
              Delivery Time
            </h4>
            <ul className="pl-8 list-disc space-y-1">
              <li><strong>Standard Delivery:</strong> 2–5 working days</li>
              <li><strong>Remote Areas:</strong> 3–7 working days</li>
            </ul>
            <p className="pl-8 text-sm italic">Delivery timelines may vary due to weather, public holidays, or courier delays.</p>
          </div>

          <div className="space-y-3">
            <h4 className="font-bold text-slate-800 flex items-center gap-2">
              <span className="w-6 h-6 bg-red-50 text-red-600 flex items-center justify-center rounded-full text-xs">3</span>
              Shipping Charges
            </h4>
            <p className="pl-8">Shipping charges (if any) are displayed at checkout. Some products may qualify for <strong>Free Delivery</strong> (as mentioned on the product page).</p>
          </div>

          <div className="space-y-3">
            <h4 className="font-bold text-slate-800 flex items-center gap-2">
              <span className="w-6 h-6 bg-red-50 text-red-600 flex items-center justify-center rounded-full text-xs">4</span>
              Order Processing
            </h4>
            <p className="pl-8">Orders are processed within 24–48 hours after confirmation.</p>
          </div>

          <div className="space-y-3">
            <h4 className="font-bold text-slate-800 flex items-center gap-2">
              <span className="w-6 h-6 bg-red-50 text-red-600 flex items-center justify-center rounded-full text-xs">5</span>
              Cash on Delivery (COD)
            </h4>
            <p className="pl-8">We offer Cash on Delivery service across UAE for customer convenience.</p>
          </div>

          <div className="space-y-3">
            <h4 className="font-bold text-slate-800 flex items-center gap-2">
              <span className="w-6 h-6 bg-red-50 text-red-600 flex items-center justify-center rounded-full text-xs">6</span>
              Delivery Attempts
            </h4>
            <p className="pl-8">If the customer is unavailable: The courier will attempt re-delivery. After multiple failed attempts, the order may be cancelled.</p>
          </div>

          <div className="space-y-3">
            <h4 className="font-bold text-slate-800 flex items-center gap-2">
              <span className="w-6 h-6 bg-red-50 text-red-600 flex items-center justify-center rounded-full text-xs">7</span>
              Incorrect Address
            </h4>
            <p className="pl-8">THERMOPRO is not responsible for delays or failed deliveries due to incorrect address details provided by the customer.</p>
          </div>
        </div>
      </Modal>

      {/* Refund & Replacement Policy Modal */}
      <Modal 
        isOpen={isRefundOpen} 
        onClose={() => setIsRefundOpen(false)} 
        title="Refund & Replacement Policy"
      >
        <div className="space-y-6">
          <p className="font-semibold text-slate-900">At THERMOPRO, customer satisfaction is our priority. We offer refunds and replacements under the following conditions:</p>
          
          <div className="space-y-3">
            <h4 className="font-bold text-slate-800 flex items-center gap-2">
              <span className="w-6 h-6 bg-red-50 text-red-600 flex items-center justify-center rounded-full text-xs">1</span>
              Eligibility for Replacement
            </h4>
            <div className="pl-8">
              <p className="mb-2 text-slate-700">You are eligible for a replacement if:</p>
              <ul className="list-disc space-y-1">
                <li>The product is damaged upon delivery</li>
                <li>The wrong item was delivered</li>
                <li>The product has a manufacturing defect</li>
              </ul>
              <div className="mt-3 p-3 bg-red-50 rounded-xl border border-red-100 flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                <p className="text-sm font-bold text-red-800">You must report the issue within 48 hours of receiving the product with clear photos or videos.</p>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="font-bold text-slate-800 flex items-center gap-2">
              <span className="w-6 h-6 bg-red-50 text-red-600 flex items-center justify-center rounded-full text-xs">2</span>
              Replacement Process
            </h4>
            <div className="pl-8">
              <p className="text-slate-700 font-medium">Once your claim is approved:</p>
              <ul className="list-disc space-y-1">
                <li>We will arrange a replacement at no extra cost</li>
                <li>The damaged/incorrect product may be collected by our courier partner</li>
              </ul>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="font-bold text-slate-800 flex items-center gap-2">
              <span className="w-6 h-6 bg-red-50 text-red-600 flex items-center justify-center rounded-full text-xs">3</span>
              Refund Policy
            </h4>
            <div className="pl-8">
              <p className="text-slate-700 font-medium">Refunds are only issued if:</p>
              <ul className="list-disc space-y-1">
                <li>Replacement is not possible</li>
                <li>The product is out of stock</li>
              </ul>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="font-bold text-slate-800 flex items-center gap-2">
              <span className="w-6 h-6 bg-red-50 text-red-600 flex items-center justify-center rounded-full text-xs">4</span>
              Non-Refundable Items
            </h4>
            <div className="pl-8">
              <p className="text-slate-700 font-medium">Refunds/replacements are not applicable for:</p>
              <ul className="list-disc space-y-1">
                <li>Damage caused by misuse or mishandling</li>
                <li>Normal wear and tear</li>
                <li>Change of mind after use</li>
              </ul>
            </div>
          </div>

          <div className="pt-6 border-t border-gray-100">
            <p className="font-bold text-slate-900 mb-4">To request a refund or replacement, contact:</p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-slate-700 group">
                <div className="w-10 h-10 bg-slate-50 rounded-full flex items-center justify-center group-hover:bg-red-50 transition-colors">
                  <Mail className="w-5 h-5 text-red-600" />
                </div>
                <a href="mailto:zambeelsupport@myzambeel.com" className="font-semibold hover:text-red-600 transition-colors">zambeelsupport@myzambeel.com</a>
              </div>
              <div className="flex items-center gap-3 text-slate-700 group">
                <div className="w-10 h-10 bg-slate-50 rounded-full flex items-center justify-center group-hover:bg-red-50 transition-colors">
                  <Phone className="w-5 h-5 text-red-600" />
                </div>
                <a href={`tel:+${SUPPORT_WHATSAPP}`} className="font-semibold hover:text-red-600 transition-colors">+971 56 847 2271</a>
              </div>
              <div className="flex items-center gap-3 text-slate-700 group">
                <div className="w-10 h-10 bg-slate-50 rounded-full flex items-center justify-center group-hover:bg-red-50 transition-colors">
                  <Globe className="w-5 h-5 text-red-600" />
                </div>
                <a href="https://www.myzambeel.com/" target="_blank" rel="noopener noreferrer" className="font-semibold hover:text-red-600 transition-colors">www.myzambeel.com</a>
              </div>
            </div>
          </div>
        </div>
      </Modal>

      {/* Privacy Policy Modal */}
      <Modal 
        isOpen={isPrivacyOpen} 
        onClose={() => setIsPrivacyOpen(false)} 
        title="Privacy Policy – THERMOPRO"
      >
        <div className="space-y-6">
          <p className="font-semibold text-slate-900">At THERMOPRO, we respect your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard your data when you visit or make a purchase from our website.</p>
          
          <div className="space-y-3">
            <h4 className="font-bold text-slate-800 flex items-center gap-2">
              <span className="w-6 h-6 bg-red-50 text-red-600 flex items-center justify-center rounded-full text-xs">1</span>
              Information We Collect
            </h4>
            <div className="pl-8">
              <p className="mb-2 text-slate-700">When you place an order or interact with our website, we may collect:</p>
              <ul className="list-disc space-y-1">
                <li>Full name</li>
                <li>Phone number</li>
                <li>Email address</li>
                <li>Shipping address</li>
                <li>Billing details</li>
                <li>Device & browser information</li>
                <li>IP address</li>
              </ul>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="font-bold text-slate-800 flex items-center gap-2">
              <span className="w-6 h-6 bg-red-50 text-red-600 flex items-center justify-center rounded-full text-xs">2</span>
              How We Use Your Information
            </h4>
            <div className="pl-8">
              <p className="mb-2 text-slate-700">We use your information to:</p>
              <ul className="list-disc space-y-1">
                <li>Process and deliver your orders</li>
                <li>Contact you regarding your order status</li>
                <li>Provide customer support</li>
                <li>Improve our website and services</li>
                <li>Send order confirmations and important updates</li>
              </ul>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="font-bold text-slate-800 flex items-center gap-2">
              <span className="w-6 h-6 bg-red-50 text-red-600 flex items-center justify-center rounded-full text-xs">3</span>
              Data Protection
            </h4>
            <p className="pl-8">We implement strict security measures to protect your personal data against unauthorized access, misuse, or disclosure. Your information is only shared with trusted partners involved in order fulfillment and delivery.</p>
          </div>

          <div className="space-y-3">
            <h4 className="font-bold text-slate-800 flex items-center gap-2">
              <span className="w-6 h-6 bg-red-50 text-red-600 flex items-center justify-center rounded-full text-xs">4</span>
              Sharing of Information
            </h4>
            <div className="pl-8">
              <p className="mb-2 text-slate-700">We do not sell or rent your personal data. Information may only be shared with:</p>
              <ul className="list-disc space-y-1">
                <li>Delivery partners</li>
                <li>Payment processors</li>
                <li>Legal authorities (if required by law)</li>
              </ul>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="font-bold text-slate-800 flex items-center gap-2">
              <span className="w-6 h-6 bg-red-50 text-red-600 flex items-center justify-center rounded-full text-xs">5</span>
              Cookies
            </h4>
            <p className="pl-8">Our website uses cookies to enhance your browsing experience, analyze traffic, and personalize content.</p>
          </div>

          <div className="space-y-3">
            <h4 className="font-bold text-slate-800 flex items-center gap-2">
              <span className="w-6 h-6 bg-red-50 text-red-600 flex items-center justify-center rounded-full text-xs">6</span>
              Your Rights
            </h4>
            <div className="pl-8">
              <p className="mb-2 text-slate-700">You have the right to:</p>
              <ul className="list-disc space-y-1">
                <li>Request access to your data</li>
                <li>Request correction or deletion of your data</li>
                <li>Withdraw consent at any time</li>
              </ul>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="font-bold text-slate-800 flex items-center gap-2">
              <span className="w-6 h-6 bg-red-50 text-red-600 flex items-center justify-center rounded-full text-xs">7</span>
              Policy Updates
            </h4>
            <p className="pl-8">THERMOPRO reserves the right to update this Privacy Policy at any time. Changes will be posted on this page.</p>
          </div>

          <div className="pt-6 border-t border-gray-100 flex flex-col items-center gap-4">
            <div className="bg-slate-50 p-4 rounded-2xl border border-gray-100 flex items-center gap-3 w-full">
               <Lock className="w-6 h-6 text-green-600" />
               <div>
                  <p className="text-xs text-slate-400 font-bold uppercase tracking-tight">Data Security</p>
                  <p className="text-sm font-semibold text-slate-700">Your information is safe & encrypted</p>
               </div>
            </div>
            <p className="text-sm text-slate-500">If you have any questions, contact us at:</p>
            <a href="mailto:support@localbossmarketing.com" className="flex items-center gap-2 text-red-600 font-bold hover:underline decoration-red-200">
               <Mail className="w-4 h-4" />
               support@localbossmarketing.com
            </a>
          </div>
        </div>
      </Modal>
    </div>
  );
}
