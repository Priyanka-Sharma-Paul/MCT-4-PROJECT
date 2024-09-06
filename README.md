
# To-Do List Chrome Extension

A simple and functional Chrome extension to help you manage your daily tasks. The to-do list allows you to add, view, and delete tasks, with all tasks being stored in Chrome's sync storage, so they are available across your devices.

## Features
- **Add tasks**: Quickly add tasks to the list with a simple input field.
- **Delete tasks**: Remove tasks once they're completed or no longer needed.
- **Persistent storage**: Tasks are saved using Chrome's `storage.sync`, which means they will be available across devices signed in to the same Chrome account.
- **Responsive UI**: The popup has an adjustable size to provide a better user experience.

## Implementation Details

### 1. **manifest.json**
This file defines the extension's configuration, permissions, and popup details. The manifest declares the version, name, and permissions for the extension.


### 2. **index.html**
The HTML structure includes a simple interface for adding tasks to the list. It contains an input field for adding tasks, a button to submit tasks, and a list (`<ul>`) where tasks are displayed.


### 3. **styles.css**
The CSS file styles the input, buttons, and list items. It ensures the popup has a clean and intuitive design for the user.


### 4. **script.js**
This file contains the core logic for the to-do list, handling the addition, deletion, and saving of tasks using Chrome's `storage.sync`.

## Usage

1. **Add a Task**: Type a task into the input field and click the "Add Task" button to add the task to your list.
2. **Delete a Task**: To delete a task, simply click the "Delete" button next to the task. It will be removed from both the UI and the Chrome storage.
3. **Persistent Storage**: The tasks are saved using Chrome's `storage.sync`, meaning your tasks will be synchronized across all devices where you're signed in to Chrome with the same account.

### Installation Instructions

1. Clone this repository to your local machine.
   ```bash
   git clone https://github.com/Priyanka-Sharma-Paul/MCT-4-PROJECT
   ```
2. Open Chrome and navigate to `chrome://extensions/`.
3. Enable **Developer mode** by toggling the switch at the top right.
4. Click the **Load unpacked** button and select the folder where you cloned the repository.
5. The extension will be added to Chrome. You can now click the To-Do List icon in your browser toolbar to open the popup and manage your tasks.

## GitHub Repository

You can find the full source code and documentation for the To-Do List Chrome extension on GitHub:

[GitHub Repository Link](https://github.com/Priyanka-Sharma-Paul/MCT-4-PROJECT)
