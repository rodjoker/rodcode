'use client'
import { PDFDownloadButton } from './PDFDownloadButton'

const FloatingCVButton = () => {
  return (
    <div className="fixed right-2 top-36 z-40">
      <div className="bg-gray-500 p-2 rounded-lg shadow-lg hover:shadow-xl transition-shadow mt-6">
        <PDFDownloadButton />
      </div>
    </div>
  )
}

export default FloatingCVButton