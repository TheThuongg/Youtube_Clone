import React from "react";
import styled from "styled-components";
import Comment from "./Comment";

const Container = styled.div``;

const NewComment = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const Input = styled.input`
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.soft};
  color: ${({ theme }) => theme.text};
  background-color: transparent;
  outline: none;
  padding: 5px;
  width: 100%;
`;

const Comments = () => {
  return (
    <Container>
      <NewComment>
        <Avatar src="https://scontent.fhan15-1.fna.fbcdn.net/v/t39.30808-6/272055100_450523146806736_1831523203651274308_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=FaZZCIicrkMAX-z3Kwc&_nc_ht=scontent.fhan15-1.fna&oh=00_AT8S1F45Cc8GJlaJ1dQl-PTn8R6eITMNhDYKLtPQ4R89DA&oe=632C27A9" />
        <Input placeholder="Add a comment..." />
      </NewComment>
      <Comment/>
      <Comment/>
      <Comment/>
      <Comment/>
      <Comment/>
      <Comment/>
      <Comment/>
    </Container>
  );
};

export default Comments;
