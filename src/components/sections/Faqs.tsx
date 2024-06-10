import { faqs } from "../../constants/faqs";

export default function Faqs() {
  return (
    <section className="section" id="faqs">
      <h2 className="titleSection">FAQs</h2>
      <article>
        {faqs.map((faq) => (
          <div key={faq.title} className="flex flex-col gap-2 mt-5">
            <h2 className="text-lg  font-normal text-[#cc2d4a] lg:font-bold lg:text-2xl">
              {faq.title}
            </h2>
            <p className="text-sm font-normal lg:text-xl">{faq.description}</p>
          </div>
        ))}
      </article>
    </section>
  );
}
