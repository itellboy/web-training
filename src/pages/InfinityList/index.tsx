import React, { useState, useCallback, useEffect } from 'react'
import { Div, listDefault, liHeight } from './style'

interface IndexProps {}

const Index: React.FC<IndexProps> = props => {
  const [list, setList] = useState<any>(listDefault)
  const [visitCount, setVisitCount] = useState(0)
  const [start, setStart] = useState(0)
  const [offsetTop, setOffsetTop] = useState(0)

  const onScroll = useCallback((event: any) => {
    const scrollTop = event.currentTarget.scrollTop
    setStart(Math.floor(scrollTop / liHeight))
    setOffsetTop(scrollTop - (scrollTop % liHeight))
  }, [])

  useEffect(() => {
    setVisitCount(Math.ceil(window.innerHeight / liHeight))
  }, [])

  useEffect(() => {
    setList(listDefault.slice(start, Math.min(listDefault.length, start + visitCount)))
  }, [start, visitCount])

  return (
    <Div style={{ height: window.innerHeight }} onScroll={onScroll}>
      <div className="placeholder"></div>
      <div className="list" style={{ transform: `translateY(${offsetTop}px)` }}>
        {list.map((item: any) => {
          return (
            <div className="li" key={item.id}>
              {item.value}
            </div>
          )
        })}
      </div>
    </Div>
  )
}

export default Index
