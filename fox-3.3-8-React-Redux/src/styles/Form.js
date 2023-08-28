import styled from 'styled-components';

export const Form = styled.form`
width: 100%;
display: grid;
grid-template: minmax(50px, 70px) auto  minmax(100px, 200px) / 50% 50%;
row-gap: 15px;
column-gap: 20px;
`;
export const Error1 = styled.p`
grid-row: 1/2;
grid-column: 1/2;
align-self: end;
font-size: 16px;
justify-self: center;
font-family: 'Times New Roman';
font-weight: 700;
letter-spacing: 0.5px;
`;
export const Error2 = styled.p`
grid-row: 1/2;
grid-column: 2/3;
align-self: end;
justify-self: center;
font-size: 16px;
font-family: 'Times New Roman';
font-weight: 700;
letter-spacing: 0.5px;
`;
export const InputEl = styled.input`
grid-row: 1/2;
grid-column: 1/3;
height: 40px;
border: 3px solid #008B8B;
border-radius: 25px;
padding: 0 20px;
margin: 0 20px;
`;
export const TextArea = styled.textarea`
resize: none;
grid-row: 3/4;
grid-column: 1/3;
border: 4px solid #4682B4;
border-radius: 25px;
padding: 10px 20px;
font-size: 18px;
font-family: 'Times New Roman';
`;

export const BtnSubmit = styled.button`
grid-row: 2/3;
min-width: 100px;
height: 20px;
justify-self: center;
background: #B0C4DE;
color: #4B0082;
width: 120px;
height: 30px;
border-radius: 20px;
font-weight: 600;
font-size: 18px;
font-family: 'Times New Roman';
box-shadow: 0 0 8px 0.5px black;
`;
export const BtnReset = styled.button`
grid-row: 2/3;
min-width: 100px;
height: 20px;
justify-self: center;
background: #DC143C;
color: #E0FFFF;
width: 120px;
height: 30px;
border-radius: 20px;
font-weight: 600;
font-size: 18px;
font-family: 'Times New Roman';
letter-spacing: 0.5px;
box-shadow: 0 0 8px 0.5px black;
`;
