import Productcard from "@/components/Productcard";
import Playercard from "@/components/Playercard";
import Logincard from "@/components/Logincard";
import Signupcard from "@/components/Signupcard";
import Popupcard from "@/components/Popupcard";
import Calendar from "@/components/Calendar";
import Creditcard from "@/components/Creditcard";
import Menu from "@/components/Menu";
import ProfileCard from "@/components/ProfileCard";
import Verification from "@/components/Verification";
import Location from "@/components/Location";
import Calculator from "@/components/Calculator";
import CoffeeMenu from "@/components/CoffeeMenu";
import ShoppingList from "@/components/ShoppingList";
import Article from "@/components/Article";
import Chart from "@/components/Chart";
import Sleep from "@/components/Sleep";

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
      case "creditcard":
        return <Creditcard />;
      case "menu":
        return <Menu />;
      case "profilecard":
        return <ProfileCard />;
      case "verification":
        return <Verification />;
      case "location":
        return <Location />;
      case "calculator":
        return <Calculator />;
      case "coffeemenu":
        return <CoffeeMenu />;
      case "shoppinglist":
        return <ShoppingList />;
      case "article":
        return <Article />;
      case "chart":
        return <Chart />;
      case "sleep":
        return <Sleep />;
      default:
        return <div>Element not Found</div>;
    }
  };

  return <div>{renderElement()}</div>;
};

export default ElementPage;
