/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface MyComponent {
        /**
          * The first name
         */
        "first": string;
        /**
          * The last name
         */
        "last": string;
        /**
          * The middle name
         */
        "middle": string;
    }
    interface SkSideDrawer {
        "headerTitle": String;
        "openDrawer": () => Promise<void>;
        "opened": boolean;
    }
}
declare global {
    interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {
    }
    var HTMLMyComponentElement: {
        prototype: HTMLMyComponentElement;
        new (): HTMLMyComponentElement;
    };
    interface HTMLSkSideDrawerElement extends Components.SkSideDrawer, HTMLStencilElement {
    }
    var HTMLSkSideDrawerElement: {
        prototype: HTMLSkSideDrawerElement;
        new (): HTMLSkSideDrawerElement;
    };
    interface HTMLElementTagNameMap {
        "my-component": HTMLMyComponentElement;
        "sk-side-drawer": HTMLSkSideDrawerElement;
    }
}
declare namespace LocalJSX {
    interface MyComponent {
        /**
          * The first name
         */
        "first"?: string;
        /**
          * The last name
         */
        "last"?: string;
        /**
          * The middle name
         */
        "middle"?: string;
    }
    interface SkSideDrawer {
        "headerTitle"?: String;
        "opened"?: boolean;
    }
    interface IntrinsicElements {
        "my-component": MyComponent;
        "sk-side-drawer": SkSideDrawer;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
            "sk-side-drawer": LocalJSX.SkSideDrawer & JSXBase.HTMLAttributes<HTMLSkSideDrawerElement>;
        }
    }
}
