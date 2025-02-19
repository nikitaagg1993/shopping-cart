import { InputOnChange } from "../types";

//components/SearchComponent.js
type SearchComponentProps = {
  searchCourse: string;
  courseSearchUserFunction: InputOnChange;
};

const SearchComponent = ({
  searchCourse,
  courseSearchUserFunction,
}: SearchComponentProps) => {
  return (
    <header className="App-header">
      <h1>Shopping Cart</h1>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search for Products..."
          value={searchCourse}
          onChange={courseSearchUserFunction}
        />
      </div>
    </header>
  );
};

export default SearchComponent;
