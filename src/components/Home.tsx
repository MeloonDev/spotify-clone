import styled from "styled-components";
import { categories } from "../data/data";
import Category from "./Category";
import { useDispatch } from "react-redux";
import { setActivePage } from "../store/activePageSlice";
import { useEffect } from "react";

const Categories = styled.div`
  margin-top: 0.5rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;
`;

function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setActivePage("home"));
  }, []);

  return (
    <Categories>
      {categories.map((category) => (
        <Category key={category} category={category} />
      ))}
    </Categories>
  );
}
export default Home;
