"use client";
import SearchButton from "@/components/atoms/Buttons/SearchButton/SearchButton";
import SearchInput from "@/components/atoms/Forms/SearchInput/SearchInput";
import Small from "@/components/atoms/Text/Small/Small";
import React from "react";

const SearchBar = () => {
  return (
    <div className="w-full flex flex-col items-center flex-wrap gap-2">
      <form className="flex justify-between rounded-3xl px-6 py-2 bg-promart-soft-orange w-full max-w-[736px]">
        <SearchInput />
        <SearchButton onClick={() => {}} />
      </form>
      <Small
        text="Ejemplo: 1000287815 (Cámara Web), 9996349 (Refrigeradora Blackline) "
        color="text-promart-subtle-gray"
      />
    </div>
  );
};

export default SearchBar;
