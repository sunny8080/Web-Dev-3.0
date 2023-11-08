import { Component, h, Method, Prop, State } from '@stencil/core';
@Component({
  tag: 'sk-side-drawer',
  styleUrl: './sk-side-drawer.css',
  shadow: true,
})
export class SkSideDrawer {
  @State() currentTab = 'navigation'; // or navigation
  @Prop({ reflect: true }) headerTitle: String;
  @Prop({ reflect: true, mutable: true }) opened: boolean;

  onTabChange(currentTab: string) {
    this.currentTab = currentTab === 'contact' ? 'contact' : 'navigation';
  }

  onCloseDrawer() {
    this.opened = false;
  }

  @Method()
  openDrawer() {
    this.opened = true;
  }

  render() {
    let mainContent = <slot />;

    if (this.currentTab === 'contact') {
      mainContent = (
        <div id="contact-information">
          <h2>Contact Information</h2>
          <p>You can reach us via phone or email.</p>
          <ul>
            <li>Phone : +91 123 456 7893</li>
            <li>
              E-mail:
              <a href="mailto:dummy45@dummy.com">dummy45@dummy.com</a>
            </li>
          </ul>
        </div>
      );
    }

    return [
      <div id="backdrop" onClick={this.onCloseDrawer.bind(this)}></div>,

      <aside>
        <header>
          <h1>{this.headerTitle || 'Menu'}</h1>
          <button onClick={this.onCloseDrawer.bind(this)}>X</button>
        </header>

        <section id="tabs">
          <button class={this.currentTab === 'navigation' && 'active'} onClick={this.onTabChange.bind(this, 'navigation')}>
            Navigation
          </button>

          <button class={this.currentTab === 'contact' && 'active'} onClick={this.onTabChange.bind(this, 'contact')}>
            Contact
          </button>
        </section>

        <main>{mainContent}</main>
      </aside>,
    ];
  }
}
