import sheshop from '../myassets/sheshoplogo.png'
const Footer = () => {

  return (
    <div className="bg-black p-8 mt-6">
      <div className="flex flex-col items-center justify-center">
        
        <img src={sheshop} alt="" className='h-16' />

        <div className='text-sm pt-6 font-light text-white'>
        ©WE ARE ROOTS. ALL RIGHTS RESERVED.
        </div>
        
        </div>
            </div>
  );
};

export default Footer;
