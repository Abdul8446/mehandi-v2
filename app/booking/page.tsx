'use client'

import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Button from '../../components/ui/Button';
import { Calendar, Clock, MapPin, Users } from 'lucide-react';

interface TimeSlot {
  id: string;
  time: string;
  available: boolean;
}

const Booking = () => {
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string>('');
  const [serviceType, setServiceType] = useState<string>('bridal');
  const [numPeople, setNumPeople] = useState<number>(1);
  
  // Mock time slots
  const timeSlots: TimeSlot[] = [
    { id: '1', time: '9:00 AM', available: true },
    { id: '2', time: '10:00 AM', available: true },
    { id: '3', time: '11:00 AM', available: false },
    { id: '4', time: '12:00 PM', available: true },
    { id: '5', time: '1:00 PM', available: true },
    { id: '6', time: '2:00 PM', available: false },
    { id: '7', time: '3:00 PM', available: true },
    { id: '8', time: '4:00 PM', available: true },
    { id: '9', time: '5:00 PM', available: true }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Your booking request has been submitted. We will contact you shortly to confirm the details.');
  };
  
  return (
    <>
      <Head>
        <title>Book a Mehandi Artist | Professional Henna Services</title>
        <meta name="description" content="Book our professional mehandi artists for weddings, festivals and special occasions. Available for bridal, party and private events." />
      </Head>
      
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow pt-20">
          {/* Hero Section */}
          <div className="bg-gradient-to-r from-amber-900 to-amber-700 text-white py-16">
            <div className="container mx-auto px-4 text-center">
              <h1 className="text-3xl md:text-4xl font-serif font-bold mb-4">Book a Mehandi Artist</h1>
              <p className="max-w-2xl mx-auto">
                Our professional artists create exquisite designs for weddings, 
                festivals, and special occasions with precision and artistry.
              </p>
            </div>
          </div>
          
          {/* Booking Form Section */}
          <section className="py-16 bg-amber-50">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
                <div className="md:flex">
                  {/* Image Section */}
                  <div className="md:w-1/2 relative h-96 md:h-auto">
                    <Image 
                      src="https://images.pexels.com/photos/3014856/pexels-photo-3014856.jpeg"
                      alt="Mehandi artist applying henna"
                      fill
                      className="object-cover"
                      priority
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                      <div className="p-8 text-white">
                        <h3 className="text-2xl font-medium mb-2">Expert Artists</h3>
                        <p className="text-gray-200">Trained professionals with years of experience to create your perfect design</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Form Section */}
                  <div className="md:w-1/2 p-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Book Your Appointment</h2>
                    
                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* Service Type */}
                      <div>
                        <label className="block text-gray-700 text-sm font-medium mb-2">
                          Select Service Type
                        </label>
                        <div className="grid grid-cols-2 gap-3">
                          {['bridal', 'party', 'festival', 'private'].map((service) => (
                            <div 
                              key={service}
                              className={`px-4 py-3 border rounded-md cursor-pointer transition-colors ${
                                serviceType === service 
                                  ? 'border-amber-700 bg-amber-50 text-amber-900' 
                                  : 'border-gray-200 hover:border-amber-300'
                              }`}
                              onClick={() => setServiceType(service)}
                            >
                              <span className="capitalize">{service}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      {/* Date Selection */}
                      <div>
                        <label htmlFor="date" className="block text-gray-700 text-sm font-medium mb-2">
                          Select Date
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <Calendar size={16} className="text-gray-500" />
                          </div>
                          <input
                            type="date"
                            id="date"
                            value={selectedDate}
                            onChange={(e) => setSelectedDate(e.target.value)}
                            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                            required
                          />
                        </div>
                      </div>
                      
                      {/* Time Slots */}
                      {selectedDate && (
                        <div>
                          <label className="block text-gray-700 text-sm font-medium mb-2">
                            Select Time Slot
                          </label>
                          <div className="grid grid-cols-3 gap-2">
                            {timeSlots.map((slot) => (
                              <div 
                                key={slot.id}
                                className={`
                                  px-3 py-2 text-center text-sm rounded-md border transition-colors
                                  ${!slot.available ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 
                                    selectedTimeSlot === slot.id 
                                      ? 'bg-amber-100 border-amber-600 text-amber-800' 
                                      : 'border-gray-200 hover:border-amber-300 cursor-pointer'
                                  }
                                `}
                                onClick={() => {
                                  if (slot.available) {
                                    setSelectedTimeSlot(slot.id);
                                  }
                                }}
                              >
                                <div className="flex items-center justify-center">
                                  <Clock size={14} className="mr-1" />
                                  {slot.time}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                      
                      {/* Number of People */}
                      <div>
                        <label htmlFor="people" className="block text-gray-700 text-sm font-medium mb-2">
                          Number of People
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <Users size={16} className="text-gray-500" />
                          </div>
                          <input
                            type="number"
                            id="people"
                            min="1"
                            max="50"
                            value={numPeople}
                            onChange={(e) => setNumPeople(parseInt(e.target.value))}
                            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                            required
                          />
                        </div>
                      </div>
                      
                      {/* Location */}
                      <div>
                        <label htmlFor="location" className="block text-gray-700 text-sm font-medium mb-2">
                          Address
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <MapPin size={16} className="text-gray-500" />
                          </div>
                          <input
                            type="text"
                            id="location"
                            placeholder="Enter your complete address"
                            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                            required
                          />
                        </div>
                      </div>
                      
                      {/* Contact Information */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="name" className="block text-gray-700 text-sm font-medium mb-2">
                            Your Name
                          </label>
                          <input
                            type="text"
                            id="name"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                            required
                          />
                        </div>
                        <div>
                          <label htmlFor="phone" className="block text-gray-700 text-sm font-medium mb-2">
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                            required
                          />
                        </div>
                      </div>
                      
                      {/* Submit Button */}
                      <div>
                        <Button variant="secondary" size="lg" className="w-full">
                          Book Appointment
                        </Button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          {/* Packages Section */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-serif text-amber-900 mb-4">Our Packages</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Choose from our carefully crafted packages to match your needs and occasions
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Basic Package */}
                <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Basic Package</h3>
                    <div className="text-3xl font-bold text-amber-800 mb-6">$99</div>
                    <ul className="space-y-3 mb-8">
                      <li className="flex items-start">
                        <svg className="h-5 w-5 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>Simple hand designs</span>
                      </li>
                      {/* Other list items... */}
                    </ul>
                    <button className="w-full px-4 py-2 bg-white text-amber-800 font-medium rounded-md border border-amber-800 hover:bg-amber-50 transition-colors">
                      Select Package
                    </button>
                  </div>
                </div>
                
                {/* Other packages... */}
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Booking;