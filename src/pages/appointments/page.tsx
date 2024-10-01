import { useParams } from "react-router-dom";
import { doctors } from "../../assets/Assets";
import { DoctorDetails } from "../../components/Export";

// Doctor Details
const Appointments = () => {
  const { doctorId } = useParams();
  const selectedDoctor = doctors.filter((doctor) => doctor._id === doctorId);
  return (
    <section className="md:container mx-auto w-[90vw] mt-12">
      <DoctorDetails doctor={selectedDoctor[0]} />
    </section>
  );
};

export default Appointments;
