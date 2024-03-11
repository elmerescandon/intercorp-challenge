import React from "react";

type SearchInputProps = {
  reference: React.RefObject<HTMLInputElement>;
};

const SearchInput = ({reference}: SearchInputProps) => {
  return (
    <input
      ref={reference}
      type="text"
      placeholder="Ingresa un SKU"
      className="bg-transparent border-0 border-gray-300   
      text-base font-light w-full text-promart-dark-gray
      active:border-0 focus:border-0 focus:outline-none"
    />
  );
};

export default SearchInput;
