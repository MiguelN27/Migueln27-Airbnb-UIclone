# Airbnb Web Page UI Clone — Specification

## Color Scheme

| Role | Color | Hex |
|------|-------|-----|
| Background | White | `#FFFFFF` |
| Secondary | Light Grey | `#F0F0F0` |
| Accent | Neon Pink | `#FD6565` |

---

## Page Structure

The page is composed of **5 sections**:

1. Navbar
2. List of Houses
3. Suggestion Section
4. More Information Section
5. Footer

---

## 1. Navbar

### Left Side
- **Logo** — clicking it returns the user to the main page.

### Middle Section
- **Three navigation buttons**, each with a small icon to its left:
  - Homes
  - Experiences
  - Services
- **Search bar** split into three fields:
  - Where
  - When
  - Who
- **Search button** positioned next to the search bar.

### Right Side
- **"Become a host"** button
- **Language selector** button (globe icon)
- **Settings menu** (hamburger icon — three horizontal lines)

---

## 2. List of Houses

Contains **7 card sections**, each showcasing popular rentals from different parts of the world.

### Each Card Section Includes
- Section title in an `<h2>` tag, with an arrow next to it linking to the section's full page.
- A row of **7 cards** displayed side by side.
- A right-pointing arrow in the top corner of the section to reveal more cards.

### Each Individual Card Contains
- Image
- Title (`<h2>`)
- Price (`<h3>`)
- Rating next to the price: a star icon followed by a number from **1 to 5**.

---

## 3. Suggestion Section

A **tab component** made up of:

- A **tab bar** containing all tab titles.
- The **active tab's title** displayed in **bold**.
- A **tab panel** below that displays the content of the selected tab.

---

## 4. More Information Section

Three columns, one for each category:

| Column 1 | Column 2 | Column 3 |
|----------|----------|----------|
| Support | Hosting | Airbnb |

---

## 5. Footer

### Left Side
Legal and policy links:
- Date
- Privacy
- Terms
- Your Privacy Choices

### Right Side
- Social media links to Airbnb's accounts, each represented by its corresponding social media icon.
