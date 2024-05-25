import { Draggable } from "../models/Draggable-DragTarget";
import Project from "../models/Project";
import autobind from "../decorators/autobind";
import Component from "./Component";
/**
 * Project Item class, render project item
 */
export default class ProjectItem
  extends Component<HTMLUListElement, HTMLElement>
  implements Draggable
{
  private project: Project;

  constructor(hostId: string, project: Project) {
    super(hostId, "single-project", false, project.id);
    this.project = project;
    this.configure();
    this.renderContent();
  }

  configure(): void {
    this.element.addEventListener("dragstart", this.dragStartHandler);
    this.element.addEventListener("dragend", this.dragEndHandler);
  }

  get persons() {
    return (
      this.project.people + (this.project.people === 1 ? " person" : " persons")
    );
  }

  renderContent(): void {
    this.element.querySelector("h2")!.textContent = this.project.title;
    this.element.querySelector("h3")!.textContent = this.persons + " assigned";
    this.element.querySelector("p")!.textContent = this.project.description;
  }

  @autobind
  dragStartHandler(event: DragEvent): void {
    console.log("Drag start");
    event.dataTransfer!.setData("text/plain", this.project.id);
    event.dataTransfer!.effectAllowed = "move";
  }

  @autobind
  dragEndHandler(_: DragEvent): void {
    console.log("Drag end");
  }
}
