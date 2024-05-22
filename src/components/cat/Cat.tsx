type Category = {
  id: number;
  category_name: string;
  availability: string;
  logo: string;
};

type CatProps = {
  categories: Category[];
};

const Cat: React.FC<CatProps> = ({ categories }) => {
  return (
    <div className="w-50 h-50 flex gap-3 justify-evenly my-10">
      {categories.map((c) => (
        <div
          key={c.id}
          className="flex flex-col gap-4 p-4 rounded-lg"
          style={{ backgroundColor: "rgba(126, 144, 254, 0.05)" }}
        >
          <div
            className="w-20 h-20 p-4 flex items-center justify-center rounded-lg"
            style={{ backgroundColor: "rgba(126, 144, 254, 0.1)" }}
          >
            <img src={c.logo} alt={`${c.category_name} logo`} className="max-w-full max-h-full" />
          </div>
          {/* <div className="width-[10px] height-[10px]">
            <img className="p-4 bg-color-[#7E90FE]" src={c.logo} alt="logo" />
          </div> */}
          <span className="text-xl font-bold"> {c.category_name}</span>
          <span className="text-sm font-light text-[#A3A3A3]"> {c.availability}</span>
        </div>
      ))}
    </div>
  );
};

export default Cat;
