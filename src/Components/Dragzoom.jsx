import React from "react";
import Draggable from "react-draggable";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

export const Dragzoom = () => {
  return (
    <TransformWrapper style={{ height: "100%" }}>
      <TransformComponent>
        <Draggable>
          <div className="text-white">
            <img src="https://images.pexels.com/photos/842711/pexels-photo-842711.jpeg?cs=srgb&dl=pexels-christian-heitz-842711.jpg&fm=jpg" />
          </div>
        </Draggable>
      </TransformComponent>
    </TransformWrapper>
  );
};
