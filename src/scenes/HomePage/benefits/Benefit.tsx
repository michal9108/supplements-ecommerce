const childVariant = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

type Props = {
  icon: JSX.Element;
  title: string;
};



const Benefit = ({ icon, title }: Props) => {


  return (
    <div
    
      // variants={childVariant}
      className=" flex flex-col  flex-wrap gap-2 items-center justify-center rounded-md  text-center border-gray-100 px-2 py-2  m-6
      //  md:px-2 md:py-5 
       border-box "
    >
      <div className="mx-auto px-auto flex   justify-center ">
        <div className=" rounded-full border-3 border-gray-100 bg-primary-100 p-8 ">
          {icon}
        </div>

      </div>

      <h4 className="font-bold flex">{title}</h4>

    </div>
  );
};

export default Benefit;
