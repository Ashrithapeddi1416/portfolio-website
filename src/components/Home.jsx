import React from 'react';

function Home() {
  return (
    <div
      className="col-span-9 h-screen bg-cover bg-center relative text-white"
      style={{
        backgroundImage:
          "url(https://contentful.harrypotter.com/usf1vwtuqyxm/4tNCXEveHBZWp1AgccZg52/39c30ab4bc67842362b78ca5ab8e0eef/HP-F4-goblet-of-fire-hermione-great-hall-smiling-book-web-landscape?w=1200&fit=fill&f=top)",
      }}
    >
     
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 p-6 rounded text-center">
        <h1 className="text-3xl font-bold">Hello, I am Hermione Granger</h1>
        <p className="mt-2 text-lg">I'm a graduate from Hogwarts 💫</p>
      </div>
    </div>
  );
}

export default Home;