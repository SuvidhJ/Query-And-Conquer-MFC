import Image from "next/image";

const DoorComponent = (myId) => {
  return (
    <div className="flex flex-col items-center">
      <Image
        src="/images/nameplate.png"
        alt=""
        width={150}
        height={50}
        className="w-40 h-auto"
      />
      <Image src="/images/door.png" alt="" width={300} height={200} />
      <div className="relative">
        <Image
          src="/images/Start.png"
          alt=""
          width={200}
          height={200}
          className="w-40 h-auto"
        />
        <div className="flex flex-row">
          <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-geistVF font-100">
            START
          </h1>
          <Image
            src="/images/lock.png"
            alt=""
            width={20}
            height={20}
            className="absolute top-1/4 right-5"
          />
        </div>
      </div>
    </div>
  );
};

export default DoorComponent;
