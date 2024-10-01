import { assets } from "../../assets/Assets";
import { Doctor } from "../../Types/Assets.types";

const page = ({ doctor }: { doctor: Doctor }) => {
  return (
    <div className="w-full flex justify-between sm:flex-col md:flex-row  sm:items-center">
      <div className="p-4 sm:mx-auto rounded-lg w-fit border border-slate-400 bg-indigo-600 md:mt-3">
        <img className="h-[250px]" src={doctor.image} alt={doctor.name} />
      </div>
      <div className="border-slate-400 border-[2px] flex flex-col gap-8 p-8 rounded-md h-full w-2/3 mx-auto sm:mt-4">
        <div>
          <h1 className="text-xl text-gray-800 font-bold">{doctor.name}</h1>
          <h3 className="flex gap-3 mt-2">
            {doctor.degree}{" "}
            <div className="text-xs w-fit h-fit p-1 px-2 text-center rounded-full border border-gray-900">
              {doctor.experience}
            </div>
          </h3>
        </div>
        <div>
          <h1 className="flex font-bold text-sm gap-2">
            About <img src={assets.info_icon} alt="" />
          </h1>
          <p className="text-sm text-gray-800">{doctor.about}</p>
        </div>
        <div className="text-gray-900 font-bold">
          Appointment fee : <b className="font-normal">${doctor.fees}</b>{" "}
        </div>
      </div>
    </div>
  );
};

export default page;
