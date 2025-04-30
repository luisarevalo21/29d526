Here's a clean and informative `README.md` file for your Journey Builder React Coding Challenge project. It highlights the progress you've made and outlines the original project goals for context:

---

# Journey Builder – React Coding Challenge

This project is a React-based implementation of a node-based UI system that visualizes and manages a **Directed Acyclic Graph (DAG)** of forms. It is a part of an internal tool developed at **Avantos** to handle form prefill logic across interconnected form submissions.

## ✅ Current Progress

- Successfully integrated **React Flow** to render nodes and edges from the DAG.
- Fetched and displayed node data using the `action-blueprint-graph-get` API endpoint.
- Enabled **click interaction** with nodes.
- Displayed a **popover** UI on node click to show prefill configurations.
- Laid the **foundation for a modal UI** that allows editing prefill mappings.

## 📦 Technologies Used

- **React**
- **React Flow**
- **TypeScript** (if applicable)
- **Axios** or `fetch` (for API calls)

## 🗂 Folder Structure (example)

```
src/
├── components/
│   ├── FormEdge.tsx
│   ├── FormModal.tsx
│   └── FormNode.tsx
├── App.tsx
└── index.tsx
```

## 🚀 Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/journey-builder.git
   cd journey-builder
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the app locally:
   ```bash
   npm run dev
   ```

## 📌 Notes

- Used the mock server provided
- Ensure component logic can gracefully scale to support additional data sources in the future.
- The UI does not need to be pixel-perfect, but should reflect core logic and functionality.

## 🔮 Next Steps

- Implement full modal UI with selectable source fields.
- Integrate mocked global data into the modal.
- Support editing and saving prefill configurations.
- Add UI state persistence (optional).
