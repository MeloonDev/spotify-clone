import styled from "styled-components";
import { categories } from "../data/data";
import Category from "./Category";

const Categories = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;
`;

function Home() {
  return (
    <Categories>
      {categories.map((category) => (
        <Category key={category} category={category} />
      ))}
    </Categories>
  );
}
export default Home;
