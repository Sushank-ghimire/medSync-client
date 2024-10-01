import { useState } from "react";
import { specialityData } from "../../assets/Assets";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [active, setActive] = useState<string>("");

  return (
    <aside className="flex flex-col gap-4 mt-3 sm:pl-8 md:pl-0">
      {specialityData.map((data) => (
        <Link
          to={data.speciality === active ? "/doctors" : `/doctors/${data.speciality}`}
          onClick={() => {
            if (data.speciality === active) {
              // Reset active state to show all doctors
              setActive("");
            } else {
              // Set the clicked speciality as active
              setActive(data.speciality);
            }
          }}
          className={`cursor-pointer border-slate-600 border w-[150px] font-normal text-gray-800 py-1 px-2 rounded hover:bg-indigo-50 ${
            data.speciality === active
              ? "bg-indigo-100 hover:bg-indigo-100"
              : ""
          }`}
          key={data.speciality}
        >
          {data.speciality}
        </Link>
      ))}
    </aside>
  );
};

export default Sidebar;
