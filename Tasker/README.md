# React + Vite
 **how data flows from child to parent**, **what this approach is called**, **why it works**, and finally a **visual tree structure** .

---

## ✅ **How is data passed from `AddTaskModal` to `TaskBoard`?**

Inside `AddTaskModal` component, we’re using a **function prop** called `onSave`.

### Here's how it works:

1. In `TaskBoard`:

   ```js
   const handleAddTask = (newTask) => {
     setTasks([...tasks, newTask]);
     setShowAddModal(false);
   };

   {showAddModal && <AddTaskModal onSave={handleAddTask} />}
   ```

   * `handleAddTask` is a function defined in the parent (`TaskBoard`).
   * This function is passed **as a prop** named `onSave` to the child (`AddTaskModal`).

2. In `AddTaskModal`:

   ```js
   onClick={() => onSave(formValue)}
   ```

   * When the button is clicked, the `formValue` (i.e., the task data) is passed to the `onSave` function.
   * That function is actually `handleAddTask` in the parent component — so now the parent **receives the data** from the child!

---

## 🔄 What is this approach called?

This is called **"Lifting State Up"** or **"Child-to-Parent Communication using Callback Props"**.

### Why?

Because the child (`AddTaskModal`) doesn't manage the final `tasks` state — it **lifts the data up** to the parent (`TaskBoard`) by calling a function passed down to it.

---

## ❓Why not use normal props (from parent to child)?

**Props work for passing data *from parent to child* only.**

* Props are **unidirectional** (top-down).
* We **cannot** directly send data from child to parent using props.

**To send data from child to parent, we must pass a function down as a prop**, and have the child call that function with the data it wants to "send up."

---

## 🧠 Summary

| Concept          | Purpose                                                                         |
| ---------------- | ------------------------------------------------------------------------------- |
| Props            | Pass data **from parent to child**                                              |
| Callback props   | Pass data **from child to parent** by calling a function passed from the parent |
| Lifting state up | Move the state to a **common parent** to share data between components          |

---

## 🌳 Component Tree and Data Flow

```
TaskBoard
│
├── TaskAction
├── SearchTask
├── TaskTable
└── AddTaskModal (only if showAddModal === true)
      │
      └── onSave(formValue) → handleAddTask(formValue) → setTasks([...tasks, formValue])
```

**Flow direction:**

1. `TaskBoard` shows the `AddTaskModal` component when `showAddModal` is `true`.
2. `AddTaskModal` collects user input via form.
3. On submit, `AddTaskModal` **calls the `onSave` function** (provided by parent).
4. `onSave(formValue)` is really just `handleAddTask(formValue)` in `TaskBoard`.
5. `handleAddTask` updates the `tasks` state.


Here’s a simple **diagram using boxes and arrows** to visualize how data flows from **child to parent** using the `onSave` function prop in your app:

---

### 🧩 Component Tree and Data Flow

```
TaskBoard
│
├── TaskAction ───────┐
├── SearchTask        │
├── TaskTable         │
└── AddTaskModal      │
     (child)          │
                      ▼
            User fills form ➝ Clicks "Create new Task"
                      ▼
       AddTaskModal calls `onSave(formValue)`
                      ▼
    `onSave` is really `handleAddTask` (from TaskBoard)
                      ▼
         TaskBoard receives `formValue` as newTask
                      ▼
     Updates tasks state using setTasks([...tasks, newTask])
```

---

### 🔁 Detailed View: Function Prop Mechanism

```
TaskBoard (Parent)
  └─ const handleAddTask = (newTask) => { ... }
  └─ <AddTaskModal onSave={handleAddTask} />

         ↓ passes the function as a prop ↓

AddTaskModal (Child)
  └─ onClick={() => onSave(formValue)}

         ↑ calls parent's function with form data ↑

TaskBoard (Parent)
  └─ Receives formValue → saves to tasks state
```

---

### 🎯 Visual Summary

* ✅ **Props** → Pass data from **Parent ➝ Child**
* ✅ **Callback Props** → Allow **Child ➝ Parent**
* ✅ **Why it works:** Child doesn’t know about parent state, so the parent gives it a function to "report back"

---


