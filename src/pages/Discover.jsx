import Error from "../components/Error";
import SongCard from "../components/SongCard";
import Loader from "../components/Loader";
import { genres } from "../assets/constants";
import { useGetChartsQuery } from "../redux/service/shazamAPI";

const Discover = () => {
  const { dataCharts, isFetching, error } = useGetChartsQuery();
  console.log(dataCharts);

  // if (isFetching) return <Loader title="Still loading..." />;
  // if (error) return <Error />;
  const genne = "Pop";
  return (
    <div className="flex flex-col w-full    ">
      <div className="w-full flex justify-between items-center sm:flex-row flex-col mt-4 mb-10">
        <h2 className="font-bold caret-lime-500 p-4 text-3xl text-green-500 text-left">
          Discover the vibe of {genne}
        </h2>
        <select
          onChange={() => {}}
          value=""
          className="bg-slate-800 text-slate-50 p-3 text-sm rounded-lg outline-none sm:mt-0 mt-5"
        >
          {genres.map((gen) => (
            <option key={gen.value} value={gen.value}>
              {gen.title}
            </option>
          ))}
        </select>
      </div>
      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {/* {dataCharts.map((song, i) => (
          <SongCard key={song.key} />
        ))} */}
      </div>
    </div>
  );
};

export default Discover;
