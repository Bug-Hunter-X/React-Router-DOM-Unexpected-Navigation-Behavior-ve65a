```javascript
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* ... other routes */}
      </Routes>
    </BrowserRouter>
  );
}

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <button onClick={() => {/* Some action that causes the issue */} }>Trigger Issue</button>
    </div>
  );
}

function About() {
  return (
    <div>
      <h1>About</h1>
    </div>
  );
}
export default App; 
```