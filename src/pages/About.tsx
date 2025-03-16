import React from 'react';
import { History, Target, Users } from 'lucide-react';

export function About() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      {/* Hero */}
      <div className="text-center text-white mb-16">
        <h1 className="text-5xl font-bold mb-6">About MyBillionJourney</h1>
        <p className="text-xl text-purple-200 max-w-2xl mx-auto">
          Revolutionizing digital advertising one pixel at a time. Join us in creating the world's largest collaborative advertising space.
        </p>
      </div>

      {/* Story Section */}
      <div className="grid md:grid-cols-2 gap-12 text-white mb-16">
        <div className="bg-black/30 backdrop-blur-sm p-8 rounded-lg">
          <History className="w-12 h-12 text-purple-400 mb-6" />
          <h2 className="text-2xl font-bold mb-4">Our Story</h2>
          <p className="text-purple-200">
            Inspired by the Million Dollar Homepage, we're taking pixel advertising to the next level. 
            Our goal is to create a living, breathing digital canvas where businesses and individuals 
            can leave their mark on internet history.
          </p>
        </div>
        <div className="bg-black/30 backdrop-blur-sm p-8 rounded-lg">
          <Target className="w-12 h-12 text-purple-400 mb-6" />
          <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
          <p className="text-purple-200">
            We're building more than just an advertising platform - we're creating a digital time capsule. 
            Each pixel tells a story, represents a dream, and contributes to the larger tapestry of the internet age.
          </p>
        </div>
      </div>

      {/* Stats */}
      <div className="bg-black/30 backdrop-blur-sm rounded-lg p-8 text-white mb-16">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold text-purple-400 mb-2">50+</div>
            <div className="text-purple-200">Pixels Sold</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-purple-400 mb-2">50+</div>
            <div className="text-purple-200">Happy Advertisers</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-purple-400 mb-2">120</div>
            <div className="text-purple-200">Countries Reached</div>
          </div>
        </div>
      </div>

      {/* Team */}
      <div className="text-white">
        <div className="text-center mb-12">
          <Users className="w-12 h-12 text-purple-400 mb-4 mx-auto" />
          <h2 className="text-3xl font-bold">Meet Our Team</h2>
        </div>
        <div className="grid md:grid-cols-1 gap-8">
          {[
            {
              name: "Poralla chandu",
              role: "Founder & CEO",
              image: "https://media.licdn.com/dms/image/v2/D4D03AQGYUlsEzAKFOw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1721993040575?e=2147483647&v=beta&t=D9YgWwJcg4o281DJekfdxzZ47_r03FVysnQypWJjFkQ"
            },
            
          ].map((member) => (
            <div key={member.name} className="bg-black/30 backdrop-blur-sm p-6 rounded-lg text-center">
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-bold mb-2">{member.name}</h3>
              <p className="text-purple-200">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}