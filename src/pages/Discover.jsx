import Error from "../components/Error";
import { genres } from "../assets/constants";

const Discover = () => {
  console.log(genres);
  return (
    <div className="flex flex-col w-full    ">
      <div className="w-full flex justify-between items-center sm:flex-row flex-col mt-4 mb-10">
        <h2 className="font-bold caret-lime-500 p-4 text-3xl text-green-500 text-left">
          Discover the vibe
        </h2>
        <select onChange={()={}} value="" className="bg-slate-800 text-slate-50 p-3 text-sm rounded-lg outline-none sm:mt-0 mt-5">
            {genres.map((gen)=>{<option key={gen.value}>
                {gen.title}
            </option>})}
        </select>
      </div>
    </div>
  );
};

export default Discover;
