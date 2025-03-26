
import React, { useState } from 'react';
import { Keyboard, HelpCircle, X } from 'lucide-react';

const KeyboardHelp = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button 
        className="fixed bottom-8 left-8 z-40 p-3 rounded-full bg-white/80 backdrop-blur shadow-sm hover:bg-white transition-all duration-200"
        onClick={() => setIsOpen(true)}
        title="Keyboard Shortcuts"
      >
        <Keyboard size={20} className="text-gray-700" />
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full relative">
            <button 
              className="absolute top-4 right-4"
              onClick={() => setIsOpen(false)}
            >
              <X size={20} className="text-gray-500" />
            </button>
            
            <div className="p-6">
              <div className="flex items-center mb-4">
                <HelpCircle size={20} className="text-primary mr-2" />
                <h3 className="text-xl font-semibold">Keyboard Navigation</h3>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">Navigate Between Slides</h4>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="flex items-center p-2 bg-gray-50 rounded-md">
                      <span className="px-2 py-1 bg-gray-200 rounded text-sm font-mono">→</span>
                      <span className="ml-2 text-sm text-gray-600">Next slide</span>
                    </div>
                    <div className="flex items-center p-2 bg-gray-50 rounded-md">
                      <span className="px-2 py-1 bg-gray-200 rounded text-sm font-mono">←</span>
                      <span className="ml-2 text-sm text-gray-600">Previous slide</span>
                    </div>
                    <div className="flex items-center p-2 bg-gray-50 rounded-md">
                      <span className="px-2 py-1 bg-gray-200 rounded text-sm font-mono">↓</span>
                      <span className="ml-2 text-sm text-gray-600">Next slide</span>
                    </div>
                    <div className="flex items-center p-2 bg-gray-50 rounded-md">
                      <span className="px-2 py-1 bg-gray-200 rounded text-sm font-mono">↑</span>
                      <span className="ml-2 text-sm text-gray-600">Previous slide</span>
                    </div>
                    <div className="flex items-center p-2 bg-gray-50 rounded-md">
                      <span className="px-2 py-1 bg-gray-200 rounded text-sm font-mono">Space</span>
                      <span className="ml-2 text-sm text-gray-600">Next slide</span>
                    </div>
                    <div className="flex items-center p-2 bg-gray-50 rounded-md">
                      <span className="px-2 py-1 bg-gray-200 rounded text-sm font-mono">Home</span>
                      <span className="ml-2 text-sm text-gray-600">First slide</span>
                    </div>
                    <div className="flex items-center p-2 bg-gray-50 rounded-md">
                      <span className="px-2 py-1 bg-gray-200 rounded text-sm font-mono">End</span>
                      <span className="ml-2 text-sm text-gray-600">Last slide</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium mb-2">Vim-style Navigation</h4>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="flex items-center p-2 bg-gray-50 rounded-md">
                      <span className="px-2 py-1 bg-gray-200 rounded text-sm font-mono">j</span>
                      <span className="ml-2 text-sm text-gray-600">Next slide</span>
                    </div>
                    <div className="flex items-center p-2 bg-gray-50 rounded-md">
                      <span className="px-2 py-1 bg-gray-200 rounded text-sm font-mono">k</span>
                      <span className="ml-2 text-sm text-gray-600">Previous slide</span>
                    </div>
                    <div className="flex items-center p-2 bg-gray-50 rounded-md">
                      <span className="px-2 py-1 bg-gray-200 rounded text-sm font-mono">l</span>
                      <span className="ml-2 text-sm text-gray-600">Next slide</span>
                    </div>
                    <div className="flex items-center p-2 bg-gray-50 rounded-md">
                      <span className="px-2 py-1 bg-gray-200 rounded text-sm font-mono">h</span>
                      <span className="ml-2 text-sm text-gray-600">Previous slide</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default KeyboardHelp;
