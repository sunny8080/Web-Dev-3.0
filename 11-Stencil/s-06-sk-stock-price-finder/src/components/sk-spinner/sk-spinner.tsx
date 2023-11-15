import { Component, h } from "@stencil/core";

@Component({
  tag: 'sk-spinner',
  styleUrl: './sk-spinner.css',
  shadow: true
})
export class Spinner {
  render() {
    return (
      <div class="lds-ring" >
        <div></div>
      </div>
    )
  }
} 
