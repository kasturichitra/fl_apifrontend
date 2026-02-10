import axios from 'axios'
import React, { useEffect, useState } from 'react'

// Simple copy icon as JSX (you can replace with SVG if you like)
const CopyIcon = () => (
  <span style={{ fontSize: '14px', cursor: 'pointer' }}>📋</span>
)

const CategoryAndService = () => {
  const AdminUrl = import.meta.env.VITE_HTTP_CLIENT_ADMIN_URL
  const [data, setData] = useState([])
  const [copied, setCopied] = useState('')

  const getCategoryAndService = async () => {
    try {
      const response = await axios.get(
        `${AdminUrl}api/v1/apimodule/get-categories-with-services`
      )
      setData(response.data?.data || [])
    } catch (error) {
      console.error('API error:', error)
    }
  }

  const handleCopy = (value) => {
    navigator.clipboard.writeText(value)
    setCopied(value)
    setTimeout(() => setCopied(''), 1500)
  }

  // Remove the word "API" from any string
  const cleanText = (text) => text.replace(/api/gi, '').trim()

  useEffect(() => {
    getCategoryAndService()
  }, [])

  return (
    <div style={{ padding: '20px' }}>
      {data.map((category) => (
        <div
          key={category.categoryId}
          style={{
            marginBottom: '40px',
            border: '1px solid #ddd',
            padding: '16px',
            borderRadius: '8px'
          }}
        >
          {/* Category Header */}
          <div style={{ marginBottom: '12px' }}>
            <h2 style={{ margin: 0 }}>{cleanText(category.categoryName)}</h2>

            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ color: '#888', fontSize: '14px' }}>
                Category ID: <strong>{cleanText(category.categoryId)}</strong>
              </span>

              <span onClick={() => handleCopy(category.categoryId)}>
                <CopyIcon />
              </span>
              {copied === category.categoryId && (
                <span style={{ color: 'green', marginLeft: '6px', fontSize: '12px' }}>
                  Copied!
                </span>
              )}
            </div>
          </div>

          {/* Services Table */}
          <table
            style={{
              width: '100%',
              borderCollapse: 'collapse'
            }}
          >
            <thead style={{ backgroundColor: '#e5e5e5' }}>
              <tr>
                <th style={thStyle}>Service Name</th>
                <th style={thStyle}>Service ID</th>
              </tr>
            </thead>

            <tbody>
              {category.services?.map((service) => (
                <tr key={service.serviceId}>
                  <td style={tdStyle}>{cleanText(service.serviceName)}</td>

                  <td style={tdStyle}>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px'
                      }}
                    >
                      <span>{cleanText(service.serviceId)}</span>
                      <span onClick={() => handleCopy(service.serviceId)}>
                        <CopyIcon />
                      </span>
                      {copied === service.serviceId && (
                        <span style={{ color: 'green', fontSize: '12px' }}>Copied!</span>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  )
}

const thStyle = {
  padding: '10px',
  border: '1px solid #ccc',
  textAlign: 'left'
}

const tdStyle = {
  padding: '8px',
  border: '1px solid #ddd'
}

export default CategoryAndService
