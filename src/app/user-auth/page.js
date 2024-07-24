import CustomerHeader from "../_components/CustomerHeader";
import Footer from "../_components/Footer";
import UserSignup from "../_components/UserSignup";

const page = () => {
  return (
    <>
      <CustomerHeader />
      <div className="text-center">
        <h1>User </h1>
        <UserSignup />
      </div>
      <Footer />
    </>
  );
};

export default page;
