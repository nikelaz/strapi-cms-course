const FAQs = ({block}) => {
  return (
    <div className="mb-12">
      <h2 className="text-xl mb-5">{block.Title}</h2>
      <dl>
        {block.FAQItem.map(faq => (
          <>
            <dt className="bold text-lg mb-3">{faq.Question}</dt>
            <dd className="text-sm mb-6">{faq.Answer}</dd>
          </>
        ))}
      </dl>
    </div>
  );
};

export default FAQs;
