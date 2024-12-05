import { useState, ChangeEvent, useEffect } from "react";
import SearchIcon from "../icons/SearchIcon";
import _ from "lodash";

// Define your generic product type
interface TObject{
  [key: string]: any; // The object can have any keys
}

interface SearchFormProps {
  objectList: TObject[]; // Pass the products as a prop
  searchKeys: string[]; // Pass the keys you want to search as a prop
  setFilteredList: Function;
  placeholder: string;
}

const SearchForm: React.FC<SearchFormProps> = ({
  objectList,
  searchKeys,
  setFilteredList,
  placeholder,
}) => {
  const [search, setSearch] = useState<string>(""); // Search state

  // Search function that filters products based on dynamic keys
  const searchFn = () => {
    const filtered: TObject[] | undefined = objectList?.filter((object) =>
      _.some(searchKeys, (key) =>
        _.includes(_.toLower(object[key] || ""), _.toLower(search))
      )
    );
    setFilteredList(filtered!);
  };

  // Trigger the search when the search state changes
  useEffect(() => {
    if (search.trim() !== "") {
      searchFn();
    } else {
      // Reset the filtered products if the search input is empty
      setFilteredList(objectList);
    }
  }, [search, objectList, searchKeys]);

  return (
    <div className="relative w-full input-instance flex max-w-md items-center">
      <div className="pb-1">
        <SearchIcon size={21} color="#000000" />
      </div>
      <input
        className="bg-transparent"
        placeholder={`${placeholder} ...`}
        type="text"
        value={search}
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          setSearch(e.target.value);
        }}
      />
    </div>
  );
};

export default SearchForm;
