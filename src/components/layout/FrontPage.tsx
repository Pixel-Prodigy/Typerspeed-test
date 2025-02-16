import { CoolButton } from "../ui/CoolButton";
import { Keys } from "../ui/Keys";
import { TextShow } from "../ui/TextShow";

export function FrontPage() {
  return (
    <div
   
      className=" fixed w-screen h-screen backgroundGradient"
    >
      <div
        className="flex items-center  flex-col gap-10 max-w-[670px] mx-auto px-4 pt-15
      "
      >
        <div className="flex items-center justify-center">
          <h2 className="text-white font-bold text-[54px] font-serif">
            Velocity Type
          </h2>
        </div>
        <div className="flex items-center justify-center">
          <CoolButton />
        </div>
        <div className="flex justify-start w-full">
          <p className="mt-10 text-white cursor-pointer">Generated text...</p>
        </div>
        <TextShow />
        <div className="flex justify-center w-full h-full">
          <Keys />
        </div>
      </div>
    </div>
  );
}
