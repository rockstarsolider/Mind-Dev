import { FiSearch } from "react-icons/fi";

function SearchBar() {
    return (
        <div className='search-bar'>
            <form>
                <FiSearch className="search-icon" />
                <input placeholder="جستوجو کنید" />
            </form>
        </div>
    );
}

export default SearchBar;