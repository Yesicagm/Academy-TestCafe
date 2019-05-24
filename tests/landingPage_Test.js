import { t } from 'testcafe'//test controllers
import landingPage from '../pages/landingPage'
import homePage from '../pages/homePage';
import { BASE_URL, USER, PASS } from '../utils/constants.js'

fixture`New Task Tests`
    .page(`${BASE_URL}`)
    .beforeEach(async () => {
        await landingPage.LoginFlow(USER, PASS)
    })

test('Create New Task', async t => {
    const tasksCountBeforeCreate = await homePage.getTasksCount()
    await homePage.AddTask()
    const tasksCountAfterCreate = await homePage.getTasksCount()
    await t.expect(tasksCountAfterCreate - tasksCountBeforeCreate).eql(1)
})

test('Edit task', async t => {
    await homePage.EditTask()

})

test('Delete task', async t => {
    await homePage.DeleteTask()

})


test('Drag and drop task', async t => {
    await homePage.DragTask()
})

test('Edit Date and time for a task', async t => {
    await homePage.EditDate()
})