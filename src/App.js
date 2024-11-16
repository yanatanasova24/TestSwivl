import { Content } from "./components/styled/Content.styled";
import Header from "./components/Header";
import { GlobalStyles } from "./components/styled/Global";
import { MainContainer } from "./components/styled/MainContainer.styled";
import Cards from "./components/Cards";
import UserDetailsComponent from "./components/UserDetails";

function App() {
  return (
    <div>
      <GlobalStyles />
      <Header></Header>

      <Content>
        <MainContainer>
          <UserDetailsComponent/>
          <Cards></Cards>
       </MainContainer>
      </Content>
    </div>
  );
}

export default App;
