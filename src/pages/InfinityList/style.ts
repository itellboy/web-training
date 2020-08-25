import styled from 'styled-components'

export const size = 100
export const listDefault = Array.from({ length: size }, (item, index) => ({
  id: index,
  value: index,
}))
export const liHeight = 50

export const Div = styled.div`
  overflow: auto;
  position: relative;
  > .placeholder {
    height: ${size * liHeight}px;
  }
  > .list {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    > .li {
      height: ${liHeight}px;
      box-sizing: border-box;
      border-bottom: 2px solid lightcyan;
      text-align: center;
      line-height: ${liHeight}px;
    }
  }
`
