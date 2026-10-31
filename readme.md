\# 🕊️ Elegant Digital Wedding Invitation Website



A responsive, elegant, and interactive digital wedding invitation card built with clean semantic \*\*HTML5\*\*, modern \*\*CSS3\*\*, and vanilla \*\*JavaScript\*\*. It features a dynamic countdown timer counting down to the big day and an interactive RSVP popup modal for guests to respond.



\## ✨ Features

\*   \*\*Elegant \& Responsive Design:\*\* Optimized for both mobile devices and desktops using high-end typography and clean floral aesthetics.

\*   \*\*Live Countdown Timer:\*\* Calculates and displays days, hours, minutes, and seconds remaining in real time.

\*   \*\*Interactive RSVP Modal:\*\* Smooth pop-up form allowing guests to input their names, attendance status, and dietary choices.

\*   \*\*No Dependencies:\*\* Written completely in vanilla web languages without the need for external frameworks like React, Bootstrap, or Tailwind.



\## 📂 Project Structure

Ensure your project files are organized in a single folder like this:

```text

wedding-invitation/

├── index.html   # Structural layout of the card and modal

├── style.css    # Typography, alignment, and aesthetic themes

├── script.js    # Countdown logic and modal event interactions

└── README.md    # Documentation (This file)

```



\## 🚀 Getting Started



\### Running the Project Locally

1\. Clone or download this project folder to your local computer.

2\. Double-click the `index.html` file to instantly open it inside any modern web browser (Chrome, Safari, Edge, Firefox).



\### Customizing for Your Wedding

To customize this invitation for a real wedding, update the following files:



1\.  \*\*Change Names \& Event Details (`index.html`):\*\*

&#x20;   \*   Open `index.html` in a text editor (like VS Code or Notepad).

&#x20;   \*   Locate and modify the text inside the `<h1>` tag for the names.

&#x20;   \*   Update the `.details-box` paragraph fields to replace the placeholder date, time, and physical venue address with your own details.



2\.  \*\*Adjust the Target Date (`script.js`):\*\*

&#x20;   \*   Open `script.js`.

&#x20;   \*   Change the date string on line 3 to your exact wedding date time layout:

&#x20;       ```javascript

&#x20;       const targetWeddingDate = new Date("Oct 16, 2027 16:00:00").getTime();

&#x20;       ```



3\.  \*\*Theming / Colors (`style.css`):\*\*

&#x20;   \*   Open `style.css`.

&#x20;   \*   To alter the main background tone or accent theme, look for hex colors like `#b08d57` (Gold Accent) or `#f7f3f0` (Soft Cream Background) and replace them with your custom hex palette coordinates.



\## 🌐 Free Deployment Options

Once customized, you can launch this invitation website online for free using any of these services:

\*   \*\*GitHub Pages:\*\* Create a repository, upload your files, and enable Pages under the repository settings.

\*   \*\*Netlify / Vercel:\*\* Simply drag and drop your root project directory directly into their deployment landing zones.



