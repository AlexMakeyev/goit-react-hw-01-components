import styled from '@emotion/styled'

export const Container = styled.div`
margin-top:0;
width:400px;

text-align:center;
color: black;
background-color:white;
border: 2px solid black;
border-radius:4px;
`;

export const Description = styled.div`
background-color:white;

`;
export const Avatar = styled.img`
margin-top: 20px;
background-color: grey;
width:150px;
border-radius: 50%;
border: 5px red;



`;

export const Name = styled.p`
margin-top:0;
margin-bottom: 20px;
font-size: 30px;
font-weight: bold;

`;
export const Tag = styled.p`
margin-top:0;
margin-bottom: 20px;
font-size:25px;


`;

export const Location = styled.p`
margin-top:0;
margin-bottom: 20px;
font-size:25px;
`;

export const Stats = styled.ul`
list-style: none;
padding: 0;
margin: 0;
display:flex;
justify-content: center;
border-top: 2px solid black;
background-color: grey;
`;

export const StatsInfo = styled.li`
margin-right:15px;
display:flex;
flex-direction: column;
border-right: 2px solid black;
:last-child{
    border:0;
}

`;

export const Followers = styled.span`
margin: 15px;
font-weight: bold;
font-size:25px;
`;
export const FollowersInfo = styled.span`
margin: 15px;
margin-top:0;
font-size:25px;

`;
export const Views = styled.span`
margin: 15px;
font-weight: bold;
font-size:25px;
`;


export const ViewsInfo = styled.span`
margin: 15px;
margin-top:0;
font-size:25px;
`;

export const Likes = styled.span`
margin: 15px;
font-weight: bold;
font-size:25px;
`;

export const LikesInfo = styled.span`
margin: 15px;
margin-top:0;
font-size:25px;
`;

