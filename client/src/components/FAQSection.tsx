const faqs = [
  {
    id: 1,
    question: 'What is ComponentCraft?',
    answer: 'ComponentCraft is a UI component library built with Tailwind CSS, offering both free and premium components for fast web development.'
  },
  {
    id: 2,
    question: 'How do I access premium components?',
    answer: 'Premium components are available through our Pro Access subscription. You can view the pricing and plans on the Pricing page.'
  },
  {
    id: 3,
    question: 'Can I contribute to the library?',
    answer: 'Yes! We welcome contributions. You can submit issues, feature requests, or even contribute code via our GitHub repository.'
  },
  {
    id: 4,
    question: 'Are the components responsive?',
    answer: 'Yes, all our components are fully responsive and will work beautifully on devices of all sizes, from mobile phones to desktop monitors.'
  }
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-3xl">
        <h3 className="text-2xl font-bold mb-10 text-center">Frequently Asked Questions</h3>
        <div className="space-y-6">
          {faqs.map(faq => (
            <div key={faq.id} className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="font-semibold text-gray-800 mb-2">{faq.question}</h4>
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
