import React from "react";
import PropTypes from "prop-types";
import key from "weak-key";
import styled from "styled-components";
import MenuBook from "@material-ui/icons/MenuBook";

const H2 = styled.h2`
  font-family: "Source Sans Pro", sans-serif;
  font-weight: 900;
  ${({ big }) => (big === true ? "font-size: 1.5rem;" : "")}
`;

const List = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const Item = styled.li`
  padding-left: 1.5rem;
  font-size: 1rem;
  line-height: 1.5;
  font-family: "Source Sans Pro", sans-serif;

  &:before {
    content: "\f061";
    font-family: FontAwesome;
    display: inline-block;
    margin-left: -1.5rem;
    width: 1.5rem;
  }

  strong {
    font-weight: 700;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
`;

const MenuBookIcon = styled(MenuBook)`
  font-size: 4rem;
  color: rgba(2, 126, 203, 1);
  margin-right: 1rem;
`;

const Content = styled.p`
  font-family: "Source Sans Pro", sans-serif;
  font-size: 1rem;
  line-height: 1.5;
  margin-top: 0;
`;

function ListContent({ headline, items, content, big, icon }) {
  return (
    <section>
      {headline && <H2 big={big}>{headline}</H2>}
      {content && (
        <ContentWrapper>
          {icon && <MenuBookIcon />}
          <Content>{content}</Content>
        </ContentWrapper>
      )}
      {items && (
        <List>
          {items.map(i => (
            <Item key={key({ i })} dangerouslySetInnerHTML={{ __html: i }} />
          ))}
        </List>
      )}
    </section>
  );
}

ListContent.defaultProps = {
  big: false,
  headline: null,
  content: null,
  items: null
};

ListContent.propTypes = {
  headline: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.string),
  content: PropTypes.string,
  big: PropTypes.bool
};

export default ListContent;
