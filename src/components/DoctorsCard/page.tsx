import { Link } from "react-router-dom";
import { Doctor } from "../../Types/Assets.types";

const DoctorsCard = ({ doctor }: { doctor: Doctor }) => {
  return (
    <Link
      to={`/appointments/${doctor._id}`}
      className="border border-[#C9D8FF] rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all max-w-[250px] duration-500 w-fit sm:mx-auto"
    >
      <img className="bg-[#EAEFFF]" src={doctor.image} alt={doctor.name} />
      <div className="p-4">
        <div className="flex items-center gap-2 text-sm text-center text-green-500">
          <p className="w-2 h-2 rounded-full bg-green-500"></p>
          <p>Available</p>
        </div>
        <p className="text-[#262626] text-lg font-medium">{doctor.name}</p>
        <p className="text-[#5C5C5C] text-sm">{doctor.speciality}</p>
      </div>
    </Link>
  );
};

export default DoctorsCard;
