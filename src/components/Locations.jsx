import { MapPin } from "lucide-react";

const locations = [
  {
    city: "Cochin",
    place: "WEE SPACES Ernakulam",
  },
  {
    city: "Trivandrum",
    place: "Kinfra Film and IT Park Trivandrum",
  },
];

function Locations() {
  return (
    <section className="bg-white px-6 py-24 transition-colors duration-500 dark:bg-[#0c1019] lg:px-8">
      <div className="mx-auto max-w-[1250px]">

        <div className="text-center">

          <p className="text-xs font-bold uppercase tracking-[0.25em] text-violet-600">
            Our Locations
          </p>

          <h2 className="mt-5 text-4xl font-black text-[#0d1b38] dark:text-white sm:text-6xl">
            Local understanding.
            <br />
            Global delivery.
          </h2>

        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2">

          {locations.map((location, index) => (
            <div
              key={location.city}
              className="
                l7-hover-card
                rounded-[22px]
                border border-slate-200
                bg-white
                p-8
                shadow-[0_12px_40px_rgba(15,23,42,0.05)]
                dark:border-white/10
                dark:bg-[#111722]
                lg:p-10
              "
            >

              <div className="flex items-center justify-between">

                <span className="text-xs text-slate-400">
                  0{index + 1}
                </span>

                <MapPin
                  size={20}
                  className="text-violet-600"
                />

              </div>

              <h3 className="mt-14 text-3xl font-black text-[#0d1b38] dark:text-white">
                {location.city}
              </h3>

              <p className="mt-4 text-slate-500 dark:text-slate-400">
                {location.place}
              </p>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Locations;