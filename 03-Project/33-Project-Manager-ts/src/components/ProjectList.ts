import { DragTarget } from "../models/Draggable-DragTarget";
import Project, { ProjectStatus } from "../models/Project";
import { projectState } from "../state/ProjectState";
import autobind from "../decorators/autobind";
import Component from "./Component";
import ProjectItem from "./ProjectItem";

// ------------------ Project List Class ------------------
/**
 * Render project list
 */
export default class ProjectList
  extends Component<HTMLDivElement, HTMLElement>
  implements DragTarget
{
  private type: "active" | "finished";
  assignedProjects: Project[];

  constructor(type: "active" | "finished") {
    super("app", "project-list", false, `${type}-projects`);
    this.type = type;
    this.assignedProjects = [];
    this.configure();
    this.renderContent();
  }

  configure(): void {
    this.element.addEventListener("dragover", this.dragOverHandler);
    this.element.addEventListener("drop", this.dropHandler);
    this.element.addEventListener("dragleave", this.dragLeaveHandler);

    projectState.addEventListener((projects: Project[]) => {
      this.assignedProjects = projects.filter((proj) => {
        // return this.type === "active"
        //   ? proj.status === ProjectStatus.Active
        //   : proj.status === ProjectStatus.Finished;

        return (
          proj.status ===
          (this.type === "active"
            ? ProjectStatus.Active
            : ProjectStatus.Finished)
        );
      });
      this.renderProjects();
    });
  }

  renderContent(): void {
    // First renderContent function will be called, as it is in constructor
    // then renderProjects function will be called
    const listId = `${this.type}-projects-list`;
    this.element.querySelector("ul")!.id = listId;
    this.element.querySelector("h2")!.textContent =
      this.type.toUpperCase() + " PROJECTS";
  }

  private renderProjects() {
    const listEl = document.getElementById(
      `${this.type}-projects-list`
    )! as HTMLUListElement;
    listEl.innerHTML = "";
    for (const proj of this.assignedProjects) {
      new ProjectItem(this.element.querySelector("ul")!.id, proj);
    }
  }

  @autobind
  dragOverHandler(event: DragEvent): void {
    console.log("Drag over");
    if (event.dataTransfer?.types[0] === "text/plain") {
      event.preventDefault();
      const listEl = this.element.querySelector("ul");
      listEl?.classList.add("droppable");
    }
  }

  @autobind
  dropHandler(event: DragEvent): void {
    console.log("Drop");
    const projectId = event.dataTransfer?.getData("text/plain");
    if (projectId) {
      projectState.moveProject(
        projectId,
        this.type === "active" ? ProjectStatus.Active : ProjectStatus.Finished
      );
    }
  }

  @autobind
  dragLeaveHandler(event: DragEvent): void {
    console.log("Drag leave");
    const listEl = this.element.querySelector("ul");
    listEl?.classList.remove("droppable");
  }
}
