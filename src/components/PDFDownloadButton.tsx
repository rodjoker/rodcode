'use client'
import { useState } from 'react'

// El PDF se genera al hacer clic: así @react-pdf/renderer y el documento no se
// descargan ni se ejecutan en cada visita (este botón está en el header, el hero y el modal).
export const PDFDownloadButton = () => {
  const [loading, setLoading] = useState(false)
  const [failed, setFailed] = useState(false)

  const download = async () => {
    if (loading) return
    setLoading(true)
    setFailed(false)
    try {
      const [{ pdf }, { default: MyDocument }] = await Promise.all([
        import('@react-pdf/renderer'),
        import('./PDFDocument'),
      ])
      const blob = await pdf(<MyDocument />).toBlob()
      const url = URL.createObjectURL(blob)
      const link = document.createElement('a')
      link.href = url
      link.download = 'CV_Rodolfo_Rodriguez.pdf'
      document.body.appendChild(link)
      link.click()
      link.remove()
      URL.revokeObjectURL(url)
    } catch {
      setFailed(true)
    } finally {
      setLoading(false)
    }
  }

  return (
    <button
      type="button"
      onClick={download}
      disabled={loading}
      className="inline-flex items-center px-4 py-2 bg-gray-800 hover:bg-gray-700 disabled:opacity-60 text-white rounded-lg transition-colors duration-200"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 mr-2"
        viewBox="0 0 20 20"
        fill="currentColor"
        aria-hidden="true"
      >
        <path
          fillRule="evenodd"
          d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
          clipRule="evenodd"
        />
      </svg>
      {loading ? 'Generando...' : failed ? 'Reintentar' : 'CV'}
    </button>
  )
}
