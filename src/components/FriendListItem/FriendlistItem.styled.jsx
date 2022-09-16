import styled from '@emotion/styled'

const setBgColor = (props) => (props.isOnline ? 'green' : 'red');
        
     

export const Item = styled.li`
display: flex;
    align-items: center;
    border: solid 0.5px rgb(134, 134, 134);`;

export const Status = styled.span`
display: inline-block;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    margin: 20px;
    background-color: ${setBgColor}
`;
export const Avatar = styled.img`
background-color: grey;
border-radius: 50%
`;

export const Name = styled.p`
    margin-left: 30px;
    margin-right: 50px;`;