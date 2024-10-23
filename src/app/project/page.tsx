import Layout from '@/components/Layout'
import Projects from '@/components/project'

// Functional component for the Services page
export default function ServicesPage() {
  return (
    <Layout>
      {/* Container with top padding */}
      <div className="pt-20">
        <Projects />
      </div>
    </Layout>
  )
}
