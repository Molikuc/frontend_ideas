import Productcard from "@/components/Productcard";
import Playercard from "@/components/Playercard";
import Logincard from "@/components/Logincard";
import Signupcard from "@/components/Signupcard";
import Popupcard from "@/components/Popupcard";
import Calendar from "@/components/Calendar";

const ElementPage = ({ params }: { params: { slug: string } }) => {
  const element = params.slug;

  const renderElement = () => {
    switch (element) {
      case "productcard":
        return <Productcard />;
      case "playercard":
        return <Playercard />;
      case "logincard":
        return <Logincard />;
      case "signupcard":
        return <Signupcard />;
      case "popupcard":
        return <Popupcard />;
      case "calendar":
        return <Calendar />;
      default:
        return <div>Element not Found</div>;
    }
  };

  return <div>{renderElement()}</div>;
};

export default ElementPage;
