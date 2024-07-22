import CustomerHeader from "@/app/_components/CustomerHeader";
import Footer from "@/app/_components/Footer";

const page  = (props)=>{

    let name  = props.params.name;
    return(
        <div>

<CustomerHeader />
      <div className="main-page bg-[url('https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb')] object-cover h-[330px] w-full bg-no-repeat outline-none p-8 text-white      ">
        <h1 className="font-bold text-[65px] text-center pb-7 text-white ">
         {decodeURI(name)}
        </h1>
        </div>
       
      <Footer />

        </div>
    )

}

export default page;