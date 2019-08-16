import React, { useState, useEffect } from 'react';
import './index.css';

export interface SliderProps {
  max?: number,
  current?: number,
  min?: number,
  onChang?: (value: number) => any
}

/** 
 * 留下问题 
 * 当前实现方案，鼠标hover到父级元素slider-container之后，圆形指示器显示。
 * 问题是：hover区域太小了，高度只有两个像素
 * 如何优化，让hover区域能够达到与指示器相同的高度，12像素
 * */

export default function Slider({ max = 10, min = 0, current = 0, onChang }: SliderProps) {
  /** 百分比位置 */
  const [left, setLeft] = useState();
  const [_current, setCurrent] = useState(current || min);

  useEffect(() => {
    setCurrent(current);
    setLeft(current/max);
  }, [current, max]);

  const activePos = `${left * 100}%`;
  
  return (
    <div className="slider-container">
      <div className="active" style={{ width: activePos }}></div>
      <div className="indicator" style={{ left: activePos }}></div>
    </div>
  )
}
