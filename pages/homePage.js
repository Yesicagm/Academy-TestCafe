import { Selector, t } from 'testcafe'

class HomePage {
    constructor() {
        this.topIcons = Selector('#top_icons')
        ///agregar una tasK:
        this.addTask = Selector('.agenda_add_task')
        this.texBoxTask = Selector('.richtext_editor')
        this.addTaskButton = Selector('.submit_btn')
        this.newTaskRadioBtn = Selector('.checker')
        this.taskName = Selector('.text')

        ///////Editar una task ////
        this.rightClickTask = Selector('.text_cursor').nth(1)
        this.editName = Selector('.menu_item_edit').nth(1)
        this.texEditTask = Selector('.richtext_editor')
        ///////Delete a task//////////
        this.rightClickTask = Selector('.text_cursor').nth(1)
        this.deleteTask = Selector('.sel_delete_task').nth(1)
        this.deleteButton = Selector('.ist_button')
        //////edit date and time //////
        this.selecttask = Selector('.task_content_item').nth(1)
        this.addTime = Selector('.scheduler-actions-addtime')
        this.addHour = Selector('.scheduler-timepicker-input-controls>input')
        this.addHourButton = Selector('.scheduler-timepicker-actions-add')
        this.arrowDate = Selector('.scheduler-picker-header-action').nth(2)
        this.dayCalendar = Selector('.scheduler-picker-cell-day').nth(4)
        this.dateUpdated = Selector('.scheduler-actions-save')
        //////Drag and Drop ////
        this.hovertest = Selector('.task_item').nth(2)
        this.dragTask = Selector('.drag_and_drop_handler')
    }

    AddTask = async () => {

        await t

            .click(this.addTask)
            .typeText(this.texBoxTask, 'My first task in automated Task with Test Cafe')
            .click(this.addTaskButton)
        await t.wait(3000)

    }
    getTasksCount = async () => {
        await t.hover(this.newTaskRadioBtn)
        return this.newTaskRadioBtn.count
        await t.wait(3000)

    }

    getLastTaskName = async () => {
        const tasksCount = await this.getTasksCount()
        return this.taskName.nth(tasksCount - 1).innerText
        await t.wait(3000)

    }

    EditTask = async () => {
        await t
            .rightClick(this.rightClickTask)
            .click(this.editName)
            .selectText(this.texEditTask)
            .pressKey('delete')
            .typeText(this.texEditTask, 'Task Edited n.n/ ~By Yesica.')
            .click('.submit_btn')
        await t.wait(3000)

    }

    DeleteTask = async () => {
        await t
            .rightClick(this.rightClickTask)
            .click(this.deleteTask)
            .click(this.deleteButton)
        await t.wait(3000)

    }

    DragTask = async () => {
        await t
            .hover(this.hovertest)
            .drag(this.dragTask, 0, 690)
        await t.wait(3000)

    }

    EditDate = async () => {
        await t
            .click(this.selecttask)
            .click(this.addTime)
            .typeText(this.addHour, '3pm')
            .click(this.addHourButton)
            .click(this.arrowDate)
            .hover(this.dayCalendar)
            .click(this.dayCalendar)
            .click(this.dateUpdated)
        await t.wait(3000)

    }


}
export default new HomePage()
