import Productcard from "@/components/Productcard";
import Playercard from "@/components/Playercard";

const ElementPage = ({ params }: { params: { slug: string } }) => {
  const element = params.slug;

  const renderElement = () => {
    switch (element) {
      case "productcard":
        return <Productcard />;
      case "playercard":
        return <Playercard />;
      default:
        return <div>Element not Found</div>;
    }
  };

  return <div>{renderElement()}</div>;
};

export default ElementPage;
