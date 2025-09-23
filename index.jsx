import React from 'react';
import { MapPin, Ship, Music, Camera, Sun, Heart } from 'lucide-react';

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-emerald-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Ship className="h-8 w-8 text-emerald-600" />
              <h1 className="text-2xl font-bold text-gray-800">Travel Journal</h1>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-600 hover:text-emerald-600 font-medium">HOME</a>
              <a href="#vocabulary" className="text-gray-600 hover:text-emerald-600 font-medium">VOCABULARY</a>
              <a href="#article" className="text-gray-600 hover:text-emerald-600 font-medium">ARTICLE</a>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative bg-gradient-to-r from-emerald-600 to-blue-700 text-white">
        <div className="max-w-6xl mx-auto px-4 py-20">
          <div className="text-center">
            <h2 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
              DESTINATION:
            </h2>
            <h1 className="text-6xl md:text-8xl font-extrabold mb-8 bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent">
              BUENAVENTURA
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
              Discover the authentic soul of Colombia's Pacific coast
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-12">
        {/* My Travel Experience */}
        <section id="article" className="mb-20">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 pb-4 border-b border-gray-200">
              MY TRAVEL EXPERIENCE
            </h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <img 
                  src="https://placehold.co/600x400/16a34a/ffffff?text=Black+Sand+Beach" 
                  alt="Buenaventura Black Sand Beach"
                  className="rounded-xl shadow-md w-full"
                />
              </div>
              <div>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Visiting Buenaventura was one of the most authentic experiences I've ever had. This port city is not only the economic heart of Colombia but also the cultural gateway to the Pacific. I had the chance to enjoy its Black Sand beaches, take a yacht tour along the coast, and connect with traditions that make this place truly unique. From music to gastronomy, Buenaventura gave me memories I will never forget.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Vocabulary Section */}
        <section id="vocabulary" className="mb-20">
          <div className="bg-gradient-to-br from-emerald-500 to-blue-600 rounded-2xl shadow-lg p-8 md:p-12 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              VOCABULARY
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {[
                "port city", "yacht", "coast", "traditions", "seafood",
                "cultural visit", "tour", "monuments", "music", "festivals"
              ].map((word, index) => (
                <div key={index} className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-center hover:bg-white/30 transition-all duration-300">
                  <span className="font-medium capitalize">{word}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Where to Go */}
        <section className="mb-20">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <div className="flex items-center mb-6">
              <MapPin className="h-8 w-8 text-emerald-600 mr-3" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                WHERE TO GO
              </h2>
            </div>
            <p className="text-gray-700 text-lg mb-8">
              If you come to Buenaventura, you must explore its tourist islands: Juanchaco, Ladrilleros, La Bocana, Piangüita, and Playa Dorada. Each one offers different landscapes, from quiet beaches to vibrant local life. Don't miss the iconic Black Sand beach (Arena Negra), a natural wonder that represents the Pacific. Another must-see is the cargo dock, the most important in Colombia, which you can admire during a luxury yacht ride.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { name: "Juanchaco", image: "https://placehold.co/300x200/059669/ffffff?text=Juanchaco" },
                { name: "Ladrilleros", image: "https://placehold.co/300x200/047857/ffffff?text=Ladrilleros" },
                { name: "La Bocana", image: "https://placehold.co/300x200/16a34a/ffffff?text=La+Bocana" },
                { name: "Piangüita", image: "https://placehold.co/300x200/15803d/ffffff?text=Piangüita" },
                { name: "Playa Dorada", image: "https://placehold.co/300x200/166534/ffffff?text=Playa+Dorada" },
                { name: "Arena Negra", image: "https://placehold.co/300x200/065f46/ffffff?text=Arena+Negra" },
                { name: "Cargo Dock", image: "https://placehold.co/300x200/064e3b/ffffff?text=Cargo+Dock" }
              ].map((place, index) => (
                <div key={index} className="group">
                  <img 
                    src={place.image} 
                    alt={place.name}
                    className="rounded-lg shadow-md w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <h3 className="text-xl font-semibold text-gray-800 mt-3 text-center">
                    {place.name}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What to Do */}
        <section className="mb-20">
          <div className="bg-gradient-to-br from-blue-500 to-emerald-600 rounded-2xl shadow-lg p-8 md:p-12 text-white">
            <div className="flex items-center mb-6">
              <Ship className="h-8 w-8 mr-3" />
              <h2 className="text-3xl md:text-4xl font-bold">
                WHAT TO DO
              </h2>
            </div>
            <p className="text-lg mb-8 text-center max-w-4xl mx-auto">
              Set off early in the morning for a yacht trip and enjoy the fresh Pacific breeze. You can try out the famous encocado de camarón (shrimp in coconut sauce), taste fresh seafood, and dance to live marimba music. At night, you could explore Buenaventura's nightlife, full of Pacific rhythms. If you love culture, you should also visit the House of Culture and join a local festival.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "Yacht trip",
                "Seafood (shrimp in coconut sauce)",
                "Dance to marimba",
                "Nightlife",
                "Explore islands",
                "Join local festival"
              ].map((activity, index) => (
                <div key={index} className="bg-white/20 backdrop-blur-sm rounded-lg p-6 text-center hover:bg-white/30 transition-all duration-300">
                  <div className="text-2xl mb-3">🎯</div>
                  <p className="font-medium">{activity}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Travel Tips */}
        <section className="mb-20">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <div className="flex items-center mb-6">
              <Heart className="h-8 w-8 text-emerald-600 mr-3" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                TRAVEL TIPS
              </h2>
            </div>
            <p className="text-gray-700 text-lg mb-8">
              You must bring sunscreen and comfortable clothes for the warm weather. Book your yacht ride in advance to secure the best experience. Don't forget your camera, because the sunsets on the Pacific coast are breathtaking. Most importantly, come with an open heart to connect with the people, their stories, and traditions—you'll leave wanting to come back.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-4">
              {[
                { icon: Sun, text: "Sunscreen" },
                { icon: "👕", text: "Comfortable clothes" },
                { icon: "📅", text: "Book in advance" },
                { icon: Camera, text: "Camera" },
                { icon: "🌅", text: "Sunsets" },
                { icon: Heart, text: "Open heart" }
              ].map((tip, index) => (
                <div key={index} className="bg-emerald-50 rounded-lg p-4 text-center">
                  {typeof tip.icon === 'string' ? (
                    <div className="text-2xl mb-2">{tip.icon}</div>
                  ) : (
                    <tip.icon className="h-8 w-8 text-emerald-600 mx-auto mb-2" />
                  )}
                  <p className="text-sm font-medium text-gray-700">{tip.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-gray-300">
            © 2024 Travel Journal | Discover the world, one destination at a time
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;