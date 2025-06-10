// 1️⃣ Import React (needed for JSX support)
// import React from 'react';

// 2️⃣ Define a React component called "Home"
function Home() {
  // 3️⃣ Return some JSX (HTML-like syntax)
  return (
    <div className="text-center mt-8">
      <h1 className="text-3xl font-bold text-blue-700">Welcome to Bible Companion App</h1>
      <p className="mt-4 text-lg text-gray-700">Deepen your study of God’s Word.</p>
    </div>
  );
}

// 4️⃣ Export this component so App.tsx can use it
export default Home;
