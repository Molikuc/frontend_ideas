import Productcard from "@/components/Productcard";
import Elements2 from "@/components/Elements2";

const ElementPage = ({ params }: { params: { slug: string } }) => {
  const element = params.slug;

  const renderElement = () => {
    switch (element) {
      case "productcard":
        return <Productcard />;
      case "elements2":
        return <Elements2 />;
      default:
        return <div>Element not Found</div>;
    }
  };

  return <div>{renderElement()}</div>;
};

export default ElementPage;
