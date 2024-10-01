import { assets } from "../../assets/Assets";

const Contact = () => {
  return (
    <section className="mt-8 md:w-1/2 w-[90vw] mx-auto">
      <h1 className="text-center text-xl md:text-2xl uppercase font-bold animate_text_color mt-2">
        Contact us
      </h1>
      <div className="gap-6 flex flex-col md:flex-row justify-between mx-auto mt-10">
        <img
          className="md:w-1/2 w-full h-full"
          src={assets.contact_image}
          alt="contact"
        />
        <div className="flex w-1/2 flex-col gap-3 md:ml-5">
          <h1 className="uppercase text-slate-500 font-bold">Our Office</h1>
          <div className="font-sm flex flex-col text-slate-600">
            <p>12345 Tech Valley</p>
            <p>Suite 678, New York, USA</p>
          </div>
          <div className="font-sm flex flex-col text-slate-600">
            <p>Tel: (123) 456-7890</p>
            <p>Email: contact@medsync.com</p>
          </div>
          <div>
            <h1 className="uppercase text-slate-500 font-bold">
              CAREERS AT PRESCRIPTO
            </h1>
            <p className="font-sm text-slate-600">
              Explore exciting opportunities to join our dynamic teams.
            </p>
          </div>
          <button className="mt-3 py-4 transition-all border border-black px-5 hover:rounded text-black max-w-fit hover:bg-black hover:text-white hover:scale-105 delay-75 duration-300">
            Explore Jobs
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
