import { recomendations } from "../../constants/recomendations";
export default function Recomendation() {
  return (
    <section className="section" id="recomendations">
      <h2 className="titleSection">Our Recomendations</h2>
      <article className="w-full  flex items-center overflow-x-scroll gap-4 containerRecomendation">
        {recomendations.map((recomendation) => (
          <div
            key={recomendation.title}
            className="flex-shrink-0 mt-4 w-full h-full rounded-2xl pb-3 max-w-[300px] shadow-md mb-2 mr-2"
          >
            <img
              src={recomendation.image}
              alt={recomendation.title}
              className="w-full h-[200px] bg-cover"
            />
            <h2 className="text-sm w-[90%] m-auto text-blue-400 font-bold">
              {recomendation.title}
            </h2>
            <p className="text-xs w-[90%] m-auto">
              {recomendation.description}
            </p>
          </div>
        ))}
      </article>
    </section>
  );
}
