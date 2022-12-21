import React, { useState } from 'react';

const Header = () => {
  const [searchName, setSearchName] = useState('');

  const SearchHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchName(e.target.value);
    // console.log(searchName);
  };

  const fetchSearchImageData = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearchName('');
  };

  return (
    <div>
      <h1>ImageSite</h1>
      <form onSubmit={fetchSearchImageData}>
        <input onChange={SearchHandler} value={searchName} />
        <button type="submit">search</button>
      </form>
    </div>
  );
};

export default Header;
