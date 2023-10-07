const Faq = () => {
  return (
    <div
      className="mx-5"
      data-aos="fade-left"
      data-aos-offset="300"
      data-aos-easing="ease-in-sine"
      data-aos-duration="600"
    >
      <h1 className="text-center font-bold mb-5 text-3xl">
        Frequently Asked Questions
      </h1>
      <div className="my-10 max-w-4xl mx-auto flex flex-col gap-5">
        <div>
          <div className="collapse bg-base-200">
            <input type="checkbox" />
            <div className="collapse-title text-xl font-medium">
              How do I register for an event?
            </div>
            <div className="collapse-content">
              <ul className="space-y-5">
                <li>
                  1.To register for an event, simply visit the events page on
                  our website.
                </li>
                <li>2.Click the Register Now button.</li>
                <li>
                  3.Follow the prompts to provide your information and complete
                  the registration process.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div>
          <div className="collapse bg-base-200">
            <input type="checkbox" />
            <div className="collapse-title text-xl font-medium">
              What payment methods do you accept?
            </div>
            <div className="collapse-content">
              <ul className="space-y-5">
                <li>
                  1.We accept a variety of payment methods, including credit
                  cards (Visa, MasterCard, American Express), PayPal, and online
                  payment gateways.
                </li>
                <li>
                  2.Payment options may vary depending on the event and
                  organizer, so please check the event registration page for
                  specific payment details.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div>
          <div className="collapse bg-base-200">
            <input type="checkbox" />
            <div className="collapse-title text-xl font-medium">
              Are refunds available for event tickets?
            </div>
            <div className="collapse-content">
              <ul className="space-y-5">
                <li>
                  1.Refund policies vary depending on the event and organizer.
                </li>
                <li>
                  2.Please review the events refund policy on the registration
                  page for detailed information about refund eligibility and
                  procedures.
                </li>
                <li>
                  3.If you have questions about a specific event's refund
                  policy, feel free to contact our customer support.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div>
          <div className="collapse bg-base-200">
            <input type="checkbox" />
            <div className="collapse-title text-xl font-medium">
              How can I become a sponsor for an event?
            </div>
            <div className="collapse-content">
              <ul className="space-y-5">
                <li>
                  1.If you are interested in becoming a sponsor for one of our
                  events, please visit the events sponsorship section.
                </li>
                <li>
                  2.Fill out the sponsorship inquiry form, and our team will get
                  in touch with you to discuss sponsorship opportunities,
                  packages, and benefits.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div>
          <div className="collapse bg-base-200">
            <input type="checkbox" />
            <div className="collapse-title text-xl font-medium">
              Do you offer discounts for group registrations?
            </div>
            <div className="collapse-content">
              <ul className="space-y-5">
                <li>
                  1.Yes, we often offer group registration discounts for select
                  events.
                </li>
                <li>
                  2.Check the event details or registration page to see if group
                  discounts are available and the specific requirements for
                  eligibility.
                </li>
                <li>
                  3.If you have a large group or special requests, you can
                  contact us for personalized assistance and group booking
                  options.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
