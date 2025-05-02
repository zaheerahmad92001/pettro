
'use-client'
import React from 'react';

const Loader = () => (
  <div className="fixed top-0 left-0 w-full h-full bg-white bg-opacity-50 z-50 flex items-center justify-center">
    <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500 border-solid"></div>
  </div>
);

export default Loader;
