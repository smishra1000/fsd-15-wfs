import logo from './logo.svg';
import './App.css';
import BlogList from './BlogList';
import CreateBlog from './CreateBlog';
import BlogList2 from './BlogList2';

function App() {
  return (
    <div className="App">
        <h1>Welcome to Node Express Graphql Project</h1>
        <CreateBlog/>
        <BlogList/>
        <BlogList2/>
    </div>
  );
}

export default App;
