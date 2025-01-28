//components/SearchComponent.js
type SearchComponentProps = {
  searchCourse: string;
  courseSearchUserFunction: () => void;
};

const SearchComponent = ({
  searchCourse,
  courseSearchUserFunction,
}: SearchComponentProps) => {
  return (
    <header className="App-header">
      <h1>GeeksforGeeks Shopping Cart</h1>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search for GFG Products..."
          value={searchCourse}
          onChange={courseSearchUserFunction}
        />
      </div>
    </header>
  );
};

export default SearchComponent;
