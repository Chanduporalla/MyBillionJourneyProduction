import React, { useState } from 'react';
import { CreditCard, Grid as GridIcon, Link as LinkIcon } from 'lucide-react';

export function Buy() {
  const [selectedSize, setSelectedSize] = useState<number>(100);
  const [adUrl, setAdUrl] = useState('');
  const [adImage, setAdImage] = useState('');

  const calculatePrice = (pixels: number) => pixels * 1; // $1 per pixel

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="text-center text-white mb-16">
        <h1 className="text-5xl font-bold mb-6">Buy Your Pixels</h1>
        <p className="text-xl text-purple-200 max-w-2xl mx-auto">
          Make your mark on the internet. Choose your spot, upload your ad, and become part of history.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Purchase Form */}
        <div className="bg-black/30 backdrop-blur-sm p-8 rounded-lg text-white">
          <h2 className="text-2xl font-bold mb-6">Purchase Details</h2>
          
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">Select Block Size</label>
              <select
                value={selectedSize}
                onChange={(e) => setSelectedSize(Number(e.target.value))}
                className="w-full bg-purple-900/50 border border-purple-500 rounded-lg p-3 text-white"
              >
                <option value="100">10x10 (100 pixels) - $100</option>
                <option value="400">20x20 (400 pixels) - $400</option>
                <option value="900">30x30 (900 pixels) - $900</option>
                <option value="2500">50x50 (2500 pixels) - $2,500</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Advertisement URL</label>
              <div className="relative">
                <LinkIcon className="absolute left-3 top-3.5 w-5 h-5 text-purple-400" />
                <input
                  type="url"
                  value={adUrl}
                  onChange={(e) => setAdUrl(e.target.value)}
                  placeholder="https://your-website.com"
                  className="w-full bg-purple-900/50 border border-purple-500 rounded-lg p-3 pl-10 text-white"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Advertisement Image URL</label>
              <div className="relative">
                <GridIcon className="absolute left-3 top-3.5 w-5 h-5 text-purple-400" />
                <input
                  type="url"
                  value={adImage}
                  onChange={(e) => setAdImage(e.target.value)}
                  placeholder="https://your-image-url.com/image.jpg"
                  className="w-full bg-purple-900/50 border border-purple-500 rounded-lg p-3 pl-10 text-white"
                />
              </div>
            </div>

            <div className="bg-purple-900/30 p-4 rounded-lg">
              <div className="flex justify-between items-center mb-2">
                <span>Price per pixel:</span>
                <span>$1.00</span>
              </div>
              <div className="flex justify-between items-center mb-2">
                <span>Selected pixels:</span>
                <span>{selectedSize}</span>
              </div>
              <div className="flex justify-between items-center text-lg font-bold border-t border-purple-500 pt-2 mt-2">
                <span>Total:</span>
                <span>${calculatePrice(selectedSize).toLocaleString()}</span>
              </div>
            </div>

            <button className="w-full bg-purple-500 hover:bg-purple-400 transition py-3 rounded-lg font-bold flex items-center justify-center gap-2">
              <CreditCard className="w-5 h-5" />
              Purchase Now call :  +91 8919885508
            </button>
          </div>
        </div>

        {/* Preview & Info */}
        <div className="space-y-8">
          <div className="bg-black/30 backdrop-blur-sm p-8 rounded-lg text-white">
            <h2 className="text-2xl font-bold mb-4">Preview</h2>
            <div className="aspect-square bg-purple-900/50 rounded-lg overflow-hidden">
              {adImage ? (
                <img src={adImage} alt="Advertisement preview" className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-purple-300">
                  <p>Preview your ad here</p>
                </div>
              )}
            </div>
          </div>

          <div className="bg-black/30 backdrop-blur-sm p-8 rounded-lg text-white">
            <h2 className="text-2xl font-bold mb-4">Guidelines</h2>
            <ul className="list-disc list-inside space-y-2 text-purple-200">
              <li>Images must be appropriate for all audiences</li>
              <li>URLs must be valid and lead to active websites</li>
              <li>No offensive or illegal content</li>
              <li>Purchases are permanent and non-refundable</li>
              <li>Images should be square for best display</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}