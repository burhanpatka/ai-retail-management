'use client'
import { useState, useEffect } from 'react'

export default function Dashboard() {
  const [stats, setStats] = useState({
    fastMoving: [],
    slowMoving: [],
    reorderAlerts: [],
    priceAlerts: [],
    customerInsights: []
  })

  // Demo data - will be replaced with real API calls
  useEffect(() => {
    setStats({
      fastMoving: [
        { name: 'School Backpack Blue', soldIn: '2 days', quantity: 45 },
        { name: 'College Bag Black', soldIn: '3 days', quantity: 32 }
      ],
      slowMoving: [
        { name: 'Red Trolley Medium', unsoldDays: 75, quantity: 22 },
        { name: 'Purple Purse Small', unsoldDays: 60, quantity: 15 }
      ],
      reorderAlerts: [
        { name: 'School Backpack Blue', status: 'Out of stock', lastSold: '2 days' },
        { name: 'Laptop Bag Premium', status: 'Low stock (5 left)', lastSold: '1 day' }
      ],
      priceAlerts: [
        { supplier: 'Supplier A', items: 3, increase: '10-15%' },
        { supplier: 'Supplier B', items: 1, increase: '20%' }
      ],
      customerInsights: [
        { segment: 'School bag buyers', count: 25, action: 'Back-to-school promo ready' },
        { segment: 'Premium luggage buyers', count: 12, action: 'New arrivals notification' }
      ]
    })
  }, [])

  return (
    <div style={{ padding: '20px', maxWidth: '1400px', margin: '0 auto' }}>
      <header style={{ marginBottom: '30px' }}>
        <h1 style={{ fontSize: '32px', margin: '0 0 10px 0', color: '#333' }}>
          🎯 Boss Dashboard
        </h1>
        <p style={{ color: '#666', margin: 0 }}>AI-Powered Retail Intelligence</p>
      </header>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
        
        {/* Fast Moving Products */}
        <div style={cardStyle}>
          <h2 style={cardTitleStyle}>🚀 Fast Moving (Reorder Now)</h2>
          {stats.fastMoving.map((item, i) => (
            <div key={i} style={itemStyle}>
              <strong>{item.name}</strong>
              <div style={{ fontSize: '14px', color: '#22c55e' }}>
                Sold {item.quantity} pcs in {item.soldIn}
              </div>
            </div>
          ))}
        </div>

        {/* Slow Moving Products */}
        <div style={cardStyle}>
          <h2 style={cardTitleStyle}>🐌 Slow Moving (Action Needed)</h2>
          {stats.slowMoving.map((item, i) => (
            <div key={i} style={itemStyle}>
              <strong>{item.name}</strong>
              <div style={{ fontSize: '14px', color: '#ef4444' }}>
                {item.quantity} pcs unsold for {item.unsoldDays} days
              </div>
              <div style={{ fontSize: '12px', color: '#666', marginTop: '5px' }}>
                💡 Consider discount or bundle
              </div>
            </div>
          ))}
        </div>

        {/* Reorder Alerts */}
        <div style={cardStyle}>
          <h2 style={cardTitleStyle}>⚠️ Reorder Alerts</h2>
          {stats.reorderAlerts.map((item, i) => (
            <div key={i} style={itemStyle}>
              <strong>{item.name}</strong>
              <div style={{ fontSize: '14px', color: '#f59e0b' }}>
                {item.status}
              </div>
              <div style={{ fontSize: '12px', color: '#666' }}>
                Last sold: {item.lastSold} ago
              </div>
            </div>
          ))}
        </div>

        {/* Supplier Price Alerts */}
        <div style={cardStyle}>
          <h2 style={cardTitleStyle}>💰 Supplier Watchlist</h2>
          {stats.priceAlerts.map((item, i) => (
            <div key={i} style={itemStyle}>
              <strong>{item.supplier}</strong>
              <div style={{ fontSize: '14px', color: '#ef4444' }}>
                Increased prices on {item.items} items by {item.increase}
              </div>
            </div>
          ))}
        </div>

        {/* Customer Insights */}
        <div style={cardStyle}>
          <h2 style={cardTitleStyle}>👥 Customer Targeting</h2>
          {stats.customerInsights.map((item, i) => (
            <div key={i} style={itemStyle}>
              <strong>{item.count} {item.segment}</strong>
              <div style={{ fontSize: '14px', color: '#3b82f6' }}>
                {item.action}
              </div>
              <button style={buttonStyle}>
                📧 Send Promo
              </button>
            </div>
          ))}
        </div>

        {/* Quick Actions */}
        <div style={cardStyle}>
          <h2 style={cardTitleStyle}>⚡ Quick Actions</h2>
          <button style={{...buttonStyle, width: '100%', marginBottom: '10px'}}>
            ➕ Add New Product
          </button>
          <button style={{...buttonStyle, width: '100%', marginBottom: '10px'}}>
            📦 Record Sale
          </button>
          <button style={{...buttonStyle, width: '100%', marginBottom: '10px'}}>
            🏢 Manage Suppliers
          </button>
          <button style={{...buttonStyle, width: '100%'}}>
            👤 View Customers
          </button>
        </div>

      </div>

      <footer style={{ marginTop: '40px', textAlign: 'center', color: '#999', fontSize: '14px' }}>
        <p>AI Retail Management System v1.0 | Built with ❤️ by Bhindi</p>
      </footer>
    </div>
  )
}

const cardStyle = {
  background: 'white',
  borderRadius: '12px',
  padding: '20px',
  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
}

const cardTitleStyle = {
  fontSize: '18px',
  margin: '0 0 15px 0',
  color: '#333',
  borderBottom: '2px solid #f0f0f0',
  paddingBottom: '10px',
}

const itemStyle = {
  padding: '12px',
  background: '#f9fafb',
  borderRadius: '8px',
  marginBottom: '10px',
}

const buttonStyle = {
  marginTop: '8px',
  padding: '8px 16px',
  background: '#3b82f6',
  color: 'white',
  border: 'none',
  borderRadius: '6px',
  cursor: 'pointer',
  fontSize: '14px',
}
