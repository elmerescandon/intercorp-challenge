"use client";
import {MagnifyingGlassIcon} from "@heroicons/react/20/solid";
import React from "react";

type SearchButtonProps = {
  onClick: () => void;
};

const SearchButton = ({onClick}: SearchButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="w-12 h-12 flex justify-center items-center rounded-full"
    >
      <MagnifyingGlassIcon className="w-6 h-6 text-promart-orange" />
    </button>
  );
};

export default SearchButton;
