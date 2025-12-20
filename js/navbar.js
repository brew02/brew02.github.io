class NavBarComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <nav class="box">
      <a class="home" href="/">Home</a>
      <a class="about" href="/pages/about.html">About</a>
    </nav>
    `;
  }
}

customElements.define("navbar-component", NavBarComponent);
