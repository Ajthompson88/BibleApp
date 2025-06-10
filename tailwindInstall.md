
# Installing and Using Tailwind CSS

## 🌟 What is Tailwind CSS?

✅ It’s a *utility-first* CSS framework.  
✅ Instead of writing big CSS files, you style your elements by adding **CSS utility classes directly in your HTML or JSX**.

Example:

```html
<button class="bg-blue-500 text-white font-bold py-2 px-4 rounded">
  Click Me
</button>
```

This is equivalent to writing:

```css
button {
  background-color: #3b82f6;
  color: white;
  font-weight: bold;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
}
```

👉 You don’t write that CSS — you just use the classes!

---

## ✨ Why Tailwind?

✅ Faster to build beautiful UIs  
✅ No switching between JSX and CSS files  
✅ Fully responsive (you can add breakpoints easily)  
✅ Highly customizable  
✅ Very popular in the industry (good on your resume!)

---

## 🛠️ How do you set it up?

### If you use **Vite**:

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

### Then in your `tailwind.config.js`, set it to scan your files:

```js
content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
```

### In your CSS file (usually `index.css` or `main.css`), add:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

✅ Done! Now you can use Tailwind classes anywhere.

---

## Example in React component:

```jsx
function VerseCard({ verse }) {
  return (
    <div className="border p-4 rounded shadow hover:shadow-lg transition">
      <h2 className="text-xl font-bold text-gray-800 mb-2">{verse.reference}</h2>
      <p className="text-gray-600 italic">"{verse.text}"</p>
    </div>
  );
}
```

---

## Typical Tailwind classes

| Purpose    | Example classes |
|------------|-----------------|
| Color      | `bg-blue-500`, `text-white` |
| Spacing    | `p-4`, `m-2`, `px-6`, `py-2` |
| Flexbox    | `flex`, `justify-center`, `items-center` |
| Sizing     | `w-full`, `max-w-lg` |
| Typography | `text-xl`, `font-bold`, `italic` |
| Borders    | `border`, `rounded-lg`, `shadow` |
| Effects    | `hover:bg-blue-600`, `transition` |

---

## Summary

- You **don’t write much CSS** — you use Tailwind classes.
- It’s **easy to read**, **responsive**, and **fast to build with**.
- Works perfectly with **React**, **Vite**, and your project idea.

---

### Encouragement

You will learn very quickly by trying it out. You do **not need the paid version** — the free Tailwind CSS is perfect for your Bible Companion project.

---

Happy building! ✨🙏
