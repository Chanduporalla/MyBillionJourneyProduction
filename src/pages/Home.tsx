import React, { useState } from 'react';
import { Info, Grid } from 'lucide-react';

export function Home() {
  const [hoveredPixel, setHoveredPixel] = useState<number | null>(null);
  
  const gridSize = 100;
  const pixels = Array(gridSize * gridSize).fill(null);

  return (
    <>
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-12 text-white text-center">
        <h2 className="text-4xl font-bold mb-4">Own a Piece of Internet History</h2>
        <p className="text-xl text-purple-200 mb-8">1 Billion Pixels. 1 Unique Journey. Your Advertisement.</p>
      </section>

      {/* Pixel Grid */}
      <div className="max-w-7xl mx-auto p-6">
        <div className="bg-black/30 backdrop-blur-sm rounded-lg p-4">
          <div className="grid grid-cols-100 gap-[1px] bg-purple-900/50 p-2 rounded overflow-hidden"
               style={{ width: '100%', aspectRatio: '1/1' }}>
            {pixels.map((_, index) => (
              <div
                key={index}
                className="w-full aspect-square bg-purple-800/30 hover:bg-purple-500/50 transition-colors cursor-pointer"
                onMouseEnter={() => setHoveredPixel(index)}
                onMouseLeave={() => setHoveredPixel(null)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Info Section */}
      <section className="max-w-7xl mx-auto px-6 py-12 text-white">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-black/30 backdrop-blur-sm p-6 rounded-lg">
            <Info className="w-8 h-8 mb-4 text-purple-400" />
            <h3 className="text-xl font-bold mb-2">How It Works</h3>
            <p className="text-purple-200">Purchase pixels in blocks of 10x10. Each pixel block can contain your ad, link, and message.</p>
          </div>
          <div className="bg-black/30 backdrop-blur-sm p-6 rounded-lg">
            <Grid className="w-8 h-8 mb-4 text-purple-400" />
            <h3 className="text-xl font-bold mb-2">Pricing</h3>
            <p className="text-purple-200">$1 per pixel. Minimum purchase of 100 pixels (10x10 block). Your ad stays forever!</p>
          </div>
          <div className="bg-black/30 backdrop-blur-sm p-6 rounded-lg">
            <Info className="w-8 h-8 mb-4 text-purple-400" />
            <h3 className="text-xl font-bold mb-2">Stats</h3>
            <p className="text-purple-200">Join thousands of advertisers. Over 500,000 pixels already sold!</p>
          </div>
        </div>
      </section>
    </>
  );
}