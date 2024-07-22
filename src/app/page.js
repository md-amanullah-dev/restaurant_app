import CustomerHeader from "./_components/CustomerHeader";
import Footer from "./_components/Footer";

export default function Home() {
  return (
    <main>
    <CustomerHeader/>
    <div className="main-page bg-[url('https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb')] object-cover h-[330px] w-full bg-no-repeat outline-none p-8 text-white brightness-75 ">

      <h1 className="font-bold text-2xl text-center pb-7 text-gray-300 ">Food Delivery App</h1>
      <div className=" bg-white p-5 m-auto rounded-md border border-solid border-gray-200 w-[70%] ">
        <input className="h-[40px] border-none w-[30%] pl-4 " type="text" placeholder="Select place"/>
        <input className="h-[40px] border-none w-[65%] pl-4 " type="text" placeholder="Enter Food or Resturant Name "/>
      </div>

    </div>
      <Footer/>
    </main>
  );
}
