- Task Tracker
Sample solution for the task-tracker challenge from roadmap.sh.

This is a simple command-line interface (CLI) application for managing tasks.


- Features
Add new tasks with a unique ID and store it in JSON format.
List tasks by their status: to-do, in-progress, or done.
Update the description of an existing task.
Delete tasks by their ID.
Mark tasks as in-progress or done.

- Prerequisites
Node.js installed on your system.

- Usage
# Add a Task
task-cli add "Drink a Coffee"
# List all Tasks
task-cli --list

- or by list the tasks by status
# To list the tasks that are marked as to-do
task-cli --list to-do

# To list the tasks that are marked as in-progess
task-cli --list in-progress

# To list the tasks that are marked as done
task-cli list done
Update a Task
task-cli --update 1 "Drink a Coffee and Do Coding"

- Mark Task Status
# Mark as `in-progress` with containing task ID as 1
task-cli --mark-in-progress 1

# Mark as `done` with containing task ID as 1
task-cli --mark-done 1