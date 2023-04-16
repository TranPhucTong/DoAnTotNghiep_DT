import React from "react";
import ReactSlider, { ReactSliderProps } from "react-slider";
import cn from "classnames";
const RangeSlider = (
  _props
) => {
  const isVertical = _props.orientation === "vertical";
  return (
    <ReactSlider
      {..._props}
      renderThumb={(props, state) => {
        _props.onChangeFrom(state.value[0])
        _props.onChangeTo(state.value[1])
      
        return (
        <div
          {...props}
          className={cn({
            "aspect-square rounded-full h-4 w-4 bg-white border-[#00BDD6] border-2 text-xs text-white flex items-center justify-center cursor-grab -translate-y-1":
              true,
          })}
        >
          {/* {state.valueNow} */}
        </div>
      )}}
      renderTrack={(props, state) => {
        const points = Array.isArray(state.value) ? state.value.length : null;
        const isMulti = points && points > 0;
        const isLast = isMulti ? state.index === points : state.index != 0;
        const isFirst = state.index === 0;
        return (
          <div
            {...props}
            className={cn({
              "h-2/4 top-1/2 -translate-y-1/2": !isVertical,
              "w-2/4 left-1/2 -translate-x-1/2": isVertical,
              "rounded-full": true,
              "bg-[#00BDD6]": isMulti ? !isFirst || !isLast : isFirst,
              "!bg-[#A6F5FF]": isMulti ? isFirst || isLast : isLast,
            })}
          ></div>
        );
      }}
      
    />
  );
};
export default RangeSlider;
