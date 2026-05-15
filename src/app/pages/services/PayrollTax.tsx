import { motion } from 'motion/react';
import { PageHero } from '../../components/PageHero';
import { DollarSign, FileText, Users, Calculator, Shield, CheckCircle } from 'lucide-react';
import { Link } from 'react-router';

export default function PayrollTax() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F8F7F4' }}>
      <PageHero
        title="Payroll & Tax Services"
        subtitle="Comprehensive maritime payroll and tax compliance solutions"
        imageUrl="https://images.unsplash.com/photo-1776661616822-ba34fe4e5638"
        imageAlt="Maritime crew operations"
        height="medium"
      />

      {/* Overview Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center mb-20"
          >
            <h2
              className="text-4xl md:text-5xl font-bold mb-6"
              style={{ fontFamily: "'Playfair Display', serif", color: '#0B2545' }}
            >
              Maritime Payroll & Tax Expertise
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Managing payroll and tax compliance for seafarers is complex, involving multiple jurisdictions,
              currencies, and regulations. Our specialized maritime payroll services ensure accurate, timely
              payment processing and full regulatory compliance across all flag states and crew nationalities.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img
                src="https://images.unsplash.com/photo-1767873306288-adb22b6dff85"
                alt="Crew management operations"
                className="rounded-lg shadow-2xl w-full h-[400px] object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3
                className="text-3xl font-bold mb-6"
                style={{ fontFamily: "'Playfair Display', serif", color: '#0B2545' }}
              >
                Specialized Maritime Solutions
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Our maritime payroll specialists understand the unique challenges of seafarer compensation
                including multi-currency payments, complex tax treaties, social security obligations, and
                wage protection requirements under MLC 2006.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We handle all aspects of crew payroll from monthly salary processing to year-end tax
                documentation, ensuring compliance with flag state regulations, home country requirements,
                and international maritime labor standards.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-24 px-6" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2
              className="text-4xl md:text-5xl font-bold mb-6"
              style={{ fontFamily: "'Playfair Display', serif", color: '#0B2545' }}
            >
              Our Payroll & Tax Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Complete payroll management and tax compliance solutions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: DollarSign,
                title: 'Crew Payroll Processing',
                description: 'Accurate monthly payroll processing including basic salary, overtime, bonuses, and deductions with multi-currency support.',
              },
              {
                icon: FileText,
                title: 'Tax Compliance',
                description: 'Management of seafarer tax obligations including income tax withholding, tax equalization, and year-end reporting.',
              },
              {
                icon: Users,
                title: 'Social Security Administration',
                description: 'Administration of social security contributions, totalization agreements, and crew welfare fund payments.',
              },
              {
                icon: Calculator,
                title: 'Allotment Management',
                description: 'Processing and remittance of crew allotments to families in various currencies and payment methods.',
              },
              {
                icon: Shield,
                title: 'MLC Compliance',
                description: 'Ensuring full compliance with Maritime Labour Convention wage protection and payment requirements.',
              },
              {
                icon: CheckCircle,
                title: 'Reporting & Documentation',
                description: 'Comprehensive payroll reports, tax certificates, and documentation for crew and regulatory authorities.',
              },
            ].map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                >
                  <div
                    className="w-16 h-16 rounded-lg flex items-center justify-center mb-6"
                    style={{ backgroundColor: '#0B2545' }}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3
                    className="text-xl font-bold mb-4"
                    style={{ fontFamily: "'Playfair Display', serif", color: '#1A1A1A' }}
                  >
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Tax & Compliance Expertise */}
      <section className="py-24 px-6" style={{ backgroundColor: '#0B2545' }}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2
              className="text-4xl md:text-5xl font-bold mb-6 text-white"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Tax & Compliance Expertise
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Navigating the complexities of maritime taxation and labor compliance
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'Flag State Requirements',
                description: 'Complete understanding of payroll and tax obligations under various flag state regulations.',
                points: ['Wage tax withholding', 'Social security contributions', 'Statutory deductions', 'Reporting requirements'],
              },
              {
                title: 'Crew Nationality Compliance',
                description: 'Managing home country tax obligations for seafarers from diverse nationalities.',
                points: ['Income tax treaties', 'Double taxation relief', 'Tax equalization schemes', 'Expatriate taxation'],
              },
              {
                title: 'MLC 2006 Standards',
                description: 'Full compliance with Maritime Labour Convention standards for seafarer wages and payments.',
                points: ['Monthly payment requirements', 'Allotment facilities', 'Wage protection', 'Bank account access'],
              },
              {
                title: 'Currency Management',
                description: 'Expert handling of multi-currency payroll and foreign exchange considerations.',
                points: ['Competitive exchange rates', 'Currency risk management', 'Multiple payment methods', 'Local currency payments'],
              },
            ].map((area, index) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm p-8 rounded-lg border border-white/10"
              >
                <h3 className="text-2xl font-bold mb-4 text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {area.title}
                </h3>
                <p className="text-white/70 leading-relaxed mb-6">
                  {area.description}
                </p>
                <ul className="space-y-2">
                  {area.points.map((point) => (
                    <li key={point} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full mt-2" style={{ backgroundColor: '#B8860B' }} />
                      <span className="text-white/80 text-sm">{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2
              className="text-4xl md:text-5xl font-bold mb-6"
              style={{ fontFamily: "'Playfair Display', serif", color: '#0B2545' }}
            >
              Why Choose Our Payroll Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized expertise delivering accuracy and compliance
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                number: '100%',
                label: 'Accuracy Rate',
                description: 'Error-free payroll processing with rigorous quality controls',
              },
              {
                number: '50+',
                label: 'Nationalities',
                description: 'Experience managing crew from diverse countries worldwide',
              },
              {
                number: '15+',
                label: 'Years Experience',
                description: 'Dedicated maritime payroll expertise',
              },
              {
                number: '24/7',
                label: 'Support',
                description: 'Always available for urgent payroll queries',
              },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-6 rounded-lg border-2 hover:shadow-lg transition-all duration-300"
                style={{ borderColor: '#B8860B' }}
              >
                <div className="text-5xl font-bold mb-3" style={{ color: '#0B2545' }}>
                  {stat.number}
                </div>
                <div className="text-xl font-bold mb-3" style={{ fontFamily: "'Playfair Display', serif", color: '#1A1A1A' }}>
                  {stat.label}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {stat.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-24 px-6" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2
              className="text-4xl md:text-5xl font-bold mb-6"
              style={{ fontFamily: "'Playfair Display', serif", color: '#0B2545' }}
            >
              Our Payroll Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A systematic approach ensuring timely and accurate payments
            </p>
          </motion.div>

          <div className="grid md:grid-cols-5 gap-6">
            {[
              {
                step: '01',
                title: 'Data Collection',
                description: 'Gathering crew time sheets, overtime, and deduction information',
              },
              {
                step: '02',
                title: 'Processing',
                description: 'Calculating wages, taxes, and statutory deductions',
              },
              {
                step: '03',
                title: 'Verification',
                description: 'Quality control and approval workflow',
              },
              {
                step: '04',
                title: 'Payment',
                description: 'Executing payments and allotment transfers',
              },
              {
                step: '05',
                title: 'Reporting',
                description: 'Distributing payslips and compliance reports',
              },
            ].map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div
                  className="text-4xl font-bold mb-4"
                  style={{ color: '#B8860B', fontFamily: "'Playfair Display', serif" }}
                >
                  {step.step}
                </div>
                <h3
                  className="text-xl font-bold mb-3"
                  style={{ fontFamily: "'Playfair Display', serif", color: '#0B2545' }}
                >
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 px-6" style={{ backgroundColor: '#F8F7F4' }}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2
              className="text-4xl md:text-5xl font-bold mb-6"
              style={{ fontFamily: "'Playfair Display', serif", color: '#0B2545' }}
            >
              Benefits of Our Service
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Time Savings',
                description: 'Free your administrative staff from complex payroll calculations and compliance requirements, allowing focus on core operations.',
              },
              {
                title: 'Risk Mitigation',
                description: 'Reduce exposure to payroll errors, tax penalties, and regulatory non-compliance through expert management.',
              },
              {
                title: 'Crew Satisfaction',
                description: 'Ensure timely, accurate payments and clear documentation improving crew morale and retention.',
              },
              {
                title: 'Cost Efficiency',
                description: 'Eliminate need for in-house payroll specialists and expensive software while reducing processing costs.',
              },
              {
                title: 'Scalability',
                description: 'Easily handle fleet growth or seasonal crew changes without additional administrative burden.',
              },
              {
                title: 'Transparency',
                description: 'Access comprehensive reporting and audit trails providing complete visibility into payroll expenses.',
              },
            ].map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 rounded-lg shadow-lg"
              >
                <h3
                  className="text-2xl font-bold mb-4"
                  style={{ fontFamily: "'Playfair Display', serif", color: '#0B2545' }}
                >
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2
            className="text-4xl md:text-5xl font-bold mb-6"
            style={{ fontFamily: "'Playfair Display', serif", color: '#0B2545' }}
          >
            Streamline Your Crew Payroll
          </h2>
          <p className="text-xl text-gray-700 mb-10 leading-relaxed">
            Let our maritime payroll specialists handle your crew compensation and tax compliance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <button
                className="px-8 py-4 text-white font-semibold rounded-lg hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl"
                style={{ backgroundColor: '#0B2545' }}
              >
                Request Consultation
              </button>
            </Link>
            <Link to="/services">
              <button
                className="px-8 py-4 font-semibold rounded-lg border-2 hover:bg-gray-50 transition-all duration-300"
                style={{ borderColor: '#0B2545', color: '#0B2545' }}
              >
                Explore All Services
              </button>
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
