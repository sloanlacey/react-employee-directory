// import React, { useState, useEffect } from "react";
// import SearchBar from './SearchBar';
// import SearchResults from "../../components/SearchResults";

// function Search() {
//   const [search, setSearch] = useState("Wikipedia");
// //   const [title, setTitle] = useState("");
// //   const [url, setUrl] = useState("");
// //   const [error, setError] = useState("");

// //   useEffect(() => {
// //     if (!search) {
// //       return;
// //     }

// //     API.searchTerms(search)
// //       .then(res => {
// //         if (res.data.length === 0) {
// //           throw new Error("No results found.");
// //         }
// //         if (res.data.status === "error") {
// //           throw new Error(res.data.message);
// //         }
// //         setTitle(res.data[1][0]);
// //         setUrl(res.data[3][0]);
// //       })
// //       .catch(err => setError(err));
// //   }, [search]);

//   const handleInputChange = event => {
//     setSearch(event.target.value);
//   };

//   return (
//     <div>
//         {/* <h1 className="text-center">Search For Anything on Wikipedia</h1> */}
//         <SearchBar
//           handleInputChange={handleInputChange}
//           results={search}
//         />
//         <SearchResults title={title} url={url} />
//     </div>
//   );
// }

// export default Search;