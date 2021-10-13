//For prototype demo purposes only!
import styled from 'styled-components';
import './styles/fonts.css';

const Category = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: "#80AE3C";
  border-radius: 10px;
  margin-bottom: 20px;
  font-family: 'Montserrat', sans-serif;
  font-size: 20px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), inset 0px 0px 5px rgba(0, 0, 0, 0.1);
  transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
  &:hover{
    transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
    color: #fff;
    background-color: #FC9A06;
    cursor: pointer;
  }
`;

const BeginnerCategories = () => {
  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: "300px 300px 300px",
      gridTemplateRows: "155px 155px 155px",
      justifyContent: 'space-between'
    }}>
      <a href="/home/demo" style={{ textDecoration: "none" }}>
        <Category style={{ height: "134px" }}>Demo: I Love You</Category>
      </a>
      <Category><a href="/Alphabet">Alphabets</a></Category>
      <Category>Numbers</Category>
      <Category>Greetings</Category>
      <Category>Appreciation</Category>
      <Category>Yes or No</Category>
      <Category>Everyday Items</Category>
      <Category>Animals 1</Category>
      <Category>Weather</Category>
    </div>
  );
};

export default BeginnerCategories;