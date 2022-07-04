const btn_add_element = document.getElementById('btn-add')
const todo_item_container = document.getElementById('todo-item-container')
const input_add_element = document.getElementById('input-add-element')

let alert_info_element = null

btn_add_element.addEventListener('click', () => {
    if (input_add_element.value !== '') {
        action_add_todo_item()
        input_add_element.value = ''
    }
})

action_check_no_item()

function action_check_no_item() {
    console.log(todo_item_container.childNodes.length)
    if (todo_item_container.childNodes.length < 2) {
        alert_info_element = document.createElement('div')
        alert_info_element.classList.add('alert', 'alert-info', 'mb-0', 'text-center')
        alert_info_element.textContent = 'No items'
        todo_item_container.appendChild(alert_info_element)
    }
}

function action_add_todo_item() {
    if (alert_info_element) alert_info_element.remove()

    const div_element = document.createElement('div')
    div_element.classList.add('input-group', 'mb-2')
    div_element.innerHTML = `
        <div class="border flex-fill rounded-start d-flex align-items-center ps-3 bg-white">
            <div>
                <label>
                    <input class="form-check-input me-2" type="checkbox" value="" />
                </label>
                <span></span>
            </div>
        </div>
        `
    const text_element = div_element.querySelector('div > div > span')
    text_element.textContent = input_add_element.value
    const checkbox_element = div_element.querySelector('div > div > label > input')

    checkbox_element.addEventListener('click', () => {
        if (checkbox_element.checked) {
            text_element.classList.add('text-decoration-line-through', 'opacity-50')
        } else {
            text_element.classList.remove('text-decoration-line-through', 'opacity-50')
        }
    })

    const button_element = document.createElement('button')
    button_element.innerHTML = `<span class="material-icons">delete</span>`
    button_element.classList.add('btn', 'btn-danger', 'd-flex', 'rounded-end')
    button_element.addEventListener('click', () => {
        div_element.remove()
        action_check_no_item()
    })

    div_element.appendChild(button_element)

    todo_item_container.appendChild(div_element)
}
