'use client'
import { CVDownloadButton } from './PDFDocument'

const FloatingCVButton = () => {
  return (
    <div className="fixed right-2 top-36 z-40">
      <div className="bg-white p-2 rounded-lg shadow-lg hover:shadow-xl transition-shadow mt-6">
        <CVDownloadButton />
      </div>
    </div>
  )
}

export default FloatingCVButton