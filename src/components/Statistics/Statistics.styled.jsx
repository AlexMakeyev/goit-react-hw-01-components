import styled from '@emotion/styled'
export const StatisticsSection = styled.section`
background-color:skyblue;
border: 2px solid grey;
`;



export const StatList = styled.ul`
list-style: none;
padding: 0;
margin: 0;
display:flex;
justify-content:space-between;

border-top: 2px solid grey;
background-color:pink;

`;
export const StatItem = styled.li`
padding:15px;
display:flex;
flex-direction: column;
text-align:center;
border-right: 2px solid grey;
:last-child{
    border:0;
}


`;

export const StatLabel = styled.span`
font-size: 20px;
font-weight: bold;
color:white;
`;

export const StatInfo = styled.span`
font-size: 50px;
font-weight: bold;
color:white;`;
