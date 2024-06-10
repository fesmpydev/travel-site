import { trending } from "../../constants/trending";

export default function Trending() {
  return (
    <section className="section" id="stays">
      <h2 className="titleSection">Trending Stays</h2>
      <article className="w-full h-auto flex flex-col gap-5 mt-5 lg:grid lg:grid-cols-2 lg:grid-rows-3 trending lg:max-w-[90%] lg:m-auto lg:mt-5">
        {trending.map((trend) => (
          <div
            key={trend.title}
            className="rounded-2xl shadow-2xl relative h-[70vh] lg:"
          >
            <img
              src={trend.image}
              alt={trend.title}
              className="w-full h-full object-cover bg-center rounded-2xl"
            />
            <h2 className="text-3xl absolute top-10 left-5 font-bold text-white ">
              {trend.title}
            </h2>
            <p className="text-lg absolute top-20 left-5 text-white font-normal">
              {trend.description}
            </p>
          </div>
        ))}
      </article>
    </section>
  );
}
