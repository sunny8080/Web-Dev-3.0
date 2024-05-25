import { projectState } from "../state/ProjectState";
import autobind from "../decorators/autobind";
import Validatable from "../models/Validatable";
import validate from "../utils/validation";
import Component from "./Component";

/**
 * Project Input class, used to add form in app
 */
export default class ProjectInput extends Component<
  HTMLDivElement,
  HTMLFormElement
> {
  titleInputElement: HTMLInputElement;
  descriptionInputElement: HTMLInputElement;
  peopleInputElement: HTMLInputElement;

  constructor() {
    super("app", "project-input", true, "user-input");
    this.titleInputElement = this.element.querySelector(
      "#title"
    ) as HTMLInputElement;
    this.descriptionInputElement = this.element.querySelector(
      "#description"
    ) as HTMLInputElement;
    this.peopleInputElement = this.element.querySelector(
      "#people"
    ) as HTMLInputElement;
    this.configure();
  }

  configure() {
    // this.element.addEventListener('submit', this.submitHandler.bind(this));
    this.element.addEventListener("submit", this.submitHandler);
  }

  renderContent(): void {}

  @autobind
  private submitHandler(event: Event) {
    event.preventDefault();
    const userInput = this.prepareDataForAddProject();
    if (userInput) {
      projectState.addProject(...userInput);
      this.clearFormInputs();
    }
  }

  private prepareDataForAddProject(): [string, string, number] | void {
    const title = this.titleInputElement.value;
    const description = this.descriptionInputElement.value;
    const people = this.peopleInputElement.value;

    const titleValidatable: Validatable = {
      name: "title",
      value: title,
      required: true,
    };

    const descriptionValidatable: Validatable = {
      name: "description",
      value: description,
      required: true,
      minLength: 5,
    };

    const peopleValidatable: Validatable = {
      name: "people",
      value: +people,
      required: true,
      min: 1,
      max: 25,
    };

    if (
      validate(titleValidatable) &&
      validate(descriptionValidatable) &&
      validate(peopleValidatable)
    ) {
      return [title, description, +people];
    } else {
      alert("Invalid input, Please try again with different values !");
    }
  }

  private clearFormInputs() {
    this.titleInputElement.value = "";
    this.descriptionInputElement.value = "";
    this.peopleInputElement.value = "";
  }
}
