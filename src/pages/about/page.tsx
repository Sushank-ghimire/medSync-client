import { assets } from "../../assets/Assets";
import { medSyncInfo } from "../../utils/aboutDesc";

const About = () => {
  return (
    <section className="md:container w-[90vw] border-2 mx-auto mt-12 pb-24">
      <div className="w-full text-center p-4 text-xl md:text-2xl font-bold uppercase">
        <p className="animate_text_color">about us</p>
      </div>
      <div className="w-full md:flex-row flex flex-col mt-8 p-4 gap-12 md:ml-8">
        <img
          className="max-h-full md:w-1/3"
          src={assets.about_image}
          alt="Image"
        />
        <div className="md:w-2/4 flex flex-col gap-4 text-left text-gray-700">
          <p>
            Memory updated Here's the text modified for MedSync: Welcome to
            MedSync, your trusted partner in managing your healthcare needs
            conveniently and efficiently. At MedSync, we understand the
            challenges individuals face when it comes to scheduling doctor
            appointments and managing their health records.
          </p>

          <p>
            {" "}
            MedSync is committed to excellence in healthcare technology. We
            continuously strive to enhance our platform, integrating the latest
            advancements to improve user experience and deliver superior
            service. Whether you're booking your first appointment or managing
            ongoing care, MedSync is here to support you every step of the way.
          </p>
          <div>
            <h1 className="text-black text-lg capitalize font-bold mb-2">
              Our vision
            </h1>
            <p>
              Our vision at MedSync is to create a seamless healthcare
              experience for every user. We aim to bridge the gap between
              patients and healthcare providers, making it easier for you to
              access the care you need, when you need it.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col mt-10 md:ml-5 p-4">
        <h1 className="text-xl md:text-2xl text-gray-950 uppercase">
          Why choose us
        </h1>
        <div className="flex flex-wrap mt-8">
          {medSyncInfo.map((info, index) => (
            <div
              className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer hover:bg-indigo-600 md:w-1/3"
              key={index}
            >
              <h1>{info.title}</h1>
              <p>{info.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
