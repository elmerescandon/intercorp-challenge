"use client";
import SearchButton from "@/components/atoms/Buttons/SearchButton/SearchButton";
import SearchInput from "@/components/atoms/Forms/SearchInput/SearchInput";
import Small from "@/components/atoms/Text/Small/Small";
import React, {useRef, useState} from "react";

type SearchBarProps = {
  loading?: boolean;
  handleSearch: (value: string) => void;
  alert: string;
  setAlert: (value: string) => void;
};

const SearchBar = ({
  loading = false,
  handleSearch,
  alert,
  setAlert,
}: SearchBarProps) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const onClick = () => {
    if (inputRef.current === null) return;
    if (inputRef.current.value === "") {
      setAlert("No se puede buscar un campo vacío, ingrese un valor.");
      return;
    }
    setAlert("");
    const inputValue = inputRef.current.value;
    handleSearch(inputValue);
  };

  return (
    <div className="w-full flex flex-col items-center flex-wrap gap-2">
      <form className="flex justify-between rounded-3xl px-6 py-2 bg-promart-soft-orange w-full max-w-[736px]">
        <SearchInput reference={inputRef} />
        <SearchButton onClick={onClick} />
      </form>
      <Small
        text="Ejemplo: 1000287815 (Cámara Web), 9996349 (Refrigeradora Blackline) "
        color="text-promart-subtle-gray"
      />
      <div className="w-full h-3 pb-8 text-center">
        {alert !== "" && <Small text={alert} color="text-promart-orange" />}
      </div>
    </div>
  );
};

export default SearchBar;
