import Layout from '@/components/Layout'
import Services from '@/components/Services'

// Functional component for the Services page
export default function ServicesPage() {
  return (
    <Layout>
      {/* Container with top padding */}
      <div className="pt-20">
        
        <Services />
      </div>
    </Layout>
  )
}   