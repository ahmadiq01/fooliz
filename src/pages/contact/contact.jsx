import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import vectorIcon from "../../assets/Group 55.svg";

const ContactPage = () => {
  return (
    <div className="relative min-h-screen ">
      <Header />

      <a href="home" className="md:block hidden">
        <img
          src={vectorIcon}
          alt="Decoration"
          className="fixed top-6 right-6 w-10 h-10 cursor-pointer  "
        />
      </a>

      <div className="flex flex-col sm:flex-row md:flex-row lg:flex-row w-full">
      {/* Contact Info Section */}
      <div className="flex flex-row sm:flex-row md:flex-col items-center bg-[#dee13e] w-full sm:w-1/2 md:w-[30%] lg:w-[15%] p-6 md:rounded-t-2xl space-y-6 sm:space-y-0 sm:space-x-4 md:space-x-0 md:ml-[45px]">
        <div className="flex flex-col items-center sm:items-start">
          <p className="text-[60px] md:text-[50px] lg:text-[50px] xl:text-[69px] mt-[-30px] md:font-semi-bold font-semi-bold font-[Heathergreen] md:tracking-wider tracking-[px] mr-[14px]  md:mr-[1px] md:scale-y-125 scale-y-145">
            LET'S CONNECT.
          </p>
          <p className="text-xl font-black text-left w-full break-words md:mt-[-6px] md:ml-[2px] scale-y-200 mt-[10px] ml-[2px] tracking-[0px] leading-tight">
            +971 56 725 7157
          </p>

          <p className="text-lg font-extrabold text-left w-full scale-y-185 md:mt-[12px] md:ml-[8px] mt-[14px] ml-[4px]  tracking-[1px] leading-tight">
            fooliz@gmail.com
          </p>
          <p className="text-sm font-bold text-left w-full break-words mt-[15px] ml-[10px] scale-y-165 tracking-[2px] leading-tight">
            Dubai, Business Bay, SBK-506, UAE
          </p>
        </div>
        <div className="flex justify-center items-center w-full sm:w-1/2 md:w-full pb-6">
          <img
            // className="md:w-full w-1/4 md:h-auto object-contain max-w-xs md:max-w-sm"
            className=" md:w-[280px] w-[160px] md:mt-[75px] lg:max-w-lg md:max-w-md max-w-xs md:h-auto object-contain"
            src="https://s3-alpha-sig.figma.com/img/5092/9fd8/cf65f91df9f176a93f556878108115f9?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=aYgv4YCQbmk85AWiVQD5GawAy7x3ZDdCfAex701M9r2BKufrsBiCyEgBeYq7lPNIGKHh7i-PiDFbVSMExtdGvF~N-U-y6Rpmj4tBf8IJp1q8qVbCTqkHOhxXypEVoPuvWbBQ21rZDQHiOhqpN3E6UMabqy-WlujTVOGKGE8eN~BNGfa~xZSNn0ogTjQjey20t7dPC90kRMUVFOKNXA6mtogF42YaxjX4~tICLYpbPPrA8ANEEpapDD7ZqQGPIBbSZZECW2OJLCug4RnvKgH-xs5nWIOHQaWXpGK3HbWEfs5m67bNGzTyYqXo8FED7JVWcomPlUw2K91F4jITmUVbqQ__"
            alt="Animation"
          />
        </div>
      </div>

      {/* Form Section */}
      <div className="w-full sm:w-1/2 md:w-[60%] lg:w-[65%] p-4 md:p-8 md:ml-[75px]">
  <form className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-12">
    <div className="flex flex-col">
      <label className="text-gray-700 font-semibold mb-1 md:mb-2 text-base md:text-lg">First Name*</label>
      <input type="text" placeholder="First Name" className="border p-3 md:p-6 rounded-full w-full h-10 md:h-20 text-base md:text-lg" required />
    </div>

    <div className="flex flex-col">
      <label className="text-gray-700 font-semibold mb-1 md:mb-2 text-base md:text-lg">Last Name*</label>
      <input type="text" placeholder="Last Name" className="border p-3 md:p-6 rounded-full w-full h-10 md:h-20 text-base md:text-lg" required />
    </div>

    <div className="flex flex-col md:col-span-2">
      <label className="text-gray-700 font-semibold mb-1 md:mb-2 text-base md:text-lg">Email*</label>
      <input type="email" placeholder="Email" className="border p-3 md:p-6 rounded-full w-full h-10 md:h-20 text-base md:text-lg" required />
    </div>

    <div className="flex flex-col col-span-1">
      <label className="text-gray-700 font-semibold mb-1 md:mb-2 text-base md:text-lg">Message*</label>
      <textarea placeholder="Write your message here..." className="border p-3 md:p-6 rounded-[20px] w-full h-20 md:h-40 text-base md:text-lg" rows="3" required></textarea>
    </div>

    <fieldset className="col-span-1">
      <legend className="text-base md:text-lg font-semibold mb-2 md:mb-4 text-gray-700">Budget*</legend>
      <div className="grid grid-cols-1 gap-2 text-gray-700">
        <label><input type="radio" name="budget" value="250-1000" className="mr-2" /> $250-$1000</label>
        <label><input type="radio" name="budget" value="1000-2000" className="mr-2" /> $1000-$2000</label>
        <label><input type="radio" name="budget" value="2000-5000" className="mr-2" /> $2000-$5000</label>
        <label><input type="radio" name="budget" value="5000-10000" className="mr-2" /> $5000-$10000</label>
      </div>
    </fieldset>

    <button type="submit" className="bg-[#474cba] text-white py-3 md:py-5 px-6 md:px-10 rounded-full w-full md:w-1/4 hover:bg-blue-700 col-span-2 mt-4 md:mt-6 text-base md:text-lg">
      Submit
    </button>
  </form>
</div>

    </div>


      <Footer />
    </div>
  );
};

export default ContactPage;
