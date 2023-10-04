import React from 'react'

const Loading = (): JSX.Element => {
  return <div className="flex items-center justify-center space-x-2">
    <div className="w-4 h-4 rounded-full animate-pulse bg-gray-600"></div>
    <div className="w-4 h-4 rounded-full animate-pulse bg-gray-700"></div>
    <div className="w-4 h-4 rounded-full animate-pulse bg-gray-800"></div>
  </div>
}

export default Loading 