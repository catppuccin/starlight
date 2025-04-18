<h3 align="center">
	<img src="https://raw.githubusercontent.com/catppuccin/catppuccin/main/assets/logos/exports/1544x1544_circle.png" width="100" alt="Logo"/><br/>
	<img src="https://raw.githubusercontent.com/catppuccin/catppuccin/main/assets/misc/transparent.png" height="30" width="0px"/>
	Catppuccin for <a href="https://github.com/withastro/starlight">Starlight</a>
	<img src="https://raw.githubusercontent.com/catppuccin/catppuccin/main/assets/misc/transparent.png" height="30" width="0px"/>
</h3>

<p align="center">
	<a href="https://github.com/catppuccin/starlight/stargazers"><img src="https://img.shields.io/github/stars/catppuccin/starlight?colorA=363a4f&colorB=b7bdf8&style=for-the-badge"></a>
	<a href="https://github.com/catppuccin/starlight/issues"><img src="https://img.shields.io/github/issues/catppuccin/starlight?colorA=363a4f&colorB=f5a97f&style=for-the-badge"></a>
	<a href="https://github.com/catppuccin/starlight/contributors"><img src="https://img.shields.io/github/contributors/catppuccin/starlight?colorA=363a4f&colorB=a6da95&style=for-the-badge"></a>
</p>

<p align="center">
  <img src="https://raw.githubusercontent.com/catppuccin/starlight/main/assets/preview.webp"/>
</p>

## Previews

<details>
<summary>🌻 Latte</summary>
<img src="https://raw.githubusercontent.com/catppuccin/starlight/main/assets/latte.webp"/>
</details>
<details>
<summary>🪴 Frappé</summary>
<img src="https://raw.githubusercontent.com/catppuccin/starlight/main/assets/frappe.webp"/>
</details>
<details>
<summary>🌺 Macchiato</summary>
<img src="https://raw.githubusercontent.com/catppuccin/starlight/main/assets/macchiato.webp"/>
</details>
<details>
<summary>🌿 Mocha</summary>
<img src="https://raw.githubusercontent.com/catppuccin/starlight/main/assets/mocha.webp"/>
</details>

## Usage

1. Install the theme package to your project with your preferred package manager:

   ```sh
   npm install @catppuccin/starlight
   pnpm add @catppuccin/starlight
   yarn add @catppuccin/starlight
   ```

2. Add the theme to your Starlight config.

   ```ts
   import catppuccin from "@catppuccin/starlight";

   export default defineConfig({
     // ...
     integrations: [
       starlight({
         // ...
         plugins: [catppuccin()],
       }),
     ],
   });
   ```

3. **(Optional)** Customize your theme for light/dark mode using `flavor` and `accent`.

   ```ts
   import catppuccin from "@catppuccin/starlight";

   export default defineConfig({
     // ...
     integrations: [
       starlight({
         // ...
         plugins: [
           catppuccin({
             dark: { flavor: "macchiato", accent: "sky" },
             light: { flavor: "latte", accent: "sky" },
           }),
         ],
       }),
     ],
   });
   ```

## 💝 Thanks to

- [TheOtterlord](https://github.com/TheOtterlord)
- [Louis Escher](https://github.com/louisescher)

&nbsp;

<p align="center">
	<img src="https://raw.githubusercontent.com/catppuccin/catppuccin/main/assets/footers/gray0_ctp_on_line.svg?sanitize=true" />
</p>

<p align="center">
	Copyright &copy; 2021-present <a href="https://github.com/catppuccin" target="_blank">Catppuccin Org</a>
</p>

<p align="center">
	<a href="https://github.com/catppuccin/catppuccin/blob/main/LICENSE"><img src="https://img.shields.io/static/v1.svg?style=for-the-badge&label=License&message=MIT&logoColor=d9e0ee&colorA=363a4f&colorB=b7bdf8"/></a>
</p>
