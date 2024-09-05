import React from 'react';
import { useTranslation } from 'react-i18next';

function BigoHosts() {
  const { t } = useTranslation();

  return (
    <div className="container mx-auto p-6">

    {/* 2 columns */}
      <section className="py-12">
        <h2 className="text-lg font-bold mb-4">
          Join Stellar Agency as an official Bigo Live host and unlock your full earning potential! 
        </h2>
        <p className="text-md mb-4">
          With our expert hacks and personalized training, you'll boost your income by <span className="text-violet-900 text-bold">35%</span> compared to going solo. 
          We provide the tools, strategies, and support you need to shine in the livestreaming world. 
          Don’t navigate the complexities of Bigo alone—partner with us and watch your earnings soar. 
        </p>
      </section>

      {/* 2. Why Join Us Section */}
      <section className="py-12 text-center">
        <h2 className="text-2xl text-primary font-bold mb-6">{t('bigo.whyTitle')}</h2>
        <p className="text-md mb-8">
          {/* Placeholder for why join us */}
          {t('bigo.why1')}
        </p>
        <p className="text-l font-semibold text-primary mb-4">{t('bigo.earn')} {t('bigo.earnAmount')} {t('bigo.perMonth')}</p> 
        <a
          href="https://wa.me/your-number"
          className="btn btn-primary text-lg"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t('bigo.cta')}
        </a>
      </section>

      {/* 3. Testimonials Section */}
      <section className="py-12">
        <h2 className="text-2xl font-bold text-center mb-8">What Our Hosts Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Testimonial 1 */}
          <div className="bg-base-100 p-6 rounded-lg shadow-lg">
            <p className="text-sm mb-4">
              {/* Placeholder for testimonial 1 */}
              "[Placeholder for testimonial 1: Feedback from a satisfied host.]"
            </p>
            <h4 className="text-lg font-bold">Host 1</h4>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-base-100 p-6 rounded-lg shadow-lg">
            <p className="text-sm mb-4">
              {/* Placeholder for testimonial 2 */}
              "[Placeholder for testimonial 2: Feedback from a satisfied host.]"
            </p>
            <h4 className="text-lg font-bold">Host 2</h4>
          </div>

          {/* Testimonial 3 */}
          <div className="bg-base-100 p-6 rounded-lg shadow-lg">
            <p className="text-sm mb-4">
              {/* Placeholder for testimonial 3 */}
              "[Placeholder for testimonial 3: Feedback from a satisfied host.]"
            </p>
            <h4 className="text-lg font-bold">Host 3</h4>
          </div>

          {/* Add more testimonials as needed */}
        </div>
      </section>

      {/* 4. Eligibility Section */}
      <section className="py-12 bg-base-200">
        <h2 className="text-2xl font-bold text-center mb-6">Eligibility Criteria</h2>
        <ul className="list-disc list-inside text-lg space-y-4">
          <li>[Placeholder for eligibility 1: Describe the first criterion.]</li>
          <li>[Placeholder for eligibility 2: Describe the second criterion.]</li>
          <li>[Placeholder for eligibility 3: Describe the third criterion.]</li>
          {/* Add more criteria as needed */}
        </ul>
      </section>
    </div>
  );
}

export default BigoHosts;
