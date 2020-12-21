import "./App.css";
// import VerticalTabs from "./components/table"
import Navbar from "./components/Navbar";
import Cover from "./components/Cover";
import Missions from "./components/missions/missions";

import ApolloProvider from "./graphql/apolloProvider";

function App() {
  return (
    <ApolloProvider>
      <Navbar />
      <Cover />
      <Missions />
    </ApolloProvider>
  );
}

export default App;
