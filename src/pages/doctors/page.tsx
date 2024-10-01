import { useNavigate, useParams } from "react-router-dom";
import { doctors } from "../../assets/Assets";
import DoctorsCard from "../../components/DoctorsCard/page";
import { Sidebar } from "../../components/Export";
import { useEffect } from "react";

const Doctors = () => {
  const { specialist } = useParams();

  const navigate = useNavigate();

  const filteredDoctors = doctors.filter((doctor) =>
    doctor.speciality.toLowerCase().includes(specialist?.toLowerCase() || "")
  );

  useEffect(() => {
    if (specialist === "") navigate("/doctors");
  }, [specialist]);

  return (
    <section className="md:container mx-auto mt-12">
      <h1 className="text-gray-600 text-lg">
        Browse through the doctors specialist.
      </h1>
      <div className="flex justify-between">
        <Sidebar />
        <div className="flex sm:mx-auto w-2/3 sm:justify-center sm:items-center flex-wrap mt-4 ml-4 gap-8 pb-20">
          {filteredDoctors.map((doctor) => (
            <DoctorsCard doctor={doctor} key={doctor._id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Doctors;
