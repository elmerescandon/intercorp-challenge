import Header3 from "@/components/atoms/Text/Header3/Header3";
import ProductSpecificationsColumn from "@/components/organisms/ProductSpecificationsColumn/ProductSpecificationsColumn";
import {IProductSpecification} from "@/utils/interfaces";
import {WrenchScrewdriverIcon} from "@heroicons/react/24/outline";

type ProductSpecificationSectionProps = {
  specs: IProductSpecification[];
};

const ProductSpecificationSection = ({
  specs,
}: ProductSpecificationSectionProps) => {
  return (
    <div className="w-full flex justify-center items-center">
      <div className="flex flex-col gap-4 max-w-[1120px] w-full">
        <div className="gap-2 flex justify-start items-center">
          <WrenchScrewdriverIcon className="w-8 h-8 text-promart-orange" />
          <Header3 text="Ficha Ténica" />
        </div>
        <div className="flex gap-8 max-lg:flex-col max-lg:gap-0">
          <ProductSpecificationsColumn
            specs={specs.slice(0, specs.length / 2)}
          />
          <ProductSpecificationsColumn
            specs={specs.slice(specs.length / 2, specs.length)}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductSpecificationSection;
