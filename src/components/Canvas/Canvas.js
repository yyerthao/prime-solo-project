import React, {
  useRef,
  useEffect,
  useState
} from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

// functional component
function Canvas() {
  // create a ref object that will hold the reference 
  // to our canvas element
  const canvasRef = useRef(null);
  const contextRef = useRef(null);
  // create a new state to remember when our button is pressed
  const [isDrawing, setIsDrawing] = useState(false);

  // ------------- callback function to trigger once when we mount ------------
  useEffect(() => {
    // we will get a reference to canvas 
    const canvas = canvasRef.current;
    // doubling pixel density by multiplying by 2
    canvas.width = window.innerWidth * 2;
    canvas.height = window.innerHeight * 2;
    // providing the value in pixels
    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;
    // will need to refer this to our handler functions below
    // so we need to store this context in another ref
    const context = canvas.getContext("2d")
    context.scale(2, 2); // this will support our screen density
    context.lineCap = "round" // so our lines will have round endings, styling 
    context.strokeStyle = "black" // provides the color
    context.lineWidth = 5
    contextRef.current = context;
  }, [])

  // ---------------------- create event handlers ----------------------

  // this function will be assigned to onMouseDown
  // this is when we press the mouse button

  // nativeEvent will come from event as an argument from our onMouseDown function
  const startDrawing = ({
    nativeEvent
  }) => {
    const {
      offsetX,
      offsetY
    } = nativeEvent;
    contextRef.current.beginPath()
    // offsetX and offsetY get passed to moveTo function
    contextRef.current.moveTo(offsetX, offsetY)
    setIsDrawing(true)
  }

  // this function will be assigned to onMouseUp
  // this is when we are done drawing 
  const finishDrawing = () => {
    contextRef.current.closePath()
    setIsDrawing(false)
  }

  // this function will trigger onMouseMove
  const draw = ({
    nativeEvent
  }) => {
    if (!isDrawing) {
      return
    }
    const {
      offsetX,
      offsetY
    } = nativeEvent;
    // everytime the mouse is moved, we need to draw a lie to the new coordinates
    contextRef.current.lineTo(offsetX, offsetY)
    contextRef.current.stroke()
    
  }

  return ( <
    canvas onMouseDown = {
      startDrawing
    }
    onMouseUp = {
      finishDrawing
    }
    onMouseMove = {
      draw
    }
    // passing our canvasRef as a ref
    // ref is similiar to props but .... 
    ref = {
      canvasRef
    }


    />
  );
}


export default connect(mapStoreToProps)(Canvas);
