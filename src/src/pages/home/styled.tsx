import styled from "styled-components";
import backgroundImage from '../../assets/BG.svg';
import '@fontsource/poppins';

export const AppScreen = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: stretch;
  height: 100vh;  /* Isso pode ser mantido */

  position: relative;

  @media (max-width: 968px) {
    flex-direction: column;
    overflow-y: auto; /* Permite rolagem quando a tela é menor */
  }
`;


export const Sidebar = styled.div`
  width: 60px;
  height: 100vh;
  position: fixed;
  top: 0;
  z-index: 10;

  @media (max-width: 968px) {
    width: 100%;
    height: 60px;
    position: relative;
  }
`;

export const LeftSidebar = styled(Sidebar)`
  background-color: #22A2F2;
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
  left: 0;

  @media (max-width: 968px) {
    height: auto;
  }
`;

export const RightSidebar = styled(Sidebar)`
  background: linear-gradient(to top, #22A2F2, #001238);
  right: 0;

  @media (max-width: 968px) {
    height: auto;
  }
`;

export const ContentContainer = styled.div`
  padding: 20px;
  background-color: #ffffff;
  width: 900px; /* Manter largura fixada para telas maiores */
  max-width: 100%; /* Para garantir que não exceda a tela em telas menores */
height: 100vh;
  @media (max-width: 968px) {
    width: 90%;
    padding: 10px;
   
  }
`;


export const SectionHeader = styled.h2`
  margin: 30px 0 10px;
  font-size: 24px;
  font-family: 'Poppins', sans-serif;
  color: #22A2F2;
  font-weight: 700;

  @media (max-width: 968px) {
    font-size: 20px;
    margin: 20px 0;
  }
`;

export const HorizontalDivider = styled.div`
  width: 934px;
  height: 2px;
  background-color: #22A2F2;
`;

export const SessaoDiv = styled.div`
  
`;

export const QuestionBlock = styled.div`
  margin-bottom: 32px;

  @media (max-width: 968px) {
    margin-bottom: 15px;
  }
`;

export const QuestionTextWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
`;

export const CandidateNameContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  margin: 20px 0 8px 0;
  word-break: break-all; 

  @media (max-width: 968px) {
    flex-direction: row;
    width: 97%;
  }
`;
export const SenseiNameContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  margin: 0px 0;
  gap: 20px;
 

  @media (max-width: 968px) {
    flex-direction: column;
    flex-direction: row;
    width: 100%;
  }
`;

const InputBase = styled.input`
  width: 100%;
  border: 1px solid #ddd;
  padding: 16px;
  background-color: #f4f4f4;
  border-radius: 5px;
  outline: none;
  font-size: 16px;
  font-family: 'Poppins', sans-serif;
`;

export const TextInput = styled(InputBase)`
  height: 10px;

  @media (max-width: 968px) {
    height: 20px;
  }
`;

export const TextInputSecond = styled(InputBase)`
  height: 10px;
  margin-left: 10px;

  @media (max-width: 968px) {
    height: 20px;
  }
`;

export const ResponseGenerate = styled.div`
width: 100%;
word-break: break-all; 
`;

export const TextAreaInput = styled(InputBase.withComponent('textarea'))`
  height: 180px;
  resize: none;
  font-size: 16px;
  font-family: 'Poppins', sans-serif;

  @media (max-width: 968px) {
    height: 100px;
  }
`;
export const SubTextAreaInput = styled(InputBase.withComponent('textarea'))`
  height: 180px;
  margin-top: 5px;
  resize: none;
  font-size: 16px;
  font-family: 'Poppins', sans-serif;


  @media (max-width: 968px) {
    height: 100px;
  }
`;

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0 0 20px 20px;

  @media (max-width: 968px) {
    margin: 0 0 10px;
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const BoldHeaderText = styled.span`
  font-size: 28px;
  font-family: 'Poppins', sans-serif;
  font-weight: 800;
  color: #001238;

  @media (max-width: 968px) {
    font-size: 24px;
  }
`;

export const RegularHeaderText = styled.span`
  font-size: 28px;
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  color: #001238;

  @media (max-width: 968px) {
    font-size: 24px;
  }
`;

export const HeaderTextWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-left: 20px;

  @media (max-width: 968px) {
    margin-left: 0;
    justify-content: flex-start;
  }
`;

export const IndicatorDot = styled.div`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: #22A2F2;
`;


export const SubQuestionBar = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  padding: 30px 30px 30px 0px;
 
`;


export const SubLeftBar = styled.div`
  width: 3px;
  margin-right: 20px;
  margin-left: 30px;
  background-color: #dedede;
`;

export const QuestionText = styled.p`
  font-size: 18px;
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  color: #001238;
  margin: 12px 0 12px 0;

  @media (max-width: 968px) {
    font-size: 16px;
  }
`;


export const QuestionTextPDF = styled.p`
  font-size: 18px;
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  color: #676767;
  margin: 12px 0 12px 0;

  @media (max-width: 968px) {
    font-size: 16px;
  }
`;
export const ImportText = styled.p`
  font-size: 18px;
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  color: #001238;
  line-height: 30px;
  @media (max-width: 968px) {
    font-size: 16px;
  }
`;
export const InfoText = styled.p`
  font-size: 18px;
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  color: #D90031;
  margin: 8px 0;

  @media (max-width: 968px) {
    font-size: 16px;
  }
`;

export const CandidateNameText = styled.p`
  font-size: 18px;
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  color: #001238;
  width: 300px;

  @media (max-width: 968px) {
    width: auto;
    font-size: 16px;
  }
`;
export const IntroduceText = styled.p`
  font-size: 18px;
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  color: #001238;

  @media (max-width: 968px) {
    width: auto;
    font-size: 16px;
  }
`;
export const IntroduceTextRed = styled.p`
display: inline;
  color: #D90031;
`;

export const IntroduceContainer = styled.div`
  width: 100%;
  margin: 40px 0;
`;

export const SubmitButton = styled.button`
  width: 148px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #34A9F2;
  color: #f4f4f4;
  border: none;
  border-radius: 8px;
  font-size: 18px;
  font-weight: 800;
  font-family: 'Poppins', sans-serif;
  cursor: pointer;
  margin-top: 20px;

  &:hover {
    background-color: #28a0e1;
  }

  @media (max-width: 968px) {
    width: 100%;
    height: 50px;
    font-size: 16px;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
  padding: 0 0 30px 0;

  @media (max-width: 968px) {
    justify-content: center;
    margin-top: 10px;
    display: none;
  }
`;

export const InfoButton = styled.button`
  width: 18px;
  height: 18px;
  background-color: #d1d1d1;
  color: #ffffff;
  border-radius: 50%;
  margin-left: 10px;
  border: none;
  cursor: pointer;

  @media (max-width: 968px) {
    width: 24px;
    height: 24px;
  }
`;
