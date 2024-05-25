// Drag & Drop Interfaces
/**
 * Draggable interface, object that can be dragged has to implement this
 */
export interface Draggable {
  /**
   * handler for dragStart event
   * @param event
   */
  dragStartHandler(event: DragEvent): void;

  /**
   * handler for dragEnd event
   * @param event
   */
  dragEndHandler(event: DragEvent): void;
}

/**
 * DragTarget interface, objects that can be targeted to drag
 */
export interface DragTarget {
  /**
   * handle for dropOver event
   * @param event
   */
  dragOverHandler(event: DragEvent): void;

  /**
   * handler for drop event
   * @param event
   */
  dropHandler(event: DragEvent): void;

  /**
   * handler for dragLeave event
   * @param event
   */
  dragLeaveHandler(event: DragEvent): void;
}
