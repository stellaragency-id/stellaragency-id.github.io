import React from 'react';
import TestimonialSlider from '../components/Testimonial';
import { useTranslation } from 'react-i18next';
import FAQ from '../components/FAQ';
import ContactUsForm from '../components/ContactUsForm';

function Home() {
  const { t } = useTranslation();

  return (
    <div className="relative bg-base-200">
      <div className="relative z-10 container mx-auto p-6 max-w-7xl space-y-4">
        <h1 className="text-3xl font-bold uppercase">{t('home.title')}</h1>  
        <p className="text-md mb-10">{t('home.description')}</p>
        <p className="text-md line-height-4">{t('home.aboutUs')}</p>
      </div>
      <div className="container mx-auto">
        <TestimonialSlider testimonials={[
          { 
            image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80', 
            testimonial: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi."', 
            name: 'John Doe' 
          },
          { 
            image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
            testimonial: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi."', 
            name: 'Mary Doe'
          },
        ]} />
      </div>
      <div className="container mx-auto text-center py-10 px-6">
        <h1 className="text-3xl font-bold align-center">Frequently Asked Questions</h1>
        <FAQ faqs={[
          {
            question: 'How can I become a Bigo Live host?',
            answer: 'You can apply to become a Bigo Live host by joining our agency. We will guide you through the entire process, provide training, and help you start your journey as a successful host.',
          },
          {
            question: 'What are the benefits of joining as a host?',
            answer: 'As a Bigo Live host, you can earn money through livestreaming, grow your social media presence, and receive support from our agency to improve your skills and reach more viewers.',
          },
          {
            question: 'How do I get paid as a Bigo Live host?',
            answer: 'You get paid based on the time you spend livestreaming, viewer engagement, and virtual gifts you receive during your streams. We handle all the payments and ensure timely payouts.',
          },
          {
            question: 'Do I need experience to become a host?',
            answer: 'No experience is required! Our agency provides training and coaching to help you succeed as a host, even if you are just starting out.',
          },
          {
            question: 'How can I contact support for more information?',
            answer: (
              <div>
                You can directly contact us via <a href={"https://wa.me/" + process.env.REACT_APP_WHATSAPP_NUMBER} className="text-pink-500">
                  Whatsapp
                </a>
                .
              </div>
            ),
          },
        ]} />
      </div>
      <div className="mx-auto flex max-w-7xl flex-col gap-16">
        <div className="rounded-box relative grid grid-cols-12 gap-y-10 py-10 xl:gap-x-10">
          <div className="col-span-12 row-start-2 flex flex-col gap-8 xl:col-span-4 xl:row-start-1 p-6">
            <ContactUsForm />
          </div>
          <div className="col-span-12 row-start-1 flex flex-col gap-6 xl:col-span-8 p-6">
            <div className="rounded-box border-base-200 group relative block aspect-[4/3] overflow-hidden border object-cover">
              <div className="absolute inset-0 grid place-content-center">
                <img src="join_us.jpg" 
                  alt="Joining Stellar Agency is as easy as 1, 2, 3!"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
