import Image from "next/image";
import Link from "next/link";
export const doorData = [
  "obsidian lair",
  "onyx hall",
  "shadow crypt",
  "ebon veil",
];
const DoorComponent = ({
  id,
  setDoor,
}: {
  id: number;
  setDoor: React.Dispatch<React.SetStateAction<number>>;
}) => {
  return (
    <div className="flex flex-col items-center" key={id}>
      <Image
        src={`/images/nameplate${id}.png`}
        alt=""
        width={150}
        height={50}
        className="w-32 md:w-40 h-auto"
      />
      <Image src="/images/door.png" alt="" width={300} height={200} className="" />
      <div
        onClick={() => {
          setDoor(id - 1);
        }}
      >
        <div className="relative cursor-pointer hover:scale-110 transition-all duration-200 ease-linear">
          <Image
            src="/images/Start.png"
            alt=""
            width={200}
            height={200}
            className="w-32 md:w-40 h-auto"
          />
          <div className="flex flex-row absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 items-center gap-3">
            <h1 className=" font-irish font-semibold text-lg md:text-2xl ">
              START
            </h1>
            <Image
              src="/images/lock.png"
              alt=""
              width={20}
              height={20}
              className="w-5 md:w-6 h-5 md:h-6"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoorComponent;
