import styled from 'styled-components'

export const CharWrapper = styled.div`
  color: #24292e;
  width: 100%;
  max-width: 1240px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 30px;
  padding-right: 30px;
  padding-bottom: 30px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  grid-gap: 60px;
  max-width: ${(props) => props.theme.maxWidth};
  margin: 0 auto;
`

export const CharItem = styled.div`
  background: white;
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
  position: relative;
  display: flex;
  flex-direction: column;
`

export const CharItemImage = styled.img`
  width: 100%;
  object-fit: cover;
`

export const ItemDetails = styled.ul`
  padding: 15px 20px;
  line-height: 1.5rem;
  margin: 0;
`
