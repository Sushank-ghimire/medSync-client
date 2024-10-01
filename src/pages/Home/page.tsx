import { Link } from "react-router-dom";
import { assets, doctors, specialityData } from "../../assets/Assets";
import DoctorsCard from "../../components/DoctorsCard/page";

const Home = () => {
  return (
    <section className="md:container mx-auto w-[90vw] mt-8 rounded">
      <div className="w-full h-lg bg-violet-700 py-24 px-28 flex flex-col md:flex-row">
        <div className="flex flex-col mt-6 justify-center gap-3">
          {" "}
          <h1 className="text-2xl text-white leading-12 font-extrabold uppercase md:text-3xl">
            Book Appointment <br /> With Trusted <br /> Doctors
          </h1>
          <div className="mt-6 flex gap-2">
            <img src={assets.group_profiles} alt="images" />
            <p className="text-xs text-white">
              Simply browse through our extensive list of trusted doctors,
              <br />
              schedule your appointment hassle-free.
            </p>
          </div>
          <button className="py-3 px-4 rounded-full text-gray-700 bg-white left-0 flex w-fit mt-6 justify-center items-center gap-4 hover:scale-105 hover:gap-5 transition-all">
            <p>Book an appointment</p>
            <img src={assets.arrow_icon} alt="arrow" />
          </button>
        </div>
        <img
          className="md:w-1/2 w-full md:mt-0 mt-8"
          src={assets.header_img}
          alt="images"
        />
      </div>
      <div className="mt-8 flex justify-center items-center p-4 flex-col">
        <h1 className="font-bold text-black/70 text-xl md:text-2xl">
          Find by Speciality
        </h1>
        <p className="mt-2 text-sm text-center">
          Simply browse through our extensive list of trusted doctors, <br />{" "}
          schedule your appointment hassle-free.
        </p>

        <div className="mt-4 flex gap-8">
          {specialityData.map((data, index) => (
            <Link
              to={`/doctors/${data.speciality}`}
              key={index}
              className="flex flex-col items-center text-xs cursor-pointer flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500 mt-8"
            >
              <img
                className="w-16 sm:w-24 mb-2 "
                src={data.image}
                alt={data.speciality}
              />
              <p>{data.speciality}</p>
            </Link>
          ))}
        </div>
      </div>
      <div className="mt-14">
        <h1 className="font-bold text-center text-black/70 text-xl md:text-2xl">
          Top Doctors to Book
        </h1>
        <p className="mt-3 text-sm text-center">
          Simply browse through our extensive <br /> list of trusted doctors.
        </p>
        <div className="w-full grid md:grid-cols-3 gap-4 pt-5 gap-y-6 px-3 sm:px-2">
          {doctors.map((doctor, index) => (
            <DoctorsCard doctor={doctor} key={index} />
          ))}
        </div>
        <Link
          to={"/doctors"}
          className="mt-12 mb-12 block mx-auto w-fit bg-violet-600 rounded-full py-2 px-6 text-lg text-center text-white"
        >
          more
        </Link>
      </div>
      <div className="md:w-2/3 mx-auto bg-indigo-600 md:flex-row flex-col md:justify-between justify-center items-center rounded-lg flex">
        <div className="md:text-4xl sm:mx-auto font-bold text-3xl text-white p-4 pb-14">
          <h1 className="w-1/2 pt-24 pb-12 pl-12">
            Book Appointment With 100+ Trusted Doctors
          </h1>
          <Link
            to={"/register"}
            className="text-xl w-fit py-3 px-6 bg-rose-600 text-gray-200 ml-12 mb-12 rounded-full"
          >
            Create Account
          </Link>
        </div>
        <img
          className="h-[350px] sm:mx-auto md:mr-36"
          src={assets.appointment_img}
          alt="image"
        />
      </div>
    </section>
  );
};

export default Home;
