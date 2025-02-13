import { CoolButton } from "../ui/CoolButton";
import { Keys } from "../ui/Keys";
import { TextShow } from "../ui/TextShow";

export function FrontPage() {
  
  return (
    <div
      style={{
        backgroundImage:
          "linear-gradient(#070008 0% , #42024C 21% , #9C05B5 53% , #080009 100%)",
      }}
      className=" fixed  w-screen h-screen "
    >
      <div className="flex items-center  flex-col gap-10 max-w-[600px] mx-auto px-4 py-2">
      <div className="flex justify-center items-center">
        <h2 className="text-white font-bold text-[54px] font-serif">
          Velocity Type
        </h2>
      </div>
      <div className="flex justify-center items-center">
        <CoolButton />
      </div>
      <div className="flex justify-start w-full">
        <p className="text-white mt-10 cursor-pointer">Generated text...</p>
      </div>
     <TextShow />
      <div className="flex justify-center w-full h-full">
      <Keys />

      </div>
      </div>
    </div>
  );
}
